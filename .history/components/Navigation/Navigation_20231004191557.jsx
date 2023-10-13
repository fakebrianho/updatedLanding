'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
// import EnterButton from './EnterButton/EnterButton'
import styles from './navigation.module.css'

export const Navigation = (props) => {
	console.log(props.child_nodes)
	const CHILD_NODES = props.child_nodes.length
	return (
		<>
			<CentralNode title={props.title} />
			<ChildNodes count={CHILD_NODES} />
		</>
	)
}
