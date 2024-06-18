import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../../src/app/readingpage.module.css'
import { useEffect } from 'react'
import useTheme from '../../hooks/useThemes'

export default function Marginalia({ id, username, content, picture, mode }) {
	const [theme, toggleTheme] = useTheme()
	useEffect(() => {
		randomizeMarg()
	})

	const randomizeMarg = () => {
		let r
		let list = document.getElementsByClassName('marginalia')
		for (var i = 0; i < list.length; i++) {
			r = Math.floor(1 + Math.random() * 30)
			list[i].style.marginTop = r + 'px'
			console.log('changed margin')
		}
	}

	return (
		<div className='container'>
			<div key={id} className={`marginalia ${mode}`}>
				{/* <div className="marginalia__container"> */}
				<p className={`marginalia_text ${mode}`}>{content}</p>
				{picture && (
					<div className='marginalia_picture'>
						<img src={picture} alt='marginalia picture' width={200} />
					</div>
				)}
				<p className='marginalia_username'>{username}</p>
				{/* </div> */}
			</div>
			<div className='delete_marginalia'>&#10006;</div>
			<style jsx global>{`
				/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

				.marginalia:hover {
					-webkit-filter: drop-shadow(0px 0px 15px #ff8618);
					filter: drop-shadow(0px 0px 15px #ff8618);
					-webkit-transition-duration: 1s;
					-o-transition-duration: 1s;
					transition-duration: 1s;
				}

				.container {
					width: 15em;
					min-width: 15em;
					height: 15em;
					padding: 30px;
					padding-top: 25px;
					overflow-x: hidden;
					overflow-y: scroll;
					position: relative;
				}

				.marginalia {
					/* background-color: white; */
					-webkit-filter: drop-shadow(0px 0px 5px #3176c7);
					filter: drop-shadow(0px 0px 5px #3176c7);
					-webkit-backdrop-filter: blur(5px);
				}

				.marginalia_username {
					font-size: 1rem;
				}

				.marginalia_text {
					font-size: 1rem;
				}

				.delete_marginalia {
					visibility: hidden;
					font-size: 1rem;
					position: absolute;
					bottom: 20px;
					right: 20px;
				}

				.delete_marginalia:hover {
					color: red;
				}

				.marginalia_picture {
					width: 11.5em;
					overflow: hidden;
				}
				@media screen and (max-width: 450px) {
					.marginalia {
						width: 12em;
						height: 14em;
						margin: 0.5em;
						/* background-color: white; */
						-webkit-filter: drop-shadow(0px 0px 3px #5a58cb);
						filter: drop-shadow(0px 0px 3px #5a58cb);
						-webkit-backdrop-filter: blur(3px);
						padding: 20px;
					}
				}
			`}</style>
		</div>
	)
}
