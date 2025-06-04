import { create } from "zustand";
import type { Album, SongDetails } from "./models";

type currentPlayerStore = {
  selectedSong: SongDetails | null;
  selectedPlaListOrAlbum: Album | null;
  isPlaying: Boolean;
  setIsPlaying: (isPlaying: Boolean) => void;
  setSelectedSong: (song: SongDetails) => void;
  setSelectedPlaListOrAlbum: (album: Album) => void;
};

export const useCurrentPlayerStore = create<currentPlayerStore>((set) => ({
  selectedSong: null,
  isPlaying: false,
  selectedPlaListOrAlbum: null,

  setSelectedSong: (song: SongDetails) => set({ selectedSong: song }),
  setIsPlaying: (play: Boolean) => set({ isPlaying: play }),

  setSelectedPlaListOrAlbum: (album: Album) =>
    set({ selectedPlaListOrAlbum: album }),
}));
