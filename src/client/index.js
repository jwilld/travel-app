import express from 'express'
import bodyParser from 'body-parser'

const app = express()


const port = 8080
const listening = () => {
    console.log(`Travel app listening on port ${port}`)
}
app.listen(port,listening)

