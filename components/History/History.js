import React, { useRef } from 'react'
import Link from 'next/link'
// import styles from 'tracmodule.css'
import styles from './history.module.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'

export default function History(data) {
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [historyData, setHistoryData] = useState(null)
	const containerRef = useRef(null)
	const highlightRef = useRef(null)
	const initialized = useRef(false);

	const scrollToHighlight = () => {
		if (containerRef.current && highlightRef.current) {
			const position =
				highlightRef.current.offsetTop - containerRef.current.offsetTop

			containerRef.current.scrollTop = position - 1
			console.log('highlightRef is', highlightRef.current)
		}
	}

	const clearHistory = () => {
		localStorage.removeItem('historyData')
		setHistoryData(null);
	}

	useEffect(() => {
		let history = [];
		if(!initialized.current){
		initialized.current = true;
		localStorage.getItem('historyData') ? history = JSON.parse(localStorage.getItem('historyData')) : history = [];
		
		history.push(data.data);
		console.log("current history is", history);
		localStorage.setItem('historyData', JSON.stringify(history));
		setHistoryData(history);}
		setIsLoading(false)
	}, [])

  return (
    <>
		<div className={styles.toggle}>
		<main ref={containerRef} className={styles.traces}>
			<h3>Footsteps</h3>
			{!isLoading && historyData &&
                  historyData.map(
                    (item, id) =>
                      (
						<Link key={id} href={`/chapters/${item.file_name}`}>
						<div
							key={id}
							className={`${styles.individuallink}`}
						>
							{item.title}
						</div>
					</Link>
                      )
                  )}
		</main>
		<button className={styles.clear} onClick={clearHistory}>Clear</button>
		</div>
    

			<style jsx local>
				{`
					h3 {
						color: #3176c7;
						text-transform: capitalize;
						font-size: 1.2rem;
					}

					ul li {
						list-style-type: none;
						text-decoration: none;
						display: block;
						margin-right: 1rem;
						font-size: 1rem;
					}

					a {
						text-decoration: none;
						color: grey;
					}

					ul {
						padding: 0;
						margin: 0;
					}
				`}
			</style>
		</>
	)
}