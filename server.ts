import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // ...

});

io.on("connection", (socket : Socket ) => {
  // ...
    socket.on("hello",(json="")=>{
        const request = JSON.parse(json);
        console.log(request.message);
    })
});

httpServer.listen(5500);
