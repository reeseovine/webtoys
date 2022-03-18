const get = (name: string, fallback: any): any => {
	try {
		const value = localStorage.getItem(name)
		if (value === null) return fallback
		else return JSON.parse(value)
	} catch(e) {
		return fallback
	}
}
const set = (name: string, value: any) => {
	if (typeof window !== 'undefined'){
		localStorage.setItem(name, JSON.stringify(value))
	}
}
// const useState = (name: string, fallback: any): any => {
// 	let value = get(name, null)
// 	if (value === null || value !== fallback){
// 		value = fallback
// 		set(name, fallback)
// 	}
// 	return value
// }

const Storage = {
	get, set //, useState
}
export default Storage
