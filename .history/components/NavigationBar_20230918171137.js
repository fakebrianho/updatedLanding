import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
export const NavigationBar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='nav_logo'>
					<Image
						src='/vercel.svg'
						alt='logo'
						width='100'
						height='100'
					/>
				</div>
				<div className='nav_menu'>
					<Player
						src='/lottie/whiteOnBlack.json'
						autoplay
						loop
						className='player'
					/>
				</div>
			</div>
		</>
	)
}
