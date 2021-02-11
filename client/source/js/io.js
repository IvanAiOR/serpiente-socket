const socket = io('http://localhost:5500',{ transports: ['websocket', 'polling', 'flashsocket'] });

const Saludar= () =>{
    item = {
        message:"Hola pá"
    }

    const request = JSON.stringify(item);
    socket.emit("hello", request);

}