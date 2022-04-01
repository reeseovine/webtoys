import prettyBytes from 'pretty-bytes'
import Storage from './storage'

const precision = (a: number, b: number, func: any) => func(a * (b = Math.pow(10, b || 0))) / b
const floor = (a: number, b: number) => precision(a, b, Math.floor)
const ceil = (a: number, b: number) => precision(a, b, Math.ceil)
const round = (a: number, b: number) => precision(a, b, Math.round)

const bytes = (bytes: number) =>
	prettyBytes(bytes, { locale: Storage.get('language', 'en-US').split('-')[0] })

// source: https://stackoverflow.com/a/8952393/908128
const parseFloat = (x: string, radix: number) => {
	// Split the string at the decimal point
	const parts = x.split(/\./).map((s) => s.trim())

	// If there is nothing before the decimal point, make it 0
	if (parts[0] == '') {
		parts[0] = '0'
	}

	// If there was a decimal point & something after it
	if (parts.length > 1 && parts[1] != '') {
		const fractionLength = parts[1].length
		const mantissa = parseInt(parts[1], radix) * Math.pow(radix, -fractionLength)
		return parseInt(parts[0], radix) + mantissa
	}

	// If there wasn't a decimal point or there was but nothing was after it
	return parseInt(parts[0], radix)
}

export { floor, ceil, round, bytes, parseFloat }
