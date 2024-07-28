
"use client";
import { useEffect, useState } from 'react';
import styles from "./ReadingPage.module.css";
import NavigateTo from "../NavigateTo/NavigateTo";
import Marginalia from "../Marginalia/Marginalia";
import AddMarginalia from "../AddMarginalia/AddMarginalia";
import { motion } from "framer-motion";
import MobileTrace from "../MobileTrace/MobileTrace";
import Trace from "../Trace/Trace";
import History from "../History/History";
import { NavigationBar } from "../NavigationBar";
import useTheme from '../../hooks/useThemes'
import { isMobile } from 'react-device-detect'

const pageTransition = {
	out: {
		opacity: 0,
		y: 40,
		transition: {
			duration: 1.75,
		},
	},
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 2.0,
			delay: 1,
		},
	},
}

//fake data
let nodedata = [
	{
		marginalia: [
			{
				id: '_1hiush',
				name: 'David P.',
				body: 'This is a marginalia',
				date: Date,
				picture: null,
			},
			{
				id: '_2sduhf',
				name: 'Cindy H.',
				body: 'This is another marginalia',
				date: Date,
				picture: null,
			},
		],
	},
]

export default function ReadPage(post) {
	// <<<<<<< master

	const [loading, setLoading] = useState(false);
	const [newMarg, setNewMarg] = useState(null);
	const [theme, toggleTheme] = useTheme()
	const [mMarg, setmMarg] = useState(null);
	const [counter, setCounter] = useState(1);
	const [fileName, setFileName] = useState(post.post.file_name);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/marginalia/${fileName}`, {
					method: 'GET',
				});
				console.log(response)
				const marginalia = await response.json();
				console.log("marginalia", marginalia);

				setmMarg(marginalia);
			} catch (e) {
				console.error('Error fetching API data for post ', fileName, ' ', e);
			}
		};

		// Since fileName is initialized to be null, we need to wait until it has a
		// valid value before fetching data
		if (fileName !== null) {
			fetchData();
		}
	}, [counter, fileName]);

	// =======
	// 	const [theme, toggleTheme] = useTheme()
	// 	const [mMarg, setmMarg] = useState(null)
	// 	const [counter, setCounter] = useState(1)
	// 	const [fileName, setFileName] = useState(post.post.file_name)
	// 	useEffect(() => {
	// 		const fetchData = async () => {
	// 			try {
	// 				const response = await fetch(`/api/${fileName}`, {
	// 					method: 'GET',
	// 				})
	// 				const marginalia = await response.json()
	// 				setmMarg(marginalia)
	// 			} catch (e) {
	// 				console.error(
	// 					'Error fetching API data for post ',
	// 					fileName,
	// 					' ',
	// 					e
	// 				)
	// 			}
	// 		}
	// 		if (fileName !== null) {
	// 			fetchData()
	// 		}
	// 	}, [counter, fileName])
	// >>>>>>> newCindyDevBranch

	const processQuote = (quote) => {
		if (quote.match('~')) {
			let splitcontent = quote.split('~')
			return splitcontent[0] + '<i>' + splitcontent[1] + '</i>'
		} else {
			return quote
		}
	}

	const deleteMarginalia = async (id) => {
		console.log("Deleting marginalia with id: ", id);
		try {
			const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				// Updates the marginalia front end component
				setmMarg(mMarg.filter(item => item._id !== id));
			} else {
				console.error('Failed to delete marginalia:', response.statusText);
			}
		} catch (error) {
			console.error('Error deleting marginalia:', error);
		}
	};

	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
		>
			<>
				{
					<div className={`all ${theme}`}>
						<NavigationBar
							sub={false}
							mode={theme}
							toggle={toggleTheme}
						/>

						
						{!isMobile && (<Trace data={post.post} theme={theme} />)}
						{!isMobile && (<History data={post.post} theme={theme} />)}
							

						<div className={`${styles.container} ${theme}`}>
							<div className={theme}>
							{isMobile && (<MobileTrace data={post.post} theme={theme} />)}
								{(post.post.layout === 'branch-head' && (
									<h1
										className={`${styles.branchhead}  ${theme}`}
									>
										{post.post.title}
									</h1>
								)) ||
									(post.post.layout === 'section-head' && (
										<h1
											className={`${styles.sectionhead}  ${theme}`}
										>
											{post.post.title}
										</h1>
									)) ||
									(post.post.layout === 'page' && (
										<h1
											className={`${styles.title}  ${theme}`}
										>
											{post.post.title}
										</h1>
									)) ||
									(post.post.layout === 'quote' && (
										<p className={`${styles.quote}  ${theme}`}></p>
									))}
								{post.post.subtitle && (
									<h3
										className={`${styles.subtitle}  ${theme}`}
									>
										{post.post.subtitle}
									</h3>
								)}
								{post.post.layout === 'branch-head' && (
									<div className='line'></div>
								)}

								<div className={`${"maintext"}  ${theme}`}>
									{(post.post.layout != "quote" &&
										post.post.layout != "branch-head" && (
											<div
												dangerouslySetInnerHTML={{
													__html: post.post.content,
												}}
											/>
										)) ||
										(post.post.layout === "branch-head" && (
											<div
												className="hasdropcap"
												dangerouslySetInnerHTML={{
													__html: post.post.content,
												}}
											/>
										)) ||
										(post.post.layout === "quote" && (
											<div
												className="center"
												dangerouslySetInnerHTML={{
													__html: processQuote(post.post.content),
												}}
											/>
										))}
								</div>
							</div>

							{/* live version */}
							<NavigateTo data={post.post} setCounter={setCounter} setFileName={setFileName} />
							{(mMarg) ? (mMarg.length != 0 && (
								<div className={styles.footer}>
									<div className={styles.margcontainer}>
										{mMarg.map(marginalia => {
											return (
												<Marginalia
													key={marginalia._id} //this was the key error for run build
													username={marginalia.name}
													content={marginalia.body}
													picture={marginalia.picture}
													theme={theme}
													deleteMarginalia={() => deleteMarginalia(marginalia._id)}
												/>
											);
										})}
									</div>
								</div>
							)) : (null)}
							<AddMarginalia file_name={post.post.file_name} counter={counter} setCounter={setCounter} theme={theme} />
							<style jsx global>{`
								html,
								body {
									background-color: white;
									padding: 0;
									margin: 0;
									font-family: Optima;
									width: 100vw;
									height: 100vh;
									transition: 0.5s;
								}

								.all {
									width: 100vw;
									height: 100vh;
								}

								.line {
									width: 50vw;
									height: 1px;
									border-bottom: 1px solid #ff8618;
									// position: absolute;
									margin-bottom: 1.5rem;
								}

								img {
									max-width: 100%;
									height: auto;
								}

								* {
									box-sizing: border-box;
								}

								.center {
									text-align: center;
									display: block;
									margin-left: auto;
									margin-right: auto;
									border: 1px solid #ff8618;
									padding: 2rem;
								}

								.hasdropcap:first-letter {
									font-family: var(--old-font);
									float: left;
									font-size: 6.5rem;
									line-height: 2.5rem;
									margin: 1.8rem 0.8rem 1rem 0;
								}

								p,
								ol,
								li {
									line-height: 1.5;
									font-size: 1.2rem;
								}

								@media screen and (max-width: 480px) {
									p,
									ol,
									li {
										font-size: 1rem;
									}
									img {
										max-width: 100%;
										height: auto;
									}
								}
							`}</style>
						</div>
					</div>
				}
			</>
		</motion.div>
	)
}
