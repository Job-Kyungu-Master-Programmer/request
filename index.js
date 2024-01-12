const express = require('express')
const config = require('./Utils/config')
const app = express()
const logger = require('./Utils/logger')

let todos = [
    {title: 'mERCI', impotant: true, id:1}
]

app.get('/' , (request, response ) => {
    response.send('<h1>NODE JS </h1>')
})

const PORT = process.env.PORT || config.PORT
app.listen(PORT, () => {
     logger.info( ` Server running on PORT ${PORT}`)
})