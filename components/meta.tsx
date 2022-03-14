import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>WebToys</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='WebToys' />
		<meta name='application-name' content='WebToys' />
		<meta name='description' content='A Swiss Army knife for developers.' />
		<meta
			name='theme-color'
			content='#f4f4f5'
			media='(prefers-color-scheme: light)'
		/>
		<meta
			name='theme-color'
			content='#18181b'
			media='(prefers-color-scheme: dark)'
		/>
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>

		<link rel="apple-touch-icon" sizes="60x60" href="/images/apple-touch-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/images/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
		<link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
		<link rel="shortcut icon" href="/images/favicon.ico" />
		<meta name="msapplication-TileColor" content="#0f172a" />
		<meta name="msapplication-config" content="/images/browserconfig.xml" />
		<meta name="theme-color" content="#64748b" />
		<link rel="manifest" href="/images/site.webmanifest" />
	</Head>
)

export default Meta
