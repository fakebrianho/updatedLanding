import LinearGradient from './magicui/linear-gradient'
import ShimmerButton from './magicui/shimmer-button'
import { useRouter } from 'next/navigation'
import Subscribe from './Subscribe/Subscribe'

export const CallToAction = () => {
	const router = useRouter()
	return (
		<div className='relative flex flex-col  h-full w-full items-center justify-center rounded-lg  bg-background py-20 shadow-2xl enterButtonContainer'>
			<LinearGradient to='rgba(120,119,198,0.35)' />
			<Subscribe />
		</div>
	)
}
