import { useState, useEffect } from 'react'
import styles from './ChildNodes.module.css'
export const ChildNodes = (props) => {
	console.log(props.nodes)

	const centralCircleDiameter = 300
	const childNodeDiameter = 15
	const radiusPadding = 100 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	const textRadius = radius // Adjust the additional distance to your needs

	// const radius = (centralCircleDiameter + childNodeDiameter) / 2
	const [child_xy, setChild_xy] = useState([])
	useEffect(() => {
		setChild_xy(positionNodes(props.count))
	}, [props.count])
	// function positionText(n) {
	// 	const positions = []
	// 	const textPositions = []
	// 	for (let i = 0; i < n; i++) {
	// 		const angle = (i / n) * 2 * Math.PI - Math.PI / 2
	// 		const x =
	// 			centralCircleDiameter / 8 +
	// 			Math.cos(angle) -
	// 			childNodeDiameter / 2
	// 		const y =
	// 			centralCircleDiameter / 8 +
	// 			Math.sin(angle) -
	// 			childNodeDiameter / 2
	// 		const textX =
	// 			centralCircleDiameter / 2 + textRadius * Math.cos(angle)
	// 		const textY =
	// 			centralCircleDiameter / 2 + textRadius * Math.sin(angle)
	// 		textPositions.push([textX, textY])

	// 		positions.push([x, y])
	// 	}
	// 	return { nodePositions: positions, textPositions: textPositions  }
	// }

	console.log(child_xy.textPositions)
	function positionNodes(n) {
		const positions = []
		const textPositions = []
		const angles = []
		for (let i = 0; i < n; i++) {
			const angle = (i / n) * 2 * Math.PI - Math.PI / 2
			const x =
				centralCircleDiameter / 2 +
				radius * Math.cos(angle) -
				childNodeDiameter / 2
			const y =
				centralCircleDiameter / 2 +
				radius * Math.sin(angle) -
				childNodeDiameter / 2

			const textX = (centralCircleDiameter / 4) * Math.cos(angle)
			const textY = (centralCircleDiameter / 4) * Math.sin(angle)
			// const

			angles.push(angle)
			positions.push([x, y])
			textPositions.push([textX, textY])
		}
		return {
			nodePositions: positions,
			textPositions: textPositions,
			angles: angles,
		}
	}

	return (
		<div className={styles.child_nodes}>
			{child_xy.nodePositions &&
				child_xy.textPositions &&
				child_xy.nodePositions.map((pos, i) => {
					console.log(po)
					return (
						<div
							className={styles.child}
							key={i}
							style={{
								// border: 'solid 2px red',
								left: `${pos[0]}px`,
								top: `${pos[1]}px`,
								position: 'absolute',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<p
								className={styles.title}
								style={{
									width: 'max-content',
									border: 'solid 2px red',
									textAlign: 'center',
									// left: `${pos[0]}px`,
									// top: `${pos[1]}px`,
									// left: `${child_xy.textPositions[i][0]}px`,
									// top: `${child_xy.textPositions[i][1]}px`,
									position: 'absolute',
								}}
							>
								{props.nodes[i].name}
							</p>
						</div>
					)
				})}
		</div>
	)
}
