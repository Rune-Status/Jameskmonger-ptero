import { Socket } from "net";
import { ByteBuffer } from "game-packets";
import ReadableByteBuffer = ByteBuffer.ReadableByteBuffer;

const getArray = (buffer: Buffer) => {
    const out = [];

    for (let i = 0; i < buffer.length; i++) {
        out[i] = buffer.readUInt8(i);
    }

    return out;
}

export class ClientConnection {

    constructor(socket: Socket) {
        socket.on("data", buffer => this.handleMessage(buffer));
    }

    private handleMessage(buffer: Buffer) {
        const bufferData = getArray(buffer);
        const readable = new ReadableByteBuffer(bufferData);

        console.log(readable.readByte(false));

        console.log("new message! " + buffer.length)
    }

}
