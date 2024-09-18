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
	const orbitalDivs = Array.from({ length: numDivs }).map((_, index) => {
		const angle = (index / numDivs) * 360
		const x = orbitRadius * Math.cos((angle * Math.PI) / 180)
		const y = orbitRadius * Math.sin((angle * Math.PI) / 180)

		const style = {
			transform: `translate(${x}px, ${y}px)`,
		}

		return <OrbitalDiv key={index} style={style} index={index} />
	})
	return (
        <div className="scene">
        <div className="orbit" style={{ transform: `rotateX(${angleOffset}deg)` }}>
          <CentralDiv />
          {orbitalDivs}
        </div>
      </div>
    )
    
    <MobileCenter title={props.title} topLevel={props.topLevel} />
}

export default MobileNavigation
