// themeUtils.js

export const getThemeFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('theme') || 'dark'
	}
	return 'light'
}

export const setThemeInLocalStorage = (theme) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', theme)
	}
}
