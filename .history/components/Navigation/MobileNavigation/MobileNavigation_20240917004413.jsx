import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
import styles from './MobileNavigation.module.css'

function MobileNavigation(props) {
	return <MobileCenter title={props.title} topLevel={props.topLevel} />
}

export default MobileNavigation
