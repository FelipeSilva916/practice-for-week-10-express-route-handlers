// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require("./data");

const express = require("express");
const app = express();
app.use(express.json());

// Your code here

// app.use((req, res, next) => {
//   console.log("Body:", req.body);
//   next();
// });

// app.get("/", async (req, res) => {
//   res.send("Hello World");
// });

app.get("/artists", async (req, res) => {
  const artists = await getAllArtists();
  res.send(artists);
});

app.post("/artists", async (req, res) => {
  const artist = await addArtist(req.body);
  res.send(artist);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
