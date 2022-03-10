import {
	mdiSync,
	mdiBarcode,
	mdiFormatIndentIncrease,
	mdiAutoFix,
	mdiStickerTextOutline,
	mdiImageMultipleOutline,
	mdiDatabaseRefreshOutline,
	mdiPoundBoxOutline,
	mdiAmpersand,
	mdiLinkVariant,
	mdiZipBoxOutline,
	mdiKeyStar,
	mdiCodeJson,
	mdiDatabaseSearchOutline,
	mdiXml,
	mdiFingerprint,
	mdiCardAccountDetailsOutline,
	mdiScriptTextOutline,
	mdiCheckboxMultipleOutline,
	mdiFormatLetterCase,
	mdiRegex,
	mdiSelectCompare,
	mdiLanguageMarkdownOutline,
	mdiEyeCheckOutline,
	mdiArrowCollapse,
	// mdiImageSyncOutline,
} from '@mdi/js';

export default {
	"categories": [
		{
			"name": "Converters",
			"id": "converters",
			"icon": mdiSync
		}, {
			"name": "Encoders/Decoders",
			"id": "coders",
			"icon": mdiBarcode
		}, {
			"name": "Formatters",
			"id": "formatters",
			"icon": mdiFormatIndentIncrease
		}, {
			"name": "Generators",
			"id": "generators",
			"icon": mdiAutoFix
		}, {
			"name": "Text",
			"id": "text",
			"icon": mdiStickerTextOutline
		}, {
			"name": "Graphic",
			"id": "graphic",
			"icon": mdiImageMultipleOutline
		}
	],
	"tools": [
		{
			"name": "Json <-> Yaml",
			"id": "json2yaml",
			"category": "converters",
			"icon": mdiDatabaseRefreshOutline,
			"description": "Convert JSON data to YAML and vice versa",
			"keywords": ""
		}, {
			"name": "Number Base",
			"id": "base",
			"category": "converters",
			"icon": mdiPoundBoxOutline,
			"description": "Convert numbers from one base to another",
			"keywords": "binary octal decimal hexadecimal"
		}, {
			"name": "HTML Entities",
			"id": "html",
			"category": "coders",
			"icon": mdiAmpersand,
			"description": "Encode or decode all the applicable characters to their corresponding HTML entities",
			"keywords": ""
		}, {
			"name": "URL",
			"id": "url",
			"category": "coders",
			"icon": mdiLinkVariant,
			"description": "Encode or decode all the applicable characters to their corresponding URL entities",
			"keywords": ""
		}, {
			"name": "Base64",
			"id": "base64",
			"category": "coders",
			"icon": "m17 17h2v-10h-2v4h-2v-4h-2v6h4m-10-6a2 2 0 0 0-2 2v6c0 1.11 0.9 2 2 2h2a2 2 0 0 0 2-2v-2c0-1.11-0.9-2-2-2h-2v-2h4v-2zm0 6h2v2h-2zm-5-13c-1.108 0-2 0.892-2 2v20c0 1.108 0.892 2 2 2h20c1.108 0 2-0.892 2-2v-20c0-1.108-0.892-2-2-2zm0 2h20v20h-20z",
			"description": "Encode and decode Base64 data",
			"keywords": "RFC 4648"
		}, {
			"name": "GZip",
			"id": "gzip",
			"category": "coders",
			"icon": mdiZipBoxOutline,
			"description": "Compress or decompress strings",
			"keywords": ""
		}, {
			"name": "JWT Decoder",
			"id": "jwt",
			"category": "coders",
			"icon": mdiKeyStar,
			"description": "Decode a JWT header, payload and signature",
			"keywords": "RFC 7519"
		}, {
			"name": "JSON",
			"id": "json",
			"category": "formatters",
			"icon": mdiCodeJson,
			"description": "Indent or minify JSON data",
			"keywords": ""
		}, {
			"name": "SQL",
			"id": "sql",
			"category": "formatters",
			"icon": mdiDatabaseSearchOutline,
			"description": "Indent SQL queries",
			"keywords": "Db2 MariaDB MySQL N1QL PL/SQL PostgreSQL Amazon Redshift Spark SQL Standard SQL Transact-SQL"
		}, {
			"name": "XML",
			"id": "xml",
			"category": "formatters",
			"icon": mdiXml,
			"description": "Indent or minify XML data",
			"keywords": ""
		}, {
			"name": "Hash",
			"id": "hash",
			"category": "generators",
			"icon": mdiFingerprint,
			"description": "Calculate MD5, SHA1, SHA256 and SHA512 hash from text data",
			"keywords": ""
		}, {
			"name": "UUID",
			"id": "uuid",
			"category": "generators",
			"icon": mdiCardAccountDetailsOutline,
			"description": "Generate UUIDs version 1 and 4",
			"keywords": "GUID RFC 4122"
		}, {
			"name": "Lorem Ipsum",
			"id": "lipsum",
			"category": "generators",
			"icon": mdiScriptTextOutline,
			"description": "Generate words, sentences or paragraphs of Lorem Ipsum",
			"keywords": "dolor sit amet"
		}, {
			"name": "Checksum",
			"id": "checksum",
			"category": "generators",
			"icon": mdiCheckboxMultipleOutline,
			"description": "Generate a hash with Checksum based on a file",
			"keywords": ""
		}, {
			"name": "Inspector & Case Converter",
			"id": "",
			"category": "text",
			"icon": mdiFormatLetterCase,
			"description": "Analyze text and convert it to a different case",
			"keywords": "string"
		}, {
			"name": "Regex Tester",
			"id": "regex",
			"category": "text",
			"icon": mdiRegex,
			"description": "Validate and test regular expressions",
			"keywords": "regexp sed awk"
		}, {
			"name": "Text Comparer",
			"id": "compare",
			"category": "text",
			"icon": mdiSelectCompare,
			"description": "Compare two pieces of text",
			"keywords": "difference changes"
		}, {
			"name": "Markdown Preview",
			"id": "markdown",
			"category": "text",
			"icon": mdiLanguageMarkdownOutline,
			"description": "Preview a Markdown document with a GitHub-like render",
			"keywords": "md gfm"
		}, {
			"name": "Color Blindness Simulator",
			"id": "colorblind",
			"category": "graphic",
			"icon": mdiEyeCheckOutline,
			"description": "Simulate color blindness on a picture or screenshot",
			"keywords": "protanopia deuteranopia tritanopia"
		}, {
			"name": "PNG / JPEG Compressor",
			"id": "compress",
			"category": "graphic",
			"icon": mdiArrowCollapse,
			"description": "Lossless PNG and JPEG optimizer",
			"keywords": "JPG"
		}, {
			"name": "Image Converter",
			"id": "convert",
			"category": "graphic",
			// "icon": mdiImageSyncOutline,
			"icon": "M13.18 19C13.35 19.72 13.64 20.39 14.03 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V11.18C20.5 11.07 20 11 19.5 11C19.33 11 19.17 11 19 11.03V5H5V19H13.18M11.21 15.83L9.25 13.47L6.5 17H13.03C13.14 15.54 13.73 14.22 14.64 13.19L13.96 12.29L11.21 15.83M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20Z",
			"description": "Lossless image converter",
			"keywords": "BMP GIF HEIF JPG XR PNG TIFF"
		}
	]
}
