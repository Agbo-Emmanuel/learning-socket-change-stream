const { Server } = require("socket.io");
const cors = require("cors");


const io = new Server(3000,{
    cors:{
        origin: "http://localhost:5173"
    }
})


io.on("connection", (socket) => {
  console.log(socket.id)
});