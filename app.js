import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

const app = express();
const server = createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.render("index");
});


app.set("view engine", "ejs");
// app.set(express.static(path.join(__dirname, "public")));
// app.use("public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

io.on("connection", (socket) => {
  socket.on("location", (data) => {
    io.emit("recieve-location", { id: socket.id, ...data });
  });
  socket.on("disconnect", () => {
    io.emit("disconnected", { id: socket.id });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
