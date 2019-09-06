const fs = require('fs')

exports.readFile = filepath => {
	return new Promise((res, rej) => {
		fs.readFile(filepath, (err, data) => {
			if (err) rej(err)
			res(data)
		})
	})
}

exports.writeFile = (filepath, data) => {
	return new Promise((res, rej) => {
		fs.writeFile(filepath, data, { encoding: 'utf8' }, err => {
			if (err) rej(err)
			res(true)
		})
	})
}
