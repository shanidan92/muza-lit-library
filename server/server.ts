import express from "express";
// import cors from 'cors'
import { fileURLToPath } from 'url';
import axios from 'axios';
import path from 'path';
import https from 'https';
import * as fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.resolve('./server/reactServer/client');
const publicDir = path.resolve('./public');

const app = express();
const port = process.env.PORT || 3000;

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
 
const instance = axios.create({ httpsAgent })

const filePath =path.join(publicDir, '/mockData/allData.json'); // Path to your JSON file
let allData = {};
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    allData = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
 const data = await instance.post('https://ec2-34-244-32-40.eu-west-1.compute.amazonaws.com/api/metadata/graphql',
    { "query": "{ allTracks { id uuid songTitle artistMain bandName albumTitle yearRecorded yearReleased instrument otherArtistPlaying otherInstrument composer label createdAt}}" }, { httpsAgent })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
    
app.get('/getAllData', (req, res) => {
  const response  = {...allData , tracks: data.data.allTracks}
  res.send(response);

})
app.use(express.static(clientDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(clientDir, 'index.html'));
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});