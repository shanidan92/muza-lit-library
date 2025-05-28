import { useEffect, useState } from "react";
import type { Album, SongDetails } from "~/appData/models";
import { useMusicLibraryStore } from "~/appData/musicStore";
import { useUserStore } from "~/appData/userStore";
import AlbumHeader from "~/components/albumDisplays/AlbumHeader";
import { MusicPlayer } from "~/components/sections/MusicPlayer";
import MusicSidebar from "~/components/sections/MusicSidebar";
import MusicTopbar from "~/components/sections/MusicTopbar";
import SongLine from "~/components/songLineDisplays/SongLine";

export default function AlbumPage() {
  const { 
    selectedSong,
    selectedPlaListOrAlbum,
    setSelectedSong,
  } = useUserStore();
  const {
    newReleases,
    recentlyPlayed,
    artists,
    setNewReleases,
    setRecentlyPlayed,
    setArtists,
  } = useMusicLibraryStore();

const [sidebarSections, setSidebarSections] = useState([]);
const [albumSongsDetails, setAlbumSongsDetails] = useState<SongDetails[]>([]);

useEffect(() => {
  const allSongsDetails = recentlyPlayed;
  let details: SongDetails[] = [];
  selectedPlaListOrAlbum?.songs?.map(songIndex => details.push(allSongsDetails[songIndex - 1]));
  setAlbumSongsDetails(details);
  }, [selectedPlaListOrAlbum]);

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

   return (
    <div className="body">
      <MusicSidebar
        logoSrc="app/icons/icons/muza.svg"
        logoAlt="Music Library"
        sections={sidebarSections}
      />

      <div className="content">
        <MusicTopbar />
        <main>
          <AlbumHeader details={selectedPlaListOrAlbum!} songs={albumSongsDetails} />
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
