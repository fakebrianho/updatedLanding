import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
const OrbitalDiv = ({ style, index }) => {
	return (
		<div className='orbital-div' style={style}>
			{`Orbital Div ${index + 1}`}
		</div>
	)
}
function MobileNavigation(props) {
	const numDivs = 8 // Number of orbiting divs
	const orbitRadius = 150 // Radius of the orbit circle
	const angleOffset = 30 // Tilt angle for the orbit
	return <MobileCenter title={props.title} topLevel={props.topLevel} />
}

export default MobileNavigation
