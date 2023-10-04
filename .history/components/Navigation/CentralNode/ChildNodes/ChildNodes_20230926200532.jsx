export const ChildNodes = (props) => {
	const centralCircleDiameter = 200
	const childNodeDiameter = 30
	const radius = (centralCircleDiameter + childNodeDiameter) / 2
	const positions = []

	function positionNodes(n) {
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

			const node = document.createElement('div')
			node.className = 'child-node'
			node.style.left = `${x}px`
			node.style.top = `${y}px`
			node.style.backgroundColor = 'randomColorForVisualization' // Replace with any color or logic
			container.appendChild(node)
		}
	}

	return props.count
}
