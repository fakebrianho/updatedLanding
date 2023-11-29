import Link from 'next/link'
// import styles from 'tracmodule.css'
import styles from './trace.module.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useState } from 'react'

function cleanUpData(data) {
	const navTitle = data
	const splitData = navTitle.split('-')
	const upperData = splitData.map((word) => {
		return word[0].toUpperCase() + word.substr(1)
	})
	const cleanData = upperData.join(' ')
	return [cleanData]
}

export default function Trace(data) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Accordion square className='toggle'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<h3 id='accordsum' className={styles.traces}>
						{cleanUpData(data.data.parent_node)}
					</h3>
				</AccordionSummary>
				<AccordionDetails>
					{/* sx={'background-color: #F3F3F3;'}*/}
					<ul>
						{/* <li>
                            <Link
                                className={styles.individuallink}
                                href={`/chapters/${data.data.parent_node}`}>{cleanUpData(data.data.parent_node)}
                            </Link>
                        </li> */}

						<li onClick={() => setIsOpen(!isOpen)}>
							<Link href={`/chapters/${data.data.file_name}`}>
								<h3 className='intrace' id='highlighted'>
									{data.data.title}
									{data.data.num_child_nodes > 0 && (
										<span className='icons'>
											{' '}
											{isOpen ? (
												<ExpandLessIcon
													sx={{
														fontSize: '1rem',
														marginTop: '0',
													}}
												/>
											) : (
												<ExpandMoreIcon
													sx={{
														fontSize: '1rem',
														marginTop: '0',
													}}
												/>
											)}{' '}
										</span>
									)}
								</h3>
							</Link>
						</li>

						{data.data.child_nodes && (
							<ul className='children'>
								{isOpen &&
									data.data.child_nodes.map((title) => {
										return (
											<li key={title._id}>
												<Link
													className={
														styles.individuallink
													}
													href={`/chapters/${title.name}`}
												>
													{cleanUpData(title.name)}
												</Link>
											</li>
										)
									})}
							</ul>
						)}
					</ul>
					{/* {!hasChild&&<p className={styles.subtitle}>There are no other sections in this chapter.</p>} */}
				</AccordionDetails>
			</Accordion>

			<style jsx local>
				{`
					.toggle {
						-webkit-box-shadow: none;
						box-shadow: none;
					}

					#highlighted {
						color: #3176c7;
						text-decoration: underline;
						display: block;
						font-size: 1.17em;
						margin-block-start: 1em;
						margin-block-end: 1em;
						margin-inline-start: 0px;
						margin-inline-end: 0px;
						font-weight: bold;
					}

					.accordcontainer {
						background-color: #f3f3f3;
					}

					.intrace {
						margin-top: 0;
						font-family: var(--modern-font);
					}
					.children {
						font-family: var(--modern-font);
					}
				`}
			</style>
		</>
	)
}
