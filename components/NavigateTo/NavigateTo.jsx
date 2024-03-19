import Link from 'next/link'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'

export default function NavigateTo({ data, setCounter, setFileName }) {
	const fetchMarginalia = async (file_name) => {
		setFileName(file_name);
		setCounter((prevCounter) => prevCounter + 1);
	}

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
