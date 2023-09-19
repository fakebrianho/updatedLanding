import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

export const NavigationBar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='nav_logo'>
					<img src='/next.svg'></img>
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
