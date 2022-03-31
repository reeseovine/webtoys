import {
	mdiAmpersand,
	mdiArrowCollapse,
	mdiAutoFix,
	mdiBarcode,
	mdiCardAccountDetailsOutline,
	mdiCheckboxMultipleOutline,
	mdiCodeJson,
	mdiDatabaseSearchOutline,
	mdiDatabaseSyncOutline,
	mdiEyeCheckOutline,
	mdiFileCompare,
	mdiFingerprint,
	mdiFormatIndentIncrease,
	mdiFormatLetterCase,
	mdiFormatPaint,
	mdiImageMultipleOutline,
	// mdiImageSyncOutline,
	mdiKeyStar,
	mdiLanguageMarkdown,
	mdiLinkVariant,
	mdiPound,
	mdiRegex,
	mdiScriptTextOutline,
	mdiStickerTextOutline,
	mdiSync,
	mdiXml,
	mdiZipBoxOutline,
} from '@mdi/js'

export type CategoryType = {
	name: string
	id: string
	icon: string
}
export interface ToolType extends CategoryType {
	category: string
	description: string
	keywords: string
	helpText?: string // Markdown text
}

let categories: CategoryType[] = [
	{
		name: 'Converters',
		id: 'converters',
		icon: mdiSync,
	},
	{
		name: 'Encoders & Decoders',
		id: 'coders',
		icon: mdiBarcode,
	},
	{
		name: 'Formatters',
		id: 'formatters',
		icon: mdiFormatPaint,
	},
	{
		name: 'Generators',
		id: 'generators',
		icon: mdiAutoFix,
	},
	{
		name: 'Text',
		id: 'text',
		icon: mdiStickerTextOutline,
	},
	{
		name: 'Graphic',
		id: 'graphic',
		icon: mdiImageMultipleOutline,
	},
]
let tools: ToolType[] = [
	{
		name: 'JSON to YAML',
		id: 'json2yaml',
		category: 'converters',
		icon: mdiDatabaseSyncOutline,
		description: 'Convert JSON data to YAML and vice versa',
		keywords: 'javascript object notation yml',
	},
	{
		name: 'Number Base',
		id: 'base',
		category: 'converters',
		icon: mdiPound,
		description: 'Convert numbers from one base to another',
		keywords: 'binary octal decimal hexadecimal',
	},
	{
		name: 'HTML Entities',
		id: 'html',
		category: 'coders',
		icon: mdiAmpersand,
		description:
			'Encode or decode all the applicable characters to their corresponding HTML entities',
		keywords: '',
	},
	{
		name: 'URL',
		id: 'url',
		category: 'coders',
		icon: mdiLinkVariant,
		description:
			'Encode or decode all the applicable characters to their corresponding URL entities',
		keywords: '',
	},
	{
		name: 'Base64',
		id: 'base64',
		category: 'coders',
		icon: 'm17 17h2v-10h-2v4h-2v-4h-2v6h4m-10-6a2 2 0 0 0-2 2v6c0 1.11 0.9 2 2 2h2a2 2 0 0 0 2-2v-2c0-1.11-0.9-2-2-2h-2v-2h4v-2zm0 6h2v2h-2zm-5-13c-1.108 0-2 0.892-2 2v20c0 1.108 0.892 2 2 2h20c1.108 0 2-0.892 2-2v-20c0-1.108-0.892-2-2-2zm0 2h20v20h-20z',
		description: 'Encode and decode Base64 data',
		keywords: 'RFC 4648',
	},
	{
		name: 'GZip',
		id: 'gzip',
		category: 'coders',
		icon: mdiZipBoxOutline,
		description: 'Compress or decompress strings',
		keywords: 'zlib gunzip',
	},
	{
		name: 'JWT Decoder',
		id: 'jwt',
		category: 'coders',
		icon: mdiKeyStar,
		description: 'Decode a JWT header and payload',
		keywords: 'RFC 7519 json web token',
	},
	{
		name: 'Pretty print',
		id: 'pretty',
		category: 'formatters',
		icon: mdiFormatIndentIncrease,
		description: 'Format code for readability',
		keywords: 'prettify prettier indent',
	},
	{
		name: 'Minify',
		id: 'minify',
		category: 'formatters',
		icon: mdiCodeJson,
		description: 'Minify code to save space',
		keywords: '',
	},
	{
		name: 'Hash',
		id: 'hash',
		category: 'generators',
		icon: mdiFingerprint,
		description: 'Calculate MD5 and SHA hashes from text data',
		keywords: 'sha1 sha256 sha512',
	},
	{
		name: 'UUID',
		id: 'uuid',
		category: 'generators',
		icon: mdiCardAccountDetailsOutline,
		description: 'Generate UUIDs of version 1, 3, 4, and 5',
		keywords: 'GUID RFC 4122 namespace random',
	},
	{
		name: 'Lorem Ipsum',
		id: 'lipsum',
		category: 'generators',
		icon: mdiScriptTextOutline,
		description: 'Generate words, sentences or paragraphs of Lorem Ipsum',
		keywords: 'dolor sit amet',
	},
	{
		name: 'Checksum',
		id: 'checksum',
		category: 'generators',
		icon: mdiCheckboxMultipleOutline,
		description: 'Generate a hash with Checksum based on a file',
		keywords: 'md5 sha1 sha256 sha512',
	},
	{
		name: 'Inspector & Case Converter',
		id: 'case',
		category: 'text',
		icon: mdiFormatLetterCase,
		description: 'Analyze text and convert it to a different case',
		keywords: 'string capital upper lower camel snake kebab',
	},
	{
		name: 'Regex Tester',
		id: 'regex',
		category: 'text',
		icon: mdiRegex,
		description: 'Validate and test regular expressions',
		keywords: 'regexp grep sed awk',
		helpText:
			'Validate and test regular expressions against a body of text.\n\nThis implementation allows Javascript-flavored regexes in global matching mode. For a more featureful regex tester check out [regex101](https://regex101.com/).',
	},
	{
		name: 'Text Difference',
		id: 'diff',
		category: 'text',
		icon: mdiFileCompare,
		description: 'Compare two pieces of text',
		keywords: 'difference changes',
	},
	{
		name: 'Markdown Preview',
		id: 'markdown',
		category: 'text',
		icon: mdiLanguageMarkdown,
		description: 'Preview a Markdown document with GitHub style',
		keywords: 'md gfm',
	},
	{
		name: 'Color Blindness Simulator',
		id: 'colorblind',
		category: 'graphic',
		icon: mdiEyeCheckOutline,
		description: 'Simulate color blindness on a picture or screenshot',
		keywords: 'protanopia deuteranopia tritanopia monochromacy',
		helpText:
			"This tool is meant to give you an idea of what something would look like to people with different types of color blindness. It's never going to be 100% accurate because everyone's vision is different.\n\nTo be sure you are using suitable colors for a user interface you should follow the [Web Contrast Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/). There's a handy contrast checker available at [contrastchecker.online](https://contrastchecker.online/).",
	},
	{
		name: 'PNG / JPEG Compressor',
		id: 'compress',
		category: 'graphic',
		icon: mdiArrowCollapse,
		description: 'Lossless PNG and JPEG optimizer',
		keywords: 'JPG',
	},
	{
		name: 'Image Converter',
		id: 'convert',
		category: 'graphic',
		// "icon": mdiImageSyncOutline,
		icon: 'M13.18 19C13.35 19.72 13.64 20.39 14.03 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V11.18C20.5 11.07 20 11 19.5 11C19.33 11 19.17 11 19 11.03V5H5V19H13.18M11.21 15.83L9.25 13.47L6.5 17H13.03C13.14 15.54 13.73 14.22 14.64 13.19L13.96 12.29L11.21 15.83M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20Z',
		description: 'Convert images between common formats',
		keywords: 'BMP GIF JPG PNG TIFF ICO WEBP',
		helpText:
			"Convert images between common formats.\n\nThe formats you can convert images to are whichever ones are supported by your web browser. Try a different browser if you don't see the one you want.",
	},
]

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
	tools = tools.filter((tool) =>
		process.env.pages!.includes(`pages/${tool.category}/${tool.id}.tsx`)
	)
}

export { categories, tools }
