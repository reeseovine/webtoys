const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const glob = require("glob")

module.exports = withPWA({
	experimental: {
		esmExternals: true
	},
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	env: {
		pages: glob.sync('pages/**/*.tsx', { cwd: __dirname })
	},
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				'dracula': 'prism-react-renderer/themes/dracula',
				'duotoneDark': 'prism-react-renderer/themes/duotoneDark',
				'duotoneLight': 'prism-react-renderer/themes/duotoneLight',
				'github': 'prism-react-renderer/themes/github',
				'nightOwl': 'prism-react-renderer/themes/nightOwl',
				'nightOwlLight': 'prism-react-renderer/themes/nightOwlLight',
				'oceanicNext': 'prism-react-renderer/themes/oceanicNext',
				'okaidia': 'prism-react-renderer/themes/okaidia',
				'palenight': 'prism-react-renderer/themes/palenight',
				'shadesOfPurple': 'prism-react-renderer/themes/shadesOfPurple',
				'synthwave84': 'prism-react-renderer/themes/synthwave84',
				'ultramin': 'prism-react-renderer/themes/ultramin',
				'vsDark': 'prism-react-renderer/themes/vsDark',
				'vsLight': 'prism-react-renderer/themes/vsLight',
			}),
		)

		return config
	},
})
