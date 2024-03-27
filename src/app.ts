import http from 'http';

const server = http.createServer((req, res) => {

    console.log(req.url);

    const data = { name: "Jhon Doe", age: 30, city: 'New York' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

});


server.listen(8080, () => {
    console.log('Server running on port 8080');
});