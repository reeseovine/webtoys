const floor = (a, b) => Math.floor(a * (b = Math.pow(10, b||0))) / b
const ceil  = (a, b) => Math.ceil (a * (b = Math.pow(10, b||0))) / b
const round = (a, b) => Math.round(a * (b = Math.pow(10, b||0))) / b

const bytes = (bytes) => {
	bytes = parseInt(bytes)
	if (bytes < 1000) return bytes+' B'
	if (bytes < Math.pow(1000,2)) return round(bytes/1000, 2)+' KB'
	if (bytes < Math.pow(1000,3)) return round(bytes/Math.pow(1000,2), 2)+' MB'
	if (bytes < Math.pow(1000,4)) return round(bytes/Math.pow(1000,3), 2)+' GB'
	if (bytes < Math.pow(1000,5)) return round(bytes/Math.pow(1000,4), 2)+' TB'
	return "that's HUGE!!!"
}

export {
	floor, ceil, round,
	bytes
}
