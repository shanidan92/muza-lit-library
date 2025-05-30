import express from "express";
import { fileURLToPath } from "url";
import axios from "axios";
import path from "path";
import https from "https";
import * as fs from "fs";

// Configuration constants
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || 
  "https://ec2-34-244-32-40.eu-west-1.compute.amazonaws.com/api/metadata/graphql";
const PORT = process.env.PORT ||
  3000;
const stockPhoto = "https://picsum.photos/400"; // Placeholde photo URL

// File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve("./server/reactServer/client");
const publicDir = path.resolve("./public");
const staticDataFilePath = path.join(publicDir, "/staticData/allData.json");

// HTTP client setup
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const instance = axios.create({ httpsAgent });

// GraphQL queries
const ALBUMS_QUERY = `{
  allAlbums {
    albumTitle albumCover label labelLogo bandName artistPhoto
    artistMain instrument otherArtistPlaying otherInstrument
    yearRecorded yearReleased songTitle composer songFile createdAt
  }
}`;

const TRACKS_QUERY = `{
  allTracks {
    id uuid songTitle artistMain bandName albumTitle yearRecorded
    yearReleased instrument otherArtistPlaying otherInstrument
    songFile composer label createdAt albumCover
  }
}`;

const ARTISTS_QUERY = `{
  allArtists {
    id uuid songTitle artistMain bandName albumTitle yearRecorded
    yearReleased instrument otherArtistPlaying otherInstrument
    songFile composer label createdAt albumCover
  }
}`;

// Utility functions
function transformUrl(url) {
  if (!url) return url;
  return url
    .replace('.com/files', '.com/api/upload/files')
    .replace('http://', 'https://');
}

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count + 1);
}

function transformAlbumData(albums, transformedTracks) {
  return albums
    .map(album => ({
      id: album.albumTitle,
      imageSrc: transformUrl(album.albumCover || stockPhoto),
      title: album.albumTitle,
      subTitle: album.yearReleased,
      artist: album.artistMain,
      songs: transformedTracks
        .filter(track => track.album === album.albumTitle && track.artist === album.artistMain)
        .map(track => track.id),
    }));
}

function transformTrackData(tracks) {
  return tracks
    .filter(track => track.songFile)
    .map(track => ({
      id: track.uuid,
      index: track.id,
      title: track.songTitle,
      time: 185,
      albumId: track.albumTitle,
      audioUrl: transformUrl(track.songFile),
      imageSrc: transformUrl(track.albumCover || stockPhoto),
      artist: track.artistMain,
      album: track.albumTitle,
      year: track.yearReleased
    }));
}

function transformArtistData(artists, transformedAlbums) {
  const albumsByArtist = transformedAlbums.reduce((acc, album) => {
    acc[album.artist] = (acc[album.artist] || 0) + 1;
    return acc;
  }, {});
  
  return artists
    .filter(artist => artist.artistMain)
    .map((artist, index) => ({
      id: artist.id || index + 1,
      index: index + 1,
      imageSrc: transformUrl(artist.albumCover) || stockPhoto,
      artistName: artist.artistMain,
      albumsCount: String(albumsByArtist[artist.artistMain] || 0)
    }));
}

// GraphQL API functions
async function fetchGraphQLData(query) {
  try {
    const response = await instance.post(GRAPHQL_ENDPOINT, { query }, { httpsAgent });
    return response.data.data;
  } catch (error) {
    console.error("GraphQL request failed:", error.message);
    throw error;
  }
}

async function fetchAlbums() {
  const data = await fetchGraphQLData(ALBUMS_QUERY);
  return data.allAlbums || [];
}

async function fetchTracks() {
  const data = await fetchGraphQLData(TRACKS_QUERY);
  return data.allTracks || [];
}

async function fetchArtists() {
  const data = await fetchGraphQLData(ARTISTS_QUERY);
  return data.allArtists || [];
}

// File operations
function loadStaticData() {
  console.log("Loading mock data from:", staticDataFilePath);
  return new Promise((resolve, reject) => {
    fs.readFile(staticDataFilePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading mock data file:", err);
        console.log("Proceeding without mock data");
        resolve({});
        return;
      }
      try {
        const parsedData = JSON.parse(data);
        console.log("Mock data loaded successfully");
        resolve(parsedData);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        console.log("Proceeding with empty mock data");
        resolve({});
      }
    });
  });
}

// Main application logic
async function initializeApp() {
  try {
    console.log("Initializing application...");
    const app = express();
    
    console.log("Loading data from multiple sources...");
    // Load data
    const [allData, albumsData, tracksData, artistsData] = await Promise.all([
      loadStaticData(),
      fetchAlbums(),
      fetchTracks(),
      fetchArtists()
    ]);

    console.log(`Loaded ${albumsData.length} albums from GraphQL`);
    console.log(`Loaded ${tracksData.length} tracks from GraphQL`);
    console.log(`Loaded ${artistsData.length} artists from GraphQL`);

    // Transform data
    console.log("Transforming data...");
    const transformedTracks = transformTrackData(tracksData);
    const transformedAlbums = transformAlbumData(albumsData, transformedTracks);
    const transformedArtists = transformArtistData(albumsData, transformedAlbums);
    
    console.log(`Transformed ${transformedAlbums.length} albums with covers`);
    console.log(`Transformed ${transformedTracks.length} tracks with files and covers`);
    console.log(`Transformed ${transformedArtists.length} artists with photos`);

    // API endpoints
    app.get("/staticData/allData.json", (req, res) => {
      console.log("GET /staticData/allData.json - Request received");
            
      const response = {
        albums: {
          featured: getRandomItems(transformedAlbums, 3),
          newReleases: getRandomItems(transformedAlbums, 3),
          recommended: getRandomItems(transformedAlbums, 3)
        },
        artists: transformedArtists,
        songs: transformedTracks,
        sidebar: allData.sidebar
      };

      console.log(`Sending response with ${response.albums?.newReleases?.length || 0} albums, ${response.artists?.length || 0} artists and ${response.songs?.length || 0} songs`);
      res.json(response);
    });

    // Static file serving
    console.log("Setting up static file serving from:", clientDir);
    app.use(express.static(clientDir));
    
    // Serve static assets from app directory
    const appDir = path.resolve("./app");
    console.log("Setting up app static file serving from:", appDir);
    app.use("/app", express.static(appDir));
    
    // Serve public directory for other static assets
    console.log("Setting up public file serving from:", publicDir);
    app.use(express.static(publicDir));

    app.get("/", (req, res) => {
      console.log("GET / - Serving index.html");
      res.sendFile(path.join(clientDir, "index.html"));
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
      console.log(`📁 Serving static files from: ${clientDir}`);
      console.log(`📊 GraphQL endpoint: ${GRAPHQL_ENDPOINT}`);
    });

  } catch (error) {
    console.error("❌ Failed to initialize application:", error);
    process.exit(1);
  }
}

// Start the application
initializeApp();