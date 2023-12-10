import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../../src/app/readingpage.module.css'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import AppBar from '@mui/material/AppBar'
import { createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'

const theme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#ff7f19',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			main: '#000000',
		},
	},
})

export default function MenuBar() {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<div className={styles.header}>
				<Button>
					<Link className={styles.back} href='/'>
						<Image
							// src='/uncertain-universe-logo.svg'
							src='/images/uncertain-universe-logo-scaled.svg'
							width={50}
							height={50}
							alt='Logo Icon'
						/>
					</Link>
				</Button>
				<IconButton
					size='large'
					color={theme.primary}
					aria-label='menu'
					aria-controls='menu-appbar'
					onClick={handleMenu}
				>
					<Image
						src='/images/MenuIcon-orange.png'
						width={24}
						height={24}
						alt='Menu Icon'
					/>
				</IconButton>

				<Menu
					id='menu-appbar'
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					className='menu'
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem className='menuitem' onClick={handleClose}>
						<Link className='menulink' href='/about'>
							About
						</Link>
					</MenuItem>
					<MenuItem className='menuitem' onClick={handleClose}>
						<Link className='menulink' href='/tableOfContent'>
							Table of Contents
						</Link>
					</MenuItem>
					<MenuItem className='menuitem' onClick={handleClose}>
						<Link className='menulink' href='/navigation'>
							Navigation
						</Link>
					</MenuItem>
				</Menu>

				<style jsx global>{`
					.MuiPopover-paper {
						border-radius: 0;
					}

					.menu {
						font-family: Optima;
					}

					.menuitem {
						font-size: 1.1rem;
						margin: 20px;
						color: #ff7f19;
					}

					.menulink {
						color: #ff7f19;
					}

					@media screen and (max-width: 450px) {
						.menuitem {
							font-size: 1.1rem;
							margin: 10px;
							color: #ff7f19;
						}
					}
				`}</style>
			</div>
		</>
	)
}
