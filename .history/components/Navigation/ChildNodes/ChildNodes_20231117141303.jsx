import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './ChildNodes.module.css'
import usePage from '../../../context/pageContext'
export const ChildNodes = (props) => {
	const { setHoverStatus } = usePage()
	const centralCircleDiameter = 300
	const childNodeDiameter = 15
	const parentNodeDiamater = 45
	const radiusPadding = 100 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	const parentRadius =
		centralCircleDiameter / 2 + parentNodeDiamater + radiusPadding
	// const radius = (centralCircleDiameter + childNodeDiameter) / 2
	const [child_xy, setChild_xy] = useState([])
	const router = useRouter()

	useEffect(() => {
		setChild_xy(positionNodes(props.count))
		console.log(document.querySelectorAll('p'))
		// attachCursorEvents()
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
			console.log(el)
			// el.addEventListener('mouseover', () => setHoverStatus(true))
			// el.addEventListener('mouseout', () => setHoverStatus(false))
			el.addEventListener('mouseover', () => alert('helo'))
			el.addEventListener('mouseout', () => setHoverStatus(false))
		})
		console.log(elements)
	}

	const ChildNode = ({ style, children }) => {
		return (
			<motion.div
				className='box'
				// whileHover={{ scale: 1.05 }}
				onClick={() =>
					router.push(`/navigation/${children.props.children}`)
				}
			>
				<div className={styles.child} style={style}>
					{children}
				</div>
			</motion.div>
		)
	}

	const ChildParentNode = ({ style, children }) => {
		return (
			<motion.div
				className='box'
				// whileHover={{ scale: 1.05 }}
				onClick={() =>
					router.push(`/navigation/${children.props.dataattribute}`)
				}
			>
				<div className={styles.parent} style={style}>
					<ChildNode>{children}</ChildNode>
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
										onHover={() => alert('hi')}
									>
										<p
											className={styles.title}
											style={{
												margin: '30px',
												width: 'max-content',
												textAlign: 'center',
												position: 'absolute',
												zIndex: '9',
											}}
											dataattribute={props.nodes[i].name}
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
										onHover={() => alert('hi')}
									>
										<p
											data-cursor='pointer'
											className={styles.title}
											style={{
												margin: '30px',
												width: 'max-content',
												textAlign: 'center',
												position: 'absolute',
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
