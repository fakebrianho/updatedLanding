import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import styles from '../../src/app/readingpage.module.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'
import { set } from 'mongoose'

function cleanUpData(data) {
	const navTitle = data
	const splitData = navTitle.split('-')
	const upperData = splitData.map((word) => {
		return word[0].toUpperCase() + word.substr(1)
	})
	const cleanData = upperData.join(' ')
	const pageUrl = cleanData.replaceAll(' ', '')
	return [cleanData, data]
}

let sectiontitles = []
export default function NavigateTo({ data }) {
	console.log('hi')
	console.log(data)
	const [hasChild, sethasChild] = useState(false)
	if (data.num_child_nodes > 0) {
		// sethasChild(true);
		sectiontitles = data.child_nodes.map((node) => {
			return cleanUpData(node.name)
		})
	} else {
		// sethasChild(false);
		sectiontitles = [['There are no other sections in this chapter.', '']]
	}

	return (
		<>
			<div className='navigate'>
				{data.prev_file_name && (
					<button className='prev'>
						<Link href={`/chapters/${data.prev_file_name}`}>
							<ArrowBackIosNewIcon fontSize='large' />
						</Link>
					</button>
				)}
				{data.next_file_name && (
					<button className='next'>
						<Link href={`/chapters/${data.next_file_name}`}>
							<ArrowForwardIosIcon fontSize='large' />
						</Link>
					</button>
				)}
			</div>

			<div className='inthissection'>
				<Accordion square className='toggle'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<p id='accordsum'>In this section</p>
					</AccordionSummary>
					<AccordionDetails>
						<ul>
							{sectiontitles.map((title) => {
								return (
									<li key={title[1]}>
										<Link
											className={styles.individuallink}
											href={`/chapters/${title[1]}`}
										>
											{title[0]}
										</Link>
									</li>
								)
							})}
						</ul>
						{/* {!hasChild&&<p className={styles.subtitle}>There are no other sections in this chapter.</p>} */}
					</AccordionDetails>
				</Accordion>

				<style jsx global>{`
					/*
                * Prefixed by https://autoprefixer.github.io
                * PostCSS: v8.4.14,
                * Autoprefixer: v10.4.7
                * Browsers: last 4 version
                */

					button {
						background: none;
						border: none;
						font: inherit;
						cursor: pointer;
						color: #3176c7;
						padding: 0;
						font-size: 1.1rem;
					}

					.navigate {
						// display: -webkit-box;
						// display: -ms-flexbox;
						// display: flex;
						// -webkit-box-pack: justify;
						// -ms-flex-pack: justify;
						// justify-content: space-between;
						// -webkit-box-align: center;
						// -ms-flex-align: center;
						// align-items: center;
						position: relative;
						margin-top: 5rem;
						height: 5rem;
					}

					.prev {
						position: absolute;
						left: 0;
					}

					.next {
						position: absolute;
						right: 0;
					}

					.navigate a {
						color: #3176c7;
					}

					.inthissection {
						font-size: 1.1rem;
					}

					.toggle {
						-webkit-box-shadow: none;
						box-shadow: none;
					}

					#panel1a-header {
						padding: 0;
						display: -webkit-inline-box;
						display: -ms-inline-flexbox;
						display: inline-flex;
					}

					#accordsum {
						font-weight: 500;
						margin-right: 0.5rem;
						margin-bottom: 0;
						margin-top: 0;
					}

					ul li {
						list-style-type: none;
						text-decoration: none;
						display: inline-block;
						margin-right: 1rem;
						font-size: 1rem;
					}

					@media screen and (max-width: 480px) {
						ul li {
							display: block;
						}
					}

					a {
						text-decoration: none;
						color: grey;
					}

					ul {
						padding: 0;
						margin: 0;
					}
				`}</style>
			</div>
		</>
	)
}
