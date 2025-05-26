import "../components/sections/MusicSidebar"; // likely unused — can be deleted
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

  const getCurrentSongIndex = () => {
    if (!selectedSong || !selectedSong.id) return -1;
    return data.songs.findIndex((song: SongDetails) => song.id === selectedSong.id);
  };

  const handlePreviousSong = () => {
    const currentIndex = getCurrentSongIndex();
    if (currentIndex <= 0) {
      setSelectSong(data.songs[data.songs.length - 1]);
    } else {
      setSelectSong(data.songs[currentIndex - 1]);
    }
  };

  const handleNextSong = () => {
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1 || currentIndex === data.songs.length - 1) {
      setSelectSong(data.songs[0]);
    } else {
      setSelectSong(data.songs[currentIndex + 1]);
    }
  };

  useEffect(() => {
    fetch("./mockData/allData.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
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
              <AlbumDetails key={a.id} details={a} />
            ))}
          </div>

          <hr />
          <h2>Recently Played</h2>
          <div className="song-list">
            {data.songs.map((s: SongDetails) => (
              <SongLine
                key={s.id}
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

          <MusicPlayer
            details={selectedSong}
            onUpdate={(updatedDetails) => setSelectSong(updatedDetails)}
            onPrevious={handlePreviousSong}
            onNext={handleNextSong}
            onSongEnded={handleNextSong}
          />
        </main>
      </div>
    </div>
  );
}
