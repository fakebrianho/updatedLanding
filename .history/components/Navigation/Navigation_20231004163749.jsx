'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
import styles from './navigation.module.css'
export const Navigation = (props) => {
	const CHILD_NODES = 5
	return (
		<>
			<CentralNode title={props.title} />
			<ChildNodes count={CHILD_NODES} />
		</>
	)
}
