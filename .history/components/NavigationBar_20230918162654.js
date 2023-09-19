import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

export const NavigationBar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='nav_logo'></div>
				<div className='nav_menu'>
					<Player
						src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
						className='player'
					/>
				</div>
			</div>
		</>
	)
}
