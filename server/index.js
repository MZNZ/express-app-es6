const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000

const SERVER_DIR = __dirname
const CLIENT_DIR = `${SERVER_DIR}/../client`

app.use(cors());
app.get('/api/movies', (request, response) => {
    const options = {
        root: SERVER_DIR,
        etag: false,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    response.sendFile(`/data/movies.json`, options)
    // res.status(200).sendFile('./data/movies.json', options);
})

app.get('/', (request, response) => {
    const options = {
        root: CLIENT_DIR,
        headers: {
            'Cache-Control': 'max-age=1800',
            'Access-Control-Allow-Origin': '*'
        }
    }
    // response.sendFile('index.html', options)
    response.send('Hello !@');
})

app.get('/:filename(app.js|style.css)', (request, response) => {
    const options = {
        root: CLIENT_DIR,
        headers: {
            'Cache-Control': 'max-age=1800',
            'Access-Control-Allow-Origin': '*'
        }
    }
    response.sendFile(request.url, options)
})

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`[ OK ] App is available on port: ${port}`)
})
