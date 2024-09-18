import('dotenv/config')
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

let arr = [];
let idx = 1;

// Add a new Tea
app.post("/", (req, res) => {
  const {name, price} = req.body;
  const new_data = {id: idx++, name, price};
  arr.push(new_data);
  res.status(201).send(new_data);
});

// Get all Teas
app.get("/teas", (req, res) => {
  res.status(200).send(arr);
})

// Get a particular Tea
app.get("/teas/:id", (req, res) => {
  const id = req.params.id;
  if(id > 0 && id < idx){
    res.status(200).send(arr[id-1]);
  }else{
    res.status(404).send("404 Not Found");
  }
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});