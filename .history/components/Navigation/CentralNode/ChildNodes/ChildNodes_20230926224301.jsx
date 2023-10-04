import { useState, useEffect } from 'react'
import styles from './ChildNodes.module.css'
export const ChildNodes = (props) => {
	const centralCircleDiameter = 300
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

			positions.push([x, y])
		}
		return positions
	}

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
						}}
					></div>
				)
			})}
		</div>
	)
}
