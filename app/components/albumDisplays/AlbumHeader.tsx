import React, { useEffect, useState } from "react";
import "./AlbumHeader.css";
import type { Album, SongDetails } from "~/appData/models";
import { FaPause, FaPlay } from "react-icons/fa";
import { useUserStore } from "~/appData/userStore";
import { toast } from "react-toastify";
import AlbumInfoModal from "./AlbumInfoModal";

interface AlbumHeaderProps {
  details: Album;
  songs: SongDetails[];
}

const AlbumHeader: React.FC<AlbumHeaderProps> = ({ details, songs }) => {
  const { selectedSong, setSelectedSong } = useUserStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const GetRandomSong = () => {
    return Math.floor(Math.random() * songs.length);
  };

  const addToLibrary = () => {
    toast("Album added succssefuly to your library", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  };

  return (
    <div className="album-header-card">
      <div className="image-container">
        <img src={details.imageSrc} />
      </div>
      <div className="info">
        <div className="title">{details.title}</div>
        <div className="artist">{details.artist}</div>
        <div className="atrist">Album • {details.songs?.length} Songs</div>
        <button
          className="icon-button"
          onClick={() => setSelectedSong(songs[0])}
        >
          {selectedSong?.isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="icon-button"
          onClick={() => setSelectedSong(songs[GetRandomSong()])}
        >
          <span className="icon icon-shuffle">
            <svg viewBox="0 0 24 24">
              <path d="M16 3h5v5" />
              <path d="M4 20l16-16" />
              <path d="M4 4l5 5" />
              <path d="M21 16v5h-5" />
              <path d="M15 15l6 6" />
            </svg>
          </span>
        </button>
        <button className="icon-button" onClick={addToLibrary}>
          <span className="icon icon-plus" />
        </button>
        <button className="icon-button" onClick={() => setModalOpen(true)}>
          <span className="icon icon-info" />
        </button>
      </div>
      <AlbumInfoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      ></AlbumInfoModal>
    </div>
  );
};

export default AlbumHeader;
