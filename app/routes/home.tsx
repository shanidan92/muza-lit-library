import "../components/sections/MusicSidebar";
import MusicSidebar from "~/components/sections/MusicSidebar";
import { useEffect, useState } from "react";
import { MusicPlayer } from "~/components/sections/MusicPlayer";
import MusicTopbar from "~/components/sections/MusicTopbar";
import SongLine from "~/components/songLineDisplays/SongLine";
import type { Album, SongDetails } from "~/appData/models";
import MuzaMusicPlaylist from "~/components/listsDisplays/MusicPlaylist";
import AlbumDetails from "~/components/albumDisplays/AlbumDetails";
import ArtistDetails from "~/components/artistDisplays/ArtistDetails";
import { useUserStore } from "~/appData/userStore";
import { useMusicLibraryStore } from "~/appData/musicStore";
import { useNavigate } from "react-router";

import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";

export default function Home() {
  const { selectedSong, setSelectedSong, setSelectedPlaListOrAlbum } =
    useUserStore();
  const {
    newReleases,
    recentlyPlayed,
    artists,
    sidebarSections,
    setNewReleases,
    setRecentlyPlayed,
    setArtists,
    setSidebarSections,
  } = useMusicLibraryStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayedAlbums, setDisplayedAlbums] = useState<Album[]>([]);
  const [displayedArtists, setDisplayedArtists] = useState<any[]>([]);
  const [displayedSongs, setDisplayedSongs] = useState<SongDetails[]>([]);
  const navigate = useNavigate();

  const onAlbumClick = (album: Album) => {
    navigate("/routes/album", { state: { album } });
  };

  const getCurrentSongIndex = () => {
    if (!selectedSong || !selectedSong.id) return -1;
    return recentlyPlayed.findIndex(
      (song: SongDetails) => song.id === selectedSong.id,
    );
  };

  const handlePreviousSong = () => {
    const currentIndex = getCurrentSongIndex();
    let prevSong;
    if (currentIndex <= 0) {
      prevSong = recentlyPlayed[recentlyPlayed.length - 1];
    } else {
      prevSong = recentlyPlayed[currentIndex - 1];
    }
    setSelectedSong({
      ...prevSong,
      isPlaying: selectedSong?.isPlaying || false,
    });
  };

  const handleNextSong = () => {
    const currentIndex = getCurrentSongIndex();
    let nextSong;
    if (currentIndex === -1 || currentIndex === recentlyPlayed.length - 1) {
      nextSong = recentlyPlayed[0];
    } else {
      nextSong = recentlyPlayed[currentIndex + 1];
    }
    setSelectedSong({
      ...nextSong,
      isPlaying: selectedSong?.isPlaying || false,
    });
  };

  useEffect(() => {
    fetch("/staticData/allData.json")
      .then((response) => {
        if (!response.ok) {
          fetch("./staticData/allData.json").then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setNewReleases(data.albums.newReleases);
        setRecentlyPlayed(data.songs);
        setArtists(data.artists);
        setSidebarSections(data.sidebar.sections);

        // Get random 5 albums for display
        const shuffled = [...data.albums.newReleases].sort(
          () => 0.5 - Math.random(),
        );
        setDisplayedAlbums(shuffled.slice(0, 5));

        // Get random 5 artists for display
        const shuffledArtists = [...data.artists].sort(
          () => 0.5 - Math.random(),
        );
        setDisplayedArtists(shuffledArtists.slice(0, 5));

        // Get first 30 songs for display
        setDisplayedSongs(data.songs.slice(0, 30));

        if (data.songs.length > 0) {
          setSelectedSong(data.songs[0]);
        }
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
        logoSrc="/app/icons/icons/muza.svg"
        logoAlt="Music Library"
        sections={sidebarSections}
      />

      <div className="content">
        <MusicTopbar />

        <main>
          <h1>Home</h1>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>New Releases</h2>
            <button
              onClick={() => navigate("/routes/albums")}
              className="show-more-btn"
            >
              Show more
            </button>
          </div>
          <div className="album-list">
            {displayedAlbums.map((a: Album) => (
              <AlbumDetails
                key={a.id}
                details={a}
                onAlbumClick={() => onAlbumClick(a)}
              />
            ))}
          </div>

          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Recently Played</h2>
            <button
              onClick={() => navigate("/routes/songs")}
              className="show-more-btn"
            >
              Show more
            </button>
          </div>
          <div className="song-list">
            {displayedSongs.map((s: SongDetails) => (
              <SongLine
                key={s.id}
                details={s}
                onClick={() => setSelectedSong(s)}
                isPlaying={s.id === selectedSong?.id}
              />
            ))}
          </div>

          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Artists</h2>
            <button
              onClick={() => navigate("/routes/artists")}
              className="show-more-btn"
            >
              Show more
            </button>
          </div>
          <div className="artist-list">
            {displayedArtists.map((artist: any) => (
              <ArtistDetails key={artist.id} details={artist} />
            ))}
          </div>

          {selectedSong && (
            <MusicPlayer
              details={{
                audioUrl: selectedSong.audioUrl || "",
                imageSrc: selectedSong.imageSrc || "",
                title: selectedSong.title,
                artist: selectedSong.artist || "",
                album: selectedSong.album || "",
                year: selectedSong.year || new Date().getFullYear(),
                isPlaying: selectedSong.isPlaying || false,
                id: selectedSong.id,
              }}
              onUpdate={(updatedDetails) =>
                setSelectedSong({
                  ...selectedSong,
                  isPlaying: updatedDetails.isPlaying,
                  audioUrl: updatedDetails.audioUrl,
                })
              }
              onPrevious={handlePreviousSong}
              onNext={handleNextSong}
              onSongEnded={handleNextSong}
            />
          )}
        </main>
      </div>
    </div>
  );
}
