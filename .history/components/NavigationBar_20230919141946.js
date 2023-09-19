import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
export const NavigationBar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='nav_logo'>
					<Image
						src='/uncertain-universe-logo.svg'
						height={75}
						width={75}
						alt='Logo'
					></Image>
				</div>
				<div className='nav_menu'>
					<Player
						src='/lottie/orangeMenu.json'
						autoplay
						loop
						className='player'
					/>
				</div>
			</div>
		</>
	)
}
