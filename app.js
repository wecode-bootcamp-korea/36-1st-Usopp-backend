

const http = require("http");
const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config()

const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//health check
app.get("/ping", (req,res) => {
  res.json({ message: "pong"});
});


const start = async () => {
  try{
  server.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
} catch(err){
  console.log(err);
}
};

start();