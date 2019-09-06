const express = require('express')
const cors = require('cors')
const path = require('path')

const { getTime } = require('./util')
const { readFile } = require('./fs')

const app = express()

const PORT = 8080

app.use(cors())

app.post('/', async (req, res, next) => {
	try {
		res.status(200).json(JSON.parse(await readFile('./data.json')))
	} catch (error) {
		next(error)
	}
})

app.use('/', (req, res, next) => res.status(200).sendFile(path.join(__dirname, 'public', 'index.html')))

app.use((err, req, res, next) => {
	console.log(`[${getTime()}][errorMiddleware]: ${err}`)
	res.status(err.statusCode || 500).json({ err: err })
})

app.listen(PORT, cb => console.log(`Server started!\nhttp://localhost:${PORT}`))
