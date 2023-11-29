// import { getAllPostIds } from '../../../../api/getAllPostIds'
// import { getDataContent } from '../../../../api/getDataContent'
// import { Navigation } from '../../../../components/Navigation/Navigation'
'use client'
import TableOfContents from '../../../components/TableOfContents/TableOfContents'
import MenuBar from '../../../components/MenuBar/MenuBar'
import Head from 'next/head'
import styles from '../readingpage.module.css'

export default function Page({ params }) {
	return (
		<>
			<MenuBar />
			<div className={styles.container}>
				<Head>
					<title>Uncertain Universe</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<TableOfContents />
			</div>

			<style jsx global>
				{`
					html,
					body {
						background-color: white;
						padding: 0;
						margin: 0;
						font-family: var(--modern-font);
						width: 100vw;
						height: 100vh;
					}
					* {
						box-sizing: border-box;
					}

					h1,
					h2 {
						font-family: var(--old-font);
						// font-family: bluu;
						text-transform: uppercase;
					}
				`}
			</style>
		</>
	)
}

// export async function generateStaticParams() {
// 	const paths = await getAllPostIds()
// 	return paths.map((path) => path.params.chapter)
// }
