import styles from './AboutPage.module.css'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(SplitText)
export default function About() {
	const textRef = useRef(null) // Create a ref
	// Let's define the position of the current text
	let currentTextPos = 0
	const tl = gsap.timeline()

	// Check if there's an animation in progress
	let isAnimating = false
	useEffect(() => {
		// Ensure the element is available
		if (textRef.current) {
			const mySplitText = new SplitText(textRef.current, {
				type: 'words',
			})
			const words = mySplitText.words

			// Set initial state for each word
			gsap.set(words, { opacity: 0, scale: 0, y: 20 })

			// Create a timeline
			const tl = gsap.timeline()

			// Shuffle the array of words to randomize the order
			const shuffledWords = gsap.utils.shuffle([...words])

			// Animate each word
			shuffledWords.forEach((word) => {
				tl.to(
					word,
					{
						duration: 1.0,
						delay: Math.random() * 1.5, // Random delay for each word
						opacity: 1,
						scale: 1,
						y: 0,
						ease: 'back.out(1.7)',
					},
					0
				)
			})
		}
	}, [])
	return (
		<div className={styles.container}>
			<div className={styles.glass}>
				<p className={styles.text} ref={textRef}>
					This is the passion project of Alexandre Dreyer. Part book,
					part knowledge graph, part collaborative project, this is a
					work-in-progress, published in real-time as it is written.
					This is because we hope to solicit input and reflections
					from you, dear reader, to inform this work on the topic of
					uncertainty. When this book goes to print, select
					contributions will be included in the print-run with name
					credits. This book is written in small shards of a few
					hundred words each (in markdown format) that can be read in
					sequence like a book, or navigated freely like a knowledge
					graph. This format better reflects the fractal nature of
					this vast subject matter and gives the reader more freedom
					of movement.
				</p>
			</div>
			<div className={styles.bgImage}></div>
		</div>
	)
}
