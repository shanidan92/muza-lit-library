import { create } from "zustand";
import type {
  Album,
  Artist,
  MusicListSection,
  SongDetails,
  Section,
} from "./models";

type musicLibraryStore = {
  newReleases: Album[];
  recentlyPlayed: SongDetails[];
  artists: Artist[];
  labels: Artist[];
  musicSections: MusicListSection[];
  featured: Album[];
  recommended: Album[];
  sidebarSections: Section[];
  setNewReleases: (albums: Album[]) => void;
  setRecentlyPlayed: (songs: SongDetails[]) => void;
  setArtists: (artists: Artist[]) => void;
  setLabels: (labels: Artist[]) => void;
  setMusicSections: (sections: MusicListSection[]) => void;
  setFeatured: (albums: Album[]) => void;
  setRecommended: (albums: Album[]) => void;
  setSidebarSections: (sections: Section[]) => void;
};

export const useMusicLibraryStore = create<musicLibraryStore>((set) => ({
  newReleases: [],
  recentlyPlayed: [],
  artists: [],
  labels: [],
  musicSections: [],
  featured: [],
  recommended: [],
  sidebarSections: [],

  setNewReleases: (albums: Album[]) => set({ newReleases: albums }),

  setRecentlyPlayed: (songs: SongDetails[]) => set({ recentlyPlayed: songs }),

  setArtists: (artists: Artist[]) => set({ artists }),

  setLabels: (labels: Artist[]) => set({ labels }),

  setMusicSections: (sections: MusicListSection[]) =>
    set({ musicSections: sections }),

  setFeatured: (albums: Album[]) => set({ featured: albums }),

  setRecommended: (albums: Album[]) => set({ recommended: albums }),

  setSidebarSections: (sections: Section[]) =>
    set({ sidebarSections: sections }),
}));
