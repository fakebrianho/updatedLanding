import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
function MobileNavigation(props) {
	return <MobileCenter title={props.title} topLevel={props.topLevel} />
}

export default MobileNavigation
