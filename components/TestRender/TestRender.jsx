export default function TestRender({ username, content, picture }) {
	return (
		<div>
			<p>{username}</p>
			<p className={`marginalia_text`}>{content}</p>
			<img src={picture} alt='marginalia picture' width={200} />
		</div>
	)
}
