import React, { useRef } from 'react'
import Link from 'next/link'
// import styles from 'tracmodule.css'
import styles from './navleft.module.css'
import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import getData from '../../api/getData.js'

import { book } from '../../utils/processIndex.js'

export default function NavTrace(data) {
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [treeData, setTreeData] = useState(null)
	const containerRef = useRef(null)
	const highlightRef = useRef(null)

	const scrollToHighlight = () => {
		if (containerRef.current && highlightRef.current) {
			const position =
				highlightRef.current.offsetTop - containerRef.current.offsetTop

			containerRef.current.scrollTop = position - 1
			console.log('highlightRef is', highlightRef.current)
		}
	}

	const showPath = (target) => {
		let path = []
		let currentChapter = book.findChapterByFileName(target)[0]
		// console.log("currentchapter is", currentChapter);
		currentChapter.parentChapters.forEach((chapter) => {
			// console.log("chapter is", chapter.fileName);
			path.push(chapter)
		})
		return path
	}

	useEffect(() => {
		const fetchData = async () => {
			let res
			if (localStorage.getItem('indexData')) {
				res = JSON.parse(localStorage.getItem('indexData'))
			} else {
				res = await getData('index')
				localStorage.setItem('indexData', JSON.stringify(res))
			}
			setTreeData(res)
			setIsLoading(false)
		}
		fetchData()
	}, [])

  return (
    <div className={`${styles.toggle} ${data.theme}`}>
		<h3 className="horizontalText">Table of Content</h3>
      <Accordion onClick={scrollToHighlight} square className={data.theme} style={{ boxShadow: "none" }}>

          <main ref={containerRef} className={`${styles.traces} ${data.theme}`}>
            {/* match current data title and highlight in trace */}
			
              <Grid
                container
                direction="column"
                justifyContent="center"
                rowSpacing={2}
				alignItems="flex-start"
                columnSpacing={{ xs: 4, sm: 10, md: 15 }}
              >
                {!isLoading &&
                  treeData.map(
                    (collection, id) =>
                      collection.index && (
                        <TableOfContentsChapter
                          collection={collection}
                          key={id}
                          findmatch={data.title}
                          highlightRef={highlightRef}
                        />
                      )
                  )}
              </Grid>
          </main>

      </Accordion>

			<style jsx local>
				{`
					.accordcontainer {
						background-color: #f3f3f3;
					}

					h3 {
						color: #3176c7;
						text-transform: capitalize;
						font-size: 1.1rem;
						font-family: var(--modern-font);
					}

					.horizontalText{
						transform: translate(-100%, -50%);
						transform: rotate(270deg);
						position: absolute;
						top: 14%;
						right: -20%;
						z-index: 1;
					}

					ul li {
						list-style-type: none;
						text-decoration: none;
						display: block;
						margin-right: 1rem;
						font-size: 1rem;
					}

					a {
						text-decoration: none;
						color: grey;
					}

					ul {
						padding: 0;
						margin: 0;
					}
				`}
			</style>
		</div>
	)
}

function TableOfContentsItem(node) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<div
				className={styles.individuallink}
				onClick={() => setIsOpen(!isOpen)}
			>
				{Array.isArray(node.node) ? (
					node.node[0].file_name == node.findmatch ? (
						<Link href={`/chapters/${node.node[0].file_name}`}>
							<div
								ref={node.highlightRef}
								className={`${styles.chapterlink} ${styles.highlighted}`}
							>
								{node.node[0].title}
							</div>
						</Link>
					) : (
						<Link href={`/chapters/${node.node[0].file_name}`}>
							<div className={styles.chapterlink}>
								{node.node[0].title}
							</div>
						</Link>
					)
				) : node.node.file_name == node.findmatch ? (
					<Link href={`/chapters/${node.node.file_name}`}>
						<div
							ref={node.highlightRef}
							className={`${styles.chapterlink} ${styles.highlighted}`}
						>
							{node.node.title}
						</div>
					</Link>
				) : (
					<Link href={`/chapters/${node.node.file_name}`}>
						<div className={styles.chapterlink}>
							{node.node.title}
						</div>
					</Link>
				)}

				{Array.isArray(node.node) && (
					<span className='icons'>
						{' '}
						{isOpen ? (
							<ExpandLessIcon
								sx={{ fontSize: '1rem', marginTop: '0' }}
							/>
						) : (
							<ExpandMoreIcon
								sx={{ fontSize: '1rem', marginTop: '0' }}
							/>
						)}{' '}
					</span>
				)}
			</div>

			{isOpen && Array.isArray(node.node) && (
				<div
					className={styles.individuallink}
					style={{ marginLeft: '20px' }}
				>
					{node.node[1].map((child, index) => (
						<TableOfContentsItem
							key={index}
							node={child}
							findmatch={node.findmatch}
							highlightRef={node.highlightRef}
						/>
					))}
				</div>
			)}
		</div>
	)
}

function TableOfContentsChapter(data) {
	return (
		<>
			<Grid item sm={6} xs={10}>
				<div className={styles.card}>
					{data.collection.index[0][0].file_name == data.findmatch ? (
						<Link
							href={`/chapters/${data.collection.index[0][0].file_name}`}
						>
							<h3
								ref={data.highlightRef}
								className={`${styles.chapterlink} ${styles.highlighted}`}
							>
								{data.collection.index[0][0].title}
							</h3>
						</Link>
					) : (
						data.collection.index && (
							<Link
								href={`/chapters/${data.collection.index[0][0].file_name}`}
							>
								<h3 className={styles.chapterlink}>
									{data.collection.index[0][0].title}
								</h3>
							</Link>
						)
					)}
				</div>
				{data.collection.index &&
					data.collection.index[0][1].map((node, i) => {
						return (
							<TableOfContentsItem
								key={i}
								node={node}
								findmatch={data.findmatch}
								highlightRef={data.highlightRef}
							/>
						)
					})}
			</Grid>
		</>
	)
}
