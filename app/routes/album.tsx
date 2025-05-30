import { useEffect, useState } from "react";
import type { Album, SongDetails } from "~/appData/models";
import { useMusicLibraryStore } from "~/appData/musicStore";
import { useUserStore } from "~/appData/userStore";
import AlbumHeader from "~/components/albumDisplays/AlbumHeader";
import { MusicPlayer } from "~/components/sections/MusicPlayer";
import MusicSidebar from "~/components/sections/MusicSidebar";
import MusicTopbar from "~/components/sections/MusicTopbar";
import SongLine from "~/components/songLineDisplays/SongLine";
import { useLocation } from "react-router";

import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";

interface AlbumPageState {
  album: Album;
}

export default function AlbumPage() {
  const { selectedSong, setSelectedSong } = useUserStore();
  const { recentlyPlayed, sidebarSections } = useMusicLibraryStore();

  const [albumSongsDetails, setAlbumSongsDetails] = useState<SongDetails[]>([]);
  const location = useLocation();
  const { album }: AlbumPageState = location.state;

  useEffect(() => {
    const allSongsDetails = recentlyPlayed;
    let details: SongDetails[] = [];
    album?.songs?.map((songIndex) =>
      details.push(allSongsDetails[songIndex - 1]),
    );
    setAlbumSongsDetails(details);
  }, [album]);

  const getCurrentSongIndex = () => {
    if (!selectedSong || !selectedSong.id) return -1;
    return albumSongsDetails.findIndex(
      (song: SongDetails) => song.id === selectedSong.id,
    );
  };

  const handlePreviousSong = () => {
    const currentIndex = getCurrentSongIndex();
    let prevSong;
    if (currentIndex <= 0) {
      prevSong = albumSongsDetails[albumSongsDetails.length - 1];
    } else {
      prevSong = albumSongsDetails[currentIndex - 1];
    }
    setSelectedSong({
      ...prevSong,
      isPlaying: selectedSong?.isPlaying || false,
    });
  };

  const handleNextSong = () => {
    const currentIndex = getCurrentSongIndex();
    let nextSong;
    if (currentIndex === -1 || currentIndex === albumSongsDetails.length - 1) {
      nextSong = albumSongsDetails[0];
    } else {
      nextSong = albumSongsDetails[currentIndex + 1];
    }
    setSelectedSong({
      ...nextSong,
      isPlaying: selectedSong?.isPlaying || false,
    });
  };

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
          <AlbumHeader album={album} songs={albumSongsDetails} />
          <hr />
          <div className="album-song-list">
            {albumSongsDetails.map((s: SongDetails) => (
              <SongLine
                key={s.id}
                details={s}
                onClick={() => setSelectedSong(s)}
                isPlaying={s.id === selectedSong?.id}
              />
            ))}
          </div>

          <hr />

          {selectedSong && (
            <MusicPlayer
              details={{
                audioUrl: selectedSong.audioUrl,
                imageSrc: selectedSong.imageSrc,
                title: selectedSong.title,
                artist: selectedSong.artist,
                album: selectedSong.album,
                year: selectedSong.year || new Date().getFullYear(),
                isPlaying: selectedSong.isPlaying,
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
