import React from "react";
import "./ArtistDetails.css";

interface Artist {
  id: number;
  imageSrc: string;
  artistName: string;
  albumsCount: string;
}

interface ArtistDetailsProps {
  details: Artist;
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ details }) => {
  return (
    <div className="artist-details-card">
      <div className="image-container">
        <img src={details.imageSrc} alt={details.artistName} />
      </div>
      <div className="info">
        <div className="title">{details.artistName}</div>
        <div className="subtitle">{details.albumsCount} Albums</div>
        <div className="buttons">
          <button className="icon-button">
            <span className="icon icon-dots" />
          </button>
          <button className="icon-button">
            <span className="icon icon-info" />
          </button>
          <button className="icon-button">
            <span className="icon icon-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
