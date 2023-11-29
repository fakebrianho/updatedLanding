import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../src/app/readingpage.module.css'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { getDataContent } from '../../api/getDataContent'
import getData from '../../api/getData'

function TableOfContentsItem(node) {
	const [isOpen, setIsOpen] = useState(false)
	console.log('items are', node)

	return (
		<div>
			<div
				className={styles.individuallink}
				onClick={() => setIsOpen(!isOpen)}
			>
				{Array.isArray(node.node) ? (
					<Link href={`/chapters/${node.node[0].file_name}`}>
						<div className='chapterlink'>{node.node[0].title}</div>
					</Link>
				) : (
					<Link href={`/chapters/${node.node.file_name}`}>
						<div className='chapterlink'>{node.node.title}</div>
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
						<TableOfContentsItem key={index} node={child} />
					))}
				</div>
			)}

			<style jsx local>
				{`
					.chapterlink {
						display: inline-block;
					}

					.chapterlink:hover,
					.chapterlink:focus,
					.chapterlink:active {
						color: #ff8618;
					}
				`}
			</style>
		</div>
	)
}

function TableOfContentsChapter(data) {
	const router = useRouter()
	console.log('chapter data', data.collection.index)

	return (
		<>
			<Grid item sm={6} xs={10}>
				<div className={styles.card}>
					{data.collection.index ? (
						<Link
							href={`/chapters/${data.collection.index[0][0].file_name}`}
						>
							<h3>{data.collection.index[0][0].title}</h3>
						</Link>
					) : (
						<Link href={''}>
							<h3>{data.collection.col}</h3>
						</Link>
					)}
				</div>
				{data.collection.index &&
					data.collection.index[0][1].map((node, i) => {
						return <TableOfContentsItem key={i} node={node} />
					})}
				{!data.collection.index && (
					<div className={styles.individuallink}>
						Work In Progress
					</div>
				)}
			</Grid>
		</>
	)
}

function TableOfContents() {
	const [isLoading, setIsLoading] = useState(true)
	const [treeData, setTreeData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const res = await getData('index')
			setTreeData(res)
			setIsLoading(false)
		}

		fetchData()
	}, [])

	return (
		<>
			<main>
				<h1>Table Of Contents</h1>
				<Box sx={{ width: '100%', paddingLeft: '0.1em' }}>
					<Grid
						container
						sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
						justifyContent={{ xs: 'center', sm: 'left' }}
						rowSpacing={2}
						columnSpacing={{ xs: 4, sm: 10, md: 15 }}
					>
						{!isLoading &&
							treeData.map((collection, id) => (
								<TableOfContentsChapter
									collection={collection}
									key={id}
								/>
							))}
					</Grid>
				</Box>
			</main>

			<style jsx local>
				{`
					main {
						padding: 3rem 0;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: left;
						align-items: left;
					}
				`}
			</style>

			<style jsx global>
				{`
					html,
					body {
						background-color: white;
						padding: 0;
						margin: 0;
						font-family: Optima;
						width: 100vw;
						height: 100vh;
					}
					* {
						box-sizing: border-box;
					}

					h1,
					h2 {
						font-family: IMFellEnglish;
						// font-family: bluu;
						text-transform: uppercase;
					}

					h3 {
						color: #3176c7;
						text-transform: capitalize;
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
		</>
	)
}

export default TableOfContents
