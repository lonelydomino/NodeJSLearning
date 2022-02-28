const fs = require('fs')


const requestHandler = (req, res) =>{
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.write('<html>')
        res.write('<body><h1>Hello!</h1></body>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="userinput"><button>Submit</button></form>')

        res.write('</html>')
        return res.end()
    }
    if(url === '/users'){
        res.write('<html>')
        res.write('<ul><li>User 1</li></ul>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }

}
    
module.exports.handler = requestHandler