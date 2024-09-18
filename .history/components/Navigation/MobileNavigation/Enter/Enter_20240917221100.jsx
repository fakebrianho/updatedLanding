import { EnterButton } from '../../EnterButton/EnterButton'
import ShinyButton from '@/comps/magicui/shiny-button'
import PulsatingButton from '@/comps/magicui/pulsating-button'

import styles from './Enter.module.css'
function Enter() {
	return (
		<div
			className={styles.enter_button}
			onClick={() => {
				if (props.topLevel) {
					router.push(`/chapters/${props.chapter}`)
				} else {
					router.push(`/chapters/${props.chapter}`)
				}
			}}
		>
			Read
		</div>
	)
}

export default Enter
