const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(`{ "message": "Hello ${process.env.NAME}" }`);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
