import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'

function formatString(inputStr) {
    // Remove hyphens and split into words
    let words = inputStr.split('-');
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // Join the words with a space
    let formattedStr = words.join(' ');
    return formattedStr;
}

export default function NavigateTo({ data }) {
	
	return (
		<>
			<div className='navigate'>
				{data.prev_file_name && (
					<button className='prev'>
						<Link className='align-items-center' href={`/chapters/${data.prev_file_name}`}>
							<ArrowBackIosNewIcon fontSize='large' />
							<span className='navTitle'>{formatString(data.prev_file_name)}</span>
						</Link>
					</button>
				)}
				{data.next_file_name && (
					<button className='next'>
						<Link className='align-items-center align-right' href={`/chapters/${data.next_file_name}`}>
							<span className='navTitle'>{formatString(data.next_file_name)}</span>
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

				.navTitle{
					font-family: var(--modern-font);
					font-weight: 500;
					font-size: 1.2rem;
					margin-left: 0.5rem;
					margin-right: 0.5rem;
				}


				.navigate {
					position: relative;
					margin-top: 5rem;
					height: 5rem;
				}

				.align-items-center{
					display: block;
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

					.navTitle{
						font-size: 1rem;
						margin: 0;
					}

					button{
						font-size: 1rem;
						text-align: center;
					}

					.navigate{
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;
					}
						
					.align-items-center{
						display: flex;
						align-items: center;
						flex-direction: row;
					}

					.align-right{
						justify-content: flex-end;
					}

					.next{
						width: 50%;
					}

					.prev{
						width: 50%;
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
