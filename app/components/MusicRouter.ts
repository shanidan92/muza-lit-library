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

// Route configuration interface
export interface CustomRouteConfig {
  path: string;
  name: string;
  component: HTMLElement | (() => HTMLElement);
}
