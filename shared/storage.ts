import { useState, useEffect } from "react";

const get = (key: string, fallback: any): any => {
	try {
		const value = localStorage.getItem(key)
		if (value === null){
			return fallback
		} else {
			return JSON.parse(value)
		}
	} catch(e) {
		return fallback
	}
}
const set = (key: string, value: any) => {
	if (typeof window !== 'undefined'){
		localStorage.setItem(key, JSON.stringify(value))
	}
}
export const useLocalStorage = (key: string, fallback: any) => {
	const [value, setValue] = useState(() => get(key, fallback))

	useEffect(() => {
		set(key, value)
	}, [key, value])

	return [value, setValue]
}

const Storage = {
	get, set
}
export default Storage
