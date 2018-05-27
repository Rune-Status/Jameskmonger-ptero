import { createServer } from "net";

const addr = "127.0.0.1";
const port = 43594;

console.log('Starting ptero server on '+addr+':'+port);
createServer().listen(port, addr).on('connection', function(socket) {
    console.log("received");
});