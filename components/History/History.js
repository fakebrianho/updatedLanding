import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './history.module.css'
import { useEffect, useState } from 'react'
import useTheme from '../../hooks/useThemes'

export default function History(data) {
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [historyData, setHistoryData] = useState(null)
	const containerRef = useRef(null)
	const highlightRef = useRef(null)
	const initialized = useRef(false);
	const [theme, toggleTheme] = useTheme()

	const scrollToHighlight = () => {
		if (containerRef.current && highlightRef.current) {
			const position =
				highlightRef.current.offsetTop - containerRef.current.offsetTop

			containerRef.current.scrollTop = position - 1
			console.log('highlightRef is', highlightRef.current)
		}
	}

	const clearHistory = () => {
		sessionStorage.removeItem('historyData')
		setHistoryData(null);
	}

	useEffect(() => {
		let history = [];
		if(!initialized.current){
		initialized.current = true;
		sessionStorage.getItem('historyData') ? history = JSON.parse(sessionStorage.getItem('historyData')) : history = [];
		
		if (history.length < 1){
			history.push(data.data);
		} else {
			if (data.data.file_name != history[history.length - 1].file_name){
				history.push(data.data);
			}
		}

		console.log("current history is", history);
		sessionStorage.setItem('historyData', JSON.stringify(history));
		setHistoryData(history);}
		setIsLoading(false)
	}, [data.data])

  return (
    <>
		<div className={styles.toggle}>
		<main ref={containerRef} className={styles.traces}>
			<h3>History</h3>
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