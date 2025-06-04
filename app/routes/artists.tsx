import { useEffect, useState } from "react";
import MusicSidebar from "~/components/sections/MusicSidebar";
import MusicTopbar from "~/components/sections/MusicTopbar";
import ArtistDetails from "~/components/artistDisplays/ArtistDetails";
import { useMusicLibraryStore } from "~/appData/musicStore";

import "../styles/scrollbar.css";
import "../styles/variables.css";
import "../styles/main.css";

export default function Artists() {
  const { artists, sidebarSections } = useMusicLibraryStore();

  return (
    <main>
      <h1>Artists</h1>
      <hr />
      <div className="artist-list">
        {artists.map((artist: any) => (
          <ArtistDetails key={artist.id} details={artist} />
        ))}
      </div>
    </main>
  );
}
