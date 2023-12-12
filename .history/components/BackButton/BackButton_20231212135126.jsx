import { useRouter } from 'next/router'

export default function BackButton() {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	return <button onClick={goBack}>Back</button>
}
