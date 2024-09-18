const OrbitalDiv = ({ style, index }) => {
	return (
		<div className='orbital-div' style={style}>
			{`Orbital Div ${index + 1}`}
		</div>
	)
}

function MobileChildNodes() {
	const angle = 30
	const orbitRadius = 150 // Radius of the orbit circle
	const numPlanets = 8
	const orbitalDivs = Array.from({ length: numDivs }).map((_, index) => {
		const angle = (index / numDivs) * 360
		const x = orbitRadius * Math.cos((angle * Math.PI) / 180)
		const y = orbitRadius * Math.sin((angle * Math.PI) / 180)

		const style = {
			transform: `translate(${x}px, ${y}px)`,
		}

		return <OrbitalDiv key={index} style={style} index={index} />
	})
	return <div>MobileChildNodes</div>
}

export default MobileChildNodes
