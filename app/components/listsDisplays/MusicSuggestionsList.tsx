import React from "react";
import "./MusicSuggestionsList.css";
import type { MusicSuggestionsListProps, SongDetails } from "../../appData/models";
import SuggestionsListItem from "./SuggestionsListItem";

const MusicSuggestionsList: React.FC<MusicSuggestionsListProps> = ({
  songs,
  title,
}) => {
  return (
    <div className="music-suggestions-content">
      <div className="music-suggestions-header"> {title} </div>
      <div className="music-suggestions-playlist">
        <div className="songs-list">
          {songs.map((song, index) => (
            <SuggestionsListItem key={index} details={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicSuggestionsList;
