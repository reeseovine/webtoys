const Storage = {
	get: (name, fallback) => {
		try {
			const value = localStorage.getItem(name)
			if (value === null) return fallback
			else return value
		} catch(e) {
			return fallback
		}
	},
	set: (name, value) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(name, value)
		}
	}
}

export default Storage
