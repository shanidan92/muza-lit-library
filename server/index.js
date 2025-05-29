import express from "express";
// import cors from 'cors'
import { fileURLToPath } from "url";
import axios from "axios";
import path from "path";
import https from "https";
import * as fs from "fs";
import { replace } from "react-router";
try{
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.resolve("./server/reactServer/client");
const publicDir = path.resolve("./public");

const app = express();
const port = process.env.PORT || 3000;

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const instance = axios.create({ httpsAgent });

const filePath = path.join(publicDir, "/mockData/allData.json"); // Path to your JSON file
let allData = {};
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    allData = JSON.parse(data);
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
  
const albums = await instance
  .post(
    "https://ec2-34-244-32-40.eu-west-1.compute.amazonaws.com/api/metadata/graphql",
    {
      query:
        "{ allAlbums { albumTitle albumCover label labelLogo bandName artistPhoto artistMain instrument otherArtistPlaying otherInstrument yearRecorded yearReleased songTitle composer songFile createdAt } }"
    },
    { httpsAgent },
  )
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

const tracks = await instance
  .post(
    "https://ec2-34-244-32-40.eu-west-1.compute.amazonaws.com/api/metadata/graphql",
    {
      query:
        "{ allTracks { id uuid songTitle artistMain bandName albumTitle yearRecorded yearReleased instrument otherArtistPlaying otherInstrument songFile composer label createdAt albumCover}}",
    },
    { httpsAgent },
  )
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

app.get("/getAllData", (req, res) => {
  const response = { ...allData , albums:{...allData.albums , newReleases:[...albums.data.allAlbums.filter(i=>i.albumCover).map(i=>({"id": i.albumTitle,
        "imageSrc":i.albumCover?.replace('.com/files' , '.com/api/upload/files').replace('http://' , 'https://'),
        "title": i.albumTitle,
        "subTitle":i.yearReleased,
        "artist": i.artistMain,
        "songs": [1, 2, 3]})) ,...allData.albums.newReleases  ]}, songs:[ ...tracks.data.allTracks.filter(i=>i.songFile && i.albumCover).map(i=>({ "id": i.uuid,
      "index": i.id,
      "title": i.songTitle,
      "time": 185,
      "albumId": i.albumTitle,
      "audioUrl": i.songFile?.replace('.com/files' , '.com/api/upload/files').replace('http://' , 'https://'),
      "imageSrc": i.albumCover?.replace('.com/files' , '.com/api/upload/files').replace('http://' , 'https://'),
      "artist": i.artistMain,
      "album": i.albumTitle,
      "year": i.yearReleased})),...allData.songs ] };
  res.send(response);
});
app.use(express.static(clientDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(clientDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
}catch(err){
  console.error(err);
}