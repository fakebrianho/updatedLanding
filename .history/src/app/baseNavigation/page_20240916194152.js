// 'use client'
import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
// import useTheme from '../../../hooks/useThemes'
// import { useEffect } from 'react'
export default async function Page({ params }) {
	// const [theme, setTheme] = useTheme()
	// useEffect(() => {
	// 	if (theme === 'light') {
	// 		document.body.style.backgroundColor = 'white'
	// 	} else {
	// 		document.body.style.backgroundColor = 'black'
	// 	}
	// }, [theme])
	let routes = await getTopLevelRoutes()
	return (
		<Navigation
			child_nodes={routes}
			title={'Uncertain Universe'}
			topLevel={true}
		/>
	)
}

// export async function getTopLevel() {
// 	const routes = await getTopLevelRoutes()
// 	return routes
// }
