import { createServer } from "net";
import { ClientConnection } from "./net/ClientConnection";

const address = "127.0.0.1";
const port = 43594;

console.log(`Starting ptero on ${address}:${port}`);
const server = createServer().listen(port, address);

const connections: ClientConnection[] = [];

server.on('connection', socket => {
    const conn = new ClientConnection(socket);
    connections.push(conn);

    console.log(`New connection from ${socket.address().address}`)
});
