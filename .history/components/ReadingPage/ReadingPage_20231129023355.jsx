'use client'
import { useState } from 'react'
import styles from './ReadingPage.module.css'
import MenuBar from '../MenuBar/MenuBar'
import NavigateTo from '../NavigateTo/NavigateTo'
import Marginalia from '../Marginalia/Marginalia'
import AddMarginalia from '../AddMarginalia/AddMarginalia'
import { createTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import Trace from '../Trace/Trace'
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

// const tagList = nodedata[0].tags.map((tag) => {return( <div className={styles.tags}>{tag}</div> )});

// let renderMarginalia = nodedata[0].marginalia.map((marginalia) => {
// 	return (
// 		<Marginalia
// 			key={marginalia.id}
// 			id={marginalia.id}
// 			username={marginalia.name}
// 			content={marginalia.body}
// 			picture={marginalia.picture}
// 		/>
// 	)
// })

export default function ReadPage(post) {
	const [loading, setLoading] = useState(false)
	const [newMarg, setNewMarg] = useState(null)
	const addtoMarg = (newMarg) => {
		setNewMarg(newMarg)
		nodedata[0].marginalia.push(newMarg) //actually push to database here
	}

	const processQuote = (quote) => {
		if (quote.match('~')) {
			let splitcontent = quote.split('~')
			console.log('split content is', splitcontent)
			return splitcontent[0] + '<i>' + splitcontent[1] + '</i>'
		} else {
			return quote
		}
	}

	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
		>
			<>
				{
					<div className='all'>
						<MenuBar />
						<div className={styles.container}>
							<div>
								<Trace data={post.post} />
								{(post.post.layout === 'branch-head' && (
									<h1 className={styles.branchhead}>
										{post.post.title}
									</h1>
								)) ||
									(post.post.layout === 'section-head' && (
										<h1 className={styles.sectionhead}>
											{post.post.title}
										</h1>
									)) ||
									(post.post.layout === 'page' && (
										<h1 className={styles.title}>
											{post.post.title}
										</h1>
									)) ||
									(post.post.layout === 'quote' && (
										<p className={styles.quote}>"</p>
									))}
								{post.post.subtitle && (
									<h3 className={styles.subtitle}>
										{post.post.subtitle}
									</h3>
								)}
								{post.post.layout === 'branch-head' && (
									<div className='line'></div>
								)}

								<div className='maintext'>
									{(post.post.layout != 'quote' &&
										post.post.layout != 'branch-head' && (
											<div
												dangerouslySetInnerHTML={{
													__html: post.post.content,
												}}
											/>
										)) ||
										(post.post.layout === 'branch-head' && (
											<div
												className='hasdropcap'
												dangerouslySetInnerHTML={{
													__html: post.post.content,
												}}
											/>
										)) ||
										(post.post.layout === 'quote' && (
											<div
												className='center'
												dangerouslySetInnerHTML={{
													__html: processQuote(
														post.post.content
													),
												}}
											/>
										))}
								</div>
							</div>
							<NavigateTo data={post.post} />
							{nodedata[0].marginalia.length != 0 && (
								<div className={styles.footer}>
									<div className={styles.margcontainer}>
										{nodedata[0].marginalia.map(
											(marginalia) => {
												return (
													<Marginalia
														key={marginalia.id}
														username={
															marginalia.name
														}
														content={
															marginalia.body
														}
														picture={
															marginalia.picture
														}
													/>
												)
											}
										)}
									</div>
								</div>
							)}
							<AddMarginalia addMarg={addtoMarg} />

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

								h1,
								h2,
								h3 {
									// font-family: bluu;
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
								}
							`}</style>
						</div>
					</div>
				}
			</>
		</motion.div>
	)
}
