import { Socket } from "net";

export class ClientConnection {

    constructor(socket: Socket) {
        socket.on("data", buffer => this.handleMessage(buffer));
    }

    private handleMessage(buffer: Buffer) {
        console.log("new message! " + buffer.length)
    }

}
