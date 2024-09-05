import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from './marginalia.module.css'
import { useEffect } from 'react'
import useTheme from '../../hooks/useThemes'



export default function MarginaliaPopup({ id, username, content, picture, theme, setPopupOpen, onDelete }) {
	return (
		<div key={id} className={`${styles.popup} ${theme}`}>
			<button className={`${styles.button} ${styles.close}`} onClick={() => setPopupOpen(false)}>Close</button>
			<p className='marginalia_text'>{content}</p>
			{picture && (
				<div className='marginalia_picture'>
					<Image src={picture} alt='marginalia picture' width={900} height={900} />
				</div>
			)}
			<p className='marginalia_username'>- {username}</p>
			{/* </div> */}

			<style jsx global>{`
				/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

				

				.marginalia_username {
					font-size: 1.2rem;
					font-family: var(--modern-font);
				}

				.marginalia_text {
					font-size: 1.2rem;
					font-family: var(--modern-font);
				}

				.marginalia_picture {
					width: 100%;
					// overflow: hidden;
					margin-bottom: 1rem;
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
