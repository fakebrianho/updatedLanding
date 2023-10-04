import { useState, useEffect } from 'react'
export const ChildNodes = (props) => {
	const centralCircleDiameter = 200
	const childNodeDiameter = 30
	const radius = (centralCircleDiameter + childNodeDiameter) / 2
	const [child_xy, setChild_xy] = useState([])
	useEffect(() => {
		setChild_xy(positionNodes(props.count))
	}, [props.count])

	function positionNodes(n) {
		const positions = []
		for (let i = 0; i < n; i++) {
			const angle = (i / n) * 2 * Math.PI
			const x =
				centralCircleDiameter / 2 +
				radius * Math.cos(angle) -
				childNodeDiameter / 2
			const y =
				centralCircleDiameter / 2 +
				radius * Math.sin(angle) -
				childNodeDiameter / 2

			// const node = document.createElement('div')
			// node.className = 'child-node'
			positions.push([x, y])
			// node.style.left = `${x}px`
			// node.style.top = `${y}px`
			// node.style.backgroundColor = 'randomColorForVisualization' // Replace with any color or logic
			// container.appendChild(node)
		}
		return positions
	}

	return (
		<div>
			{child_xy.map((position, i) => {
				return (
					<h1
						key={i}
						style={{
							left: `${position[0]}px`,
							top: `${position[1]}px`,
							position: 'absolute',
						}}
					>
						hi
					</h1>
				)
			})}
		</div>
	)
}
