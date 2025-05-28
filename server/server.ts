import express from "express";
// import cors from 'cors'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.resolve('./server/reactServer/client');
const publicDir = path.resolve('./public');

const app = express();
const port = process.env.PORT || 3000;


// app.use(cors({
//   origin: [ 'http://localhost:5173'],
//   credentials: true,
// }));
app.get('/getAllData', (req, res) => {
  res.sendFile(path.join(publicDir, '/mockData/allData.json'));
})
app.use(express.static(clientDir));

app.get("/" , (req,res)=>{
   res.sendFile(path.join(clientDir, 'index.html'));
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});