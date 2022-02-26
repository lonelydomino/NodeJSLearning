//Creating a simple server in Node.js

const http = require('http')
const fs = require('fs')
const { emitWarning } = require('process')
const { brotliDecompressSync } = require('zlib')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message><button type="submit">?????</button> </form></body>')
        res.write('</html>')
        return res.end()

    }
    if(url == '/message' && method == 'POST'){
        const body
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
        })
        fs.writeFileSync('message.txt', 'DUMMY')
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }

    res.write('<html>')
    res.write('<head><title> My first page</title></head>')
    res.write('<body><h1>Hello world!</h1></body>')
    res.write('</html>')
    res.end()

})

server.listen(3000)