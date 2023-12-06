import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import styles from './ChildNodes.module.css'
export const ChildNodes = (props) => {
	const centralCircleDiameter = 300
	const childNodeDiameter = 15
	const parentNodeDiamater = 45
	const radiusPadding = 100 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	const parentRadius =
		centralCircleDiameter / 2 + parentNodeDiamater + radiusPadding
	const [child_xy, setChild_xy] = useState([])

	useEffect(() => {
		setChild_xy(positionNodes(props.count))
	}, [props.count])
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					// Check if the added nodes include your elements
					const elements = document.querySelectorAll(
						"[data-cursor='pointer']"
					)
					if (elements.length) {
						attachCursorEvents()
					}
				}
			})
		})

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		})

		return () => {
			observer.disconnect()
		}
	}, [])
	const attachCursorEvents = () => {
		const elements = document.querySelectorAll("[data-cursor='pointer']")

		elements.forEach((el) => {
			el.addEventListener('mouseover', () => {
				if (el.getAttribute('data-click') === 'true') {
					alert(props.topLevel)
					props.clickTrigger(true)
				}

				props.hoverTrigger(true)
			})
			el.addEventListener('mouseout', () => {
				props.clickTrigger(false)
				props.hoverTrigger(false)
			})
		})
	}

	const ChildNode = ({ style, children, dataclick }) => {
		return (
			<motion.div
				className='box'
				onClick={() => {
					if (dataclick == true || dataclick == undefined) {
						router.push(`/navigation/${children.props.children}`)
					}
				}}
				data-click={dataclick}
			>
				<div className='node_container' data-click={dataclick}>
					<div
						className={styles.child}
						style={style}
						data-cursor='pointer'
						data-click={dataclick}
					>
						{children}
					</div>
				</div>
			</motion.div>
		)
	}

	const ChildParentNode = ({ style, children, dataclick }) => {
		return (
			<motion.div
				className='box'
				onClick={() => {
					if (dataclick == true || dataclick == undefined) {
						router.push(
							`/navigation/${children.props.dataattribute}`
						)
					}
				}}
				data-click={dataclick}
			>
				<div className='node_container' data-click={dataclick}>
					<div
						className={styles.parent}
						style={style}
						data-cursor='pointer'
						data-click={dataclick}
					>
						<ChildNode>{children}</ChildNode>
					</div>
				</div>
			</motion.div>
		)
	}

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

			const pX =
				centralCircleDiameter / 2 +
				parentRadius * Math.cos(angle) -
				parentNodeDiamater / 2
			const pY =
				centralCircleDiameter / 2 +
				parentRadius * Math.sin(angle) -
				parentNodeDiamater / 2

			const textX = (centralCircleDiameter / 4) * Math.cos(angle)
			const textY = (centralCircleDiameter / 4) * Math.sin(angle)
			// const

			angles.push(angle)
			positions.push([x, y, pX, pY])
			textPositions.push([textX, textY])
		}
		return {
			nodePositions: positions,
			textPositions: textPositions,
			angles: angles,
		}
	}

	return (
		<>
			<div className={styles.child_nodes}>
				{child_xy.nodePositions &&
					child_xy.textPositions &&
					child_xy.nodePositions.map((pos, i) => {
						const hasChildren = props.topLevel
							? props.hasChildren
							: props.nodes[i].num_grandchild_nodes > 0
							? true
							: false
						const isRightSide =
							child_xy.angles[i] > -Math.PI / 2 &&
							child_xy.angles[i] < Math.PI / 2
						const isParent =
							props.nodes[i].num_grandchild_nodes == 0
						const style = {
							left: `${isParent ? pos[2] : pos[0]}px`,
							top: `${isParent ? pos[3] : pos[1]}px`,
							position: 'absolute',
							display: 'flex',
							justifyContent:
								child_xy.angles[i] === -1.5707963267948966 ||
								child_xy.angles[i] === 1.5707963267948966
									? 'center'
									: isRightSide
									? 'flex-start'
									: 'flex-end',
							// 'center',
							alignItems:
								child_xy.angles[i] === Math.PI / 2
									? 'flex-start'
									: child_xy.angles[i] === -Math.PI / 2
									? 'flex-end'
									: 'center',
						}

						return (
							<React.Fragment key={i}>
								{props.nodes[i].num_grandchild_nodes > 0 ? (
									<ChildParentNode
										style={style}
										key={i}
										data-cursor='pointer'
										dataclick={hasChildren}
									>
										<p
											className={styles.title}
											style={{
												padding: '30px',
												width: 'max-content',
												textAlign: 'center',
												position: 'absolute',
												zIndex: '9',
											}}
											dataattribute={props.nodes[i].name}
											data-click={hasChildren}
											data-cursor='pointer'
										>
											{props.nodes[i].name}
										</p>
									</ChildParentNode>
								) : (
									<ChildNode
										style={style}
										key={i}
										data-cursor='pointer'
										dataclick={hasChildren}
									>
										<p
											data-cursor='pointer'
											data-click={hasChildren}
											className={styles.title}
											style={{
												padding: '30px',
												width: 'max-content',
												textAlign: 'center',
												position: 'absolute',
												zIndex: '9',
											}}
										>
											{props.nodes[i].name}
										</p>
									</ChildNode>
								)}
							</React.Fragment>
						)
					})}
			</div>
		</>
	)
}
