import type { SongDetails } from "../appData/models";

// Define interfaces for album data structure
interface Album {
  id: string;
  imageSrc: string;
  title: string;
  subTitle: string;
  artist: string;
  songs?: number[];
}

interface AlbumCollection {
  featured: Album[];
  newReleases: Album[];
  recommended: Album[];
}

// Extended song details that includes albumId
interface ExtendedSongDetails extends SongDetails {
  albumId?: string;
  id?: string;
}

// Player interface
interface MusicPlayer {
  details: {
    src: string;
    imageSrc: string;
    title: string;
    artist: string;
    album: string;
    year: number;
    isPlaying: boolean;
  };
  updateVolume?: (volume: number) => void;
}

// Route configuration interface
export interface CustomRouteConfig {
  path: string;
  name: string;
  component: HTMLElement | (() => HTMLElement);
}
 