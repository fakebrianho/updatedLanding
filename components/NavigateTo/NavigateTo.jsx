import Link from 'next/link'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'

let sectiontitles = []
export default function NavigateTo({ data }) {
	return (
		<>
			<div className='navigate'>
				{data.prev_file_name && (
					<button onClick={() => fetchMarginalia(data.prev_file_name)} className="prev">
						<Link href={`/chapters/${data.prev_file_name}`}>
							<ArrowBackIosNewIcon fontSize='large' />
						</Link>
					</button>
				)}
				{data.next_file_name && (
					 <button onClick={() => fetchMarginalia(data.next_file_name)} className="next">
						<Link href={`/chapters/${data.next_file_name}`}>
							<ArrowForwardIosIcon fontSize='large' />
						</Link>
					</button>
				)}
			</div>

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
		</>
	)
}
