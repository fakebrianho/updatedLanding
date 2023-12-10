import styles from './AboutPage.module.css'
import { SplitText } from 'gsap/SplitText'
export default function About() {
	return (
		<div className={styles.container}>
			<div className={styles.glass}>
				<p className={styles.text}>
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
