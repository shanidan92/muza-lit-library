import "../components/sections/MusicSidebar";
import MusicSidebar from "~/components/sections/MusicSidebar";
import { useEffect, useState } from "react";
import { MusicPlayer } from "~/components/sections/MusicPlayer";
import MusicTopbar from "~/components/sections/MusicTopbar";
import type { Album, SongDetails } from "~/appData/models";
import AlbumDetails from "~/components/albumDisplays/AlbumDetails";
import { useUserStore } from "~/appData/userStore";
import { useMusicLibraryStore } from "~/appData/musicStore";
import { useNavigate } from "react-router";

import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";

export default function Albums() {
  const { selectedSong, setSelectedSong } = useUserStore();
  const {
    newReleases,
    featured,
    recommended,
    recentlyPlayed,
    sidebarSections,
    setNewReleases,
    setFeatured,
    setRecommended,
    setRecentlyPlayed,
    setSidebarSections,
  } = useMusicLibraryStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
    if (currentIndex <= 0) {
      setSelectedSong(recentlyPlayed[recentlyPlayed.length - 1]);
    } else {
      setSelectedSong(recentlyPlayed[currentIndex - 1]);
    }
  };

  const handleNextSong = () => {
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1 || currentIndex === recentlyPlayed.length - 1) {
      setSelectedSong(recentlyPlayed[0]);
    } else {
      setSelectedSong(recentlyPlayed[currentIndex + 1]);
    }
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
        setFeatured(data.albums.featured || []);
        setNewReleases(data.albums.newReleases || []);
        setRecommended(data.albums.recommended || []);
        setRecentlyPlayed(data.songs);
        setSidebarSections(data.sidebar.sections);

        if (data.songs.length > 0 && !selectedSong) {
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
          <h1>Albums</h1>

          <hr />
          <h2>Featured Albums</h2>
          <div className="album-list">
            {featured.map((a: Album) => (
              <AlbumDetails
                key={a.id}
                details={a}
                onAlbumClick={() => onAlbumClick(a)}
              />
            ))}
          </div>

          <hr />
          <h2>New Releases</h2>
          <div className="album-list">
            {newReleases.map((a: Album) => (
              <AlbumDetails
                key={a.id}
                details={a}
                onAlbumClick={() => onAlbumClick(a)}
              />
            ))}
          </div>

          <hr />
          <h2>Recommended Albums</h2>
          <div className="album-list">
            {recommended.map((a: Album) => (
              <AlbumDetails
                key={a.id}
                details={a}
                onAlbumClick={() => onAlbumClick(a)}
              />
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
