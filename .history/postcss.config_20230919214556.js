module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	// ... other Tailwind config
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}
