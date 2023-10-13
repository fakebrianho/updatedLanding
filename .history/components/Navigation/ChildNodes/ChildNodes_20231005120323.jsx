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

	function positionNodes(n) {
		const positions = []
		const textPositions = []
		const textRadius = radius - 20 // Adjust this value to your nee
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
			const textX =
				centralCircleDiameter / 2 + textRadius * Math.cos(angle)
			const textY =
				centralCircleDiameter / 2 + textRadius * Math.sin(angle)

			positions.push([x, y])
		}
		return { nodePositions: positions, textPositions: textPositions }
	}

	const [text_xy, setText_xy] = useState([])
	useEffect(() => {
		setText_xy(positionText(props.count))
	}, [props.count])
	return (
		<div className={styles.child_nodes}>
			{child_xy.map((position, i) => {
				return (
					<div
						className={styles.child}
						key={i}
						style={{
							left: `${position[0]}px`,
							top: `${position[1]}px`,
							position: 'absolute',
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
						}}
					>
						<p
							className={styles.title}
							style={
								{
									// left: `${position[0]}px`,
									// top: `${position[1]}px`,
									// position: 'absolute',
								}
							}
						>
							{props.nodes[i].name}
						</p>
					</div>
				)
			})}
		</div>
	)
}
