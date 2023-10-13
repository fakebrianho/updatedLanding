import LinearGradient from './magicui/linear-gradient'
import ShimmerButton from './magicui/shimmer-button'
mport { useRouter } from 'next/navigation'

export const CallToAction = () => {
	const router = useRouter()
	return (
		<div className='relative flex h-full w-full items-center justify-center rounded-lg  bg-background py-20 shadow-2xl enterButtonContainer'>
			<ShimmerButton>
				<span className='whitespace-pre-wrap bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent lg:text-2xl enterButton'>
					Read Me!
				</span>
			</ShimmerButton>
			<LinearGradient to='rgba(120,119,198,0.35)' />
		</div>
	)
}
