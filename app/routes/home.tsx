import "../components/sections/MusicSidebar";
import MusicSidebar from "~/components/sections/MusicSidebar";
import { useEffect, useState } from "react";
import { MusicPlayer } from "~/components/sections/MusicPlayer";
import MusicTopbar from "~/components/sections/MusicTopbar";
import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";
import SongLine from "~/components/songLineDisplays/SongLine";
import type { Album, SongDetails } from "~/appData/models";
import MuzaMusicPlaylist from "~/components/listsDisplays/MusicPlaylist";
import AlbumDetails from "~/components/albumDisplays/AlbumDetails";
import ArtistDetails from "~/components/artistDisplays/ArtistDetails";

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [selectedSong, setSelectSong] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/getAllData") // or use a full URL: 'https://example.com/api/data'
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setSelectSong(data.songs[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="body">
      <MusicSidebar
        logoSrc="app/icons/icons/muza.svg"
        logoAlt="Music Library"
        sections={data.sidebar.sections}
      />

      <div className="content">
        <MusicTopbar />
        <main>
          <h1>Home</h1>
          <hr />
          <h2>New Releases</h2>
          <div className="album-list">
            {data.albums.newReleases.map((a: Album) => (
              <AlbumDetails details={a} />
            ))}
          </div>
          <hr />
          <h2>Recently Played</h2>
          <div className="song-list">
            {data.songs.map((s: SongDetails) => (
              <SongLine
                details={s}
                onClick={() => setSelectSong(s)}
                isPlaying={s.id === selectedSong.id}
              />
            ))}
          </div>
          <hr />
          <h2>Artists</h2>
          <div className="album-list">
            {data.artists.map((artist: any) => (
              <ArtistDetails key={artist.id} details={artist} />
            ))}
          </div>

          <MusicPlayer details={selectedSong} />
        </main>
      </div>
    </div>
  );
}
