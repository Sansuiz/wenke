module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './public/**/*.js', './_layouts/*.html', './_include/*.html', 'index.html']
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			margin: {
				'-25': '-25px',
			},
			fontFamily: {
				'noto': ['Noto Serif SC', 'serif'],
				'Patrick': ['Patrick Hand SC', 'cursive'],
			},
			maxWidth: {
				'15': '15%',
				'1/4': '25%',
				'1/3': '33%',
				'1/2': '50%',
				'3/4': '75%',
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			inset: {
				'0': 0,
				'232': '232px',
			},
		},
		variants: {
			extend: {
				textColor: ['visited'],
			},
		},
		plugins: [
			require('@tailwindcss/typography'),
		],
	},
}