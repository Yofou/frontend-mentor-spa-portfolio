/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
	colors: {
		black: '#151515',
		green: '#4EE1A0',
		grey: '#D9D9D9',
		'dark-grey': '#242424',
		white: '#FFFFFF',
	},
	fontFamily: {
		grotek: ['Space Grotesk', 'sans-serif']
	}
  },
  plugins: [],
}
