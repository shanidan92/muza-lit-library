import { useEffect, useState } from "react";
import MusicSidebar from "~/components/sections/MusicSidebar";
import MusicTopbar from "~/components/sections/MusicTopbar";
import SongLine from "~/components/songLineDisplays/SongLine";
import type { SongDetails } from "~/appData/models";
import { useUserStore } from "~/appData/userStore";
import { useMusicLibraryStore } from "~/appData/musicStore";

import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";

export default function Songs() {
  const { setSelectedSong } = useUserStore();
  const {
    recentlyPlayed,
    sidebarSections,
    setRecentlyPlayed,
    setSidebarSections,
  } = useMusicLibraryStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setRecentlyPlayed(data.songs);
        setSidebarSections(data.sidebar.sections);
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
          <h1>Songs</h1>
          <hr />
          <div className="song-list">
            {recentlyPlayed.map((s: SongDetails) => (
              <SongLine
                key={s.id}
                details={s}
                onClick={() => setSelectedSong(s)}
                isPlaying={false}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
