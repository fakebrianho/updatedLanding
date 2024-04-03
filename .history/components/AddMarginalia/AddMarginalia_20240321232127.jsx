import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

let marginalia = [
	{
		id: '1',
		name: 'David P.',
		body: 'This is a marginalia',
		date: Date,
		picture: { type: String, get: (v) => '${root}${v}' },
	},
	{
		id: '2',
		name: 'Cindy H.',
		body: 'This is another marginalia',
		date: Date,
		picture: { type: String, get: (v) => '${root}${v}' },
	},
]

export default function AddMarginalia({ addMarg }) {
	const [open, setOpen] = React.useState(false)
	const [name, setName] = React.useState('')
	const [comment, setComment] = React.useState('')

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		setName('')
		setComment('')
		setImageUrl(null)
	}

	const [imageUrl, setImageUrl] = React.useState(null)

	const handleFileUpload = (event) => {
		const file = event.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			setImageUrl(reader.result)
		}

		reader.readAsDataURL(file)
	}

	const handleSubmit = () => {
		const newMarginalia = {
			id: (marginalia.length + 1).toString(),
			name: name,
			body: comment,
			date: Date,
			picture: imageUrl,
		}
		marginalia.push(newMarginalia)
		addMarg(newMarginalia)
		handleClose()
	}

	return (
		<div className='addmarg'>
			<Button
				className='bg-primary'
				variant='contained'
				aria-label='add'
				onClick={handleClickOpen}
			>
				+ Add Marginalia
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add Marginalia</DialogTitle>
				<DialogContent sx={{ paddingBottom: '0.5em' }}>
					<p>
						Contribute to the conversation by adding a marginalia.
					</p>
					<TextField
						margin='normal'
						id='name'
						label='Your Name'
						variant='standard'
						color='warning'
						value={name}
						onChange={(event) => {
							setName(event.target.value)
						}}
					/>
					<TextField
						margin='normal'
						id='marginaliatext'
						label='What are you thinking?'
						multiline
						fullWidth
						variant='standard'
						color='warning'
						value={comment}
						onChange={(event) => {
							setComment(event.target.value)
						}}
					/>
					{imageUrl && (
						<div className='imgcontainer'>
							<img
								src={imageUrl}
								height='300'
								alt='Uploaded Image'
							/>
						</div>
					)}
				</DialogContent>
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='label'
					sx={{
						marginBottom: '1.5em',
						borderRadius: '0',
						marginLeft: '1em',
						marginRight: '1em',
					}}
				>
					<input
						id='upload-image'
						hidden
						accept='image/*'
						type='file'
						onChange={handleFileUpload}
					/>
					<AddPhotoAlternateIcon />
				</IconButton>

				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</DialogActions>
			</Dialog>

			<style jsx>
				{`
					.addmarg {
						font-weight: 400;
						// margin-top: 5em;
						position: absolute;
						bottom: 3.5em;
						right: 13em;
					}

					.orangebutton {
						background-color: #ff8c24;
					}

					.imgcontainer {
						width: 100%;
						height: 300px;
						overflow-x: scroll;
						margin-top: 1.5em;
					}

					@media screen and (max-width: 900px) {
						.addmarg button {
							width: 10em;
						}

						.addmarg {
							right: 3em;
						}
						.orangebutton {
							background-color: #ff8c24;
						}
					}
				`}
			</style>
		</div>
	)
}
