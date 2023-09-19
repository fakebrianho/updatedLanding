import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

export const NavigationBar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='nav_logo'></div>
				<div className='nav_menu'>
					<Player
						src='https://lottie.host/c3dc6c0a-d779-4486-948d-29960226435a/XWl2gfnrVO.json'
						className='player'
					/>
				</div>
			</div>
		</>
	)
}
