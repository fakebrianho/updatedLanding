import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './navhistory.module.css'
import { useEffect, useState } from 'react'
import useTheme from '../../hooks/useThemes'

export default function NavHistory(data) {
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

	const cleanData = (data) => {
		const result = data.split('-').map((word) => {
			return word.substring(0, 1).toUpperCase() + word.substring(1)
		})
		return result.join(' ');
	}

	const clearHistory = () => {
		sessionStorage.removeItem('historyNavData')
		setHistoryData(null);
	}

	useEffect(() => {
		let history = [];
		if(!initialized.current){
		initialized.current = true;
		sessionStorage.getItem('historyNavData') ? history = JSON.parse(sessionStorage.getItem('historyNavData')) : history = [];
		
		if (history.length < 1){
			history.push(data.title);
		} else {
			if (data.title != history[history.length - 1]){
				history.push(data.title);
			}
		}

		// console.log("current history is", history);
		sessionStorage.setItem('historyNavData', JSON.stringify(history));
		setHistoryData(history);
		console.log("historyData is", historyData);}
		setIsLoading(false)
	}, [data.title])

  return (
    <>
		<div className={`${styles.toggle}  ${data.theme}`}>
		<main ref={containerRef} className={styles.traces}>
			<h3>History</h3>
			{!isLoading && historyData &&
                  historyData.map(
                    (item, id) =>
                      (
						<Link key={id} href={`/chapters/${item}`}>
						<div
							key={id}
							className={`${styles.individuallink}`}
						>
							{cleanData(item)}
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