import {create } from 'zustand';
import type { Album, Artist, SongDetails } from './models';

type musicLibraryStore = {
    newReleases: Album[];
    recentlyPlayed: SongDetails[],
    artists: Artist[],
    labels: Artist[],
};

export const useMusicLibraryStore = create<musicLibraryStore>((set) => ({
    newReleases: [], 
    recentlyPlayed: [],
    artists: [],
    labels: [],

    setNewReleases: (albums: Album[]) =>
        set({ newReleases: albums }),

    setRecentlyPlayed: (songs: SongDetails[]) =>
        set({ recentlyPlayed: songs }),

    setArtists: (artists: Artist[]) =>
        set({ artists }),

    setLabels: (labels: Artist[]) =>
        set({ labels }),
}));