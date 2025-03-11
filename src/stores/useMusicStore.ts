import { Album, Song, Stats } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import {
  songs,
  featuredSongs,
  trendingSongs,
  madeForYouSongs,
} from "../../public/seeds/songs";
import { albums } from "../../public/seeds/albums";
import { users } from "../../public/seeds/users";

interface MusicStore {
  songs: Song[];
  albums: Album[];
  isLoading: boolean;
  error: string | null;
  currentAlbum: Album | null;
  featuredSongs: Song[];
  madeForYouSongs: Song[];
  trendingSongs: Song[];
  stats: Stats;

  fetchAlbums: () => void;
  fetchAlbumById: (id: string) => void;
  fetchFeaturedSongs: () => void;
  fetchMadeForYouSongs: () => void;
  fetchTrendingSongs: () => void;
  fetchStats: () => Promise<void>;
  fetchSongs: () => void;
  deleteSong: (id: string) => void;
  deleteAlbum: (id: string) => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,
  madeForYouSongs: [],
  featuredSongs: [],
  trendingSongs: [],
  stats: {
    totalSongs: 0,
    totalAlbums: 0,
    totalUsers: 0,
    totalArtists: 0,
  },

  deleteSong: (id) => {
    set({ isLoading: true, error: null });
    // try {
    //   await axiosInstance.delete(`/admin/songs/${id}`);

    set((state) => ({
      songs: state.songs.filter((song) => song._id !== id),
    }));
    toast.success("Song deleted successfully");
    // } catch (error: any) {
    //   console.log("Error in deleteSong", error);
    //   toast.error("Error deleting song");
    // } finally {
    set({ isLoading: false });
    // }
  },

  deleteAlbum: async (id) => {
    set({ isLoading: true, error: null });
    set((state) => ({
      albums: state.albums.filter((album) => album._id !== id),
      songs: state.songs.map((song) =>
        song.albumId === state.albums.find((a) => a._id === id)?.title
          ? { ...song, album: null }
          : song
      ),
    }));
    toast.success("Album deleted successfully");
  },

  fetchSongs: async () => {
    set({ isLoading: true, error: null });
    set({ songs: songs });
    set({ isLoading: false });
  },

  fetchStats: async () => {
    set({ isLoading: true, error: null });

    set({
      stats: {
        totalSongs: songs.length,
        totalAlbums: albums.length,
        totalUsers: users.length,
        totalArtists: 14,
      },
    });
    set({ isLoading: false });
  },

  fetchAlbums: () => {
    set({ isLoading: true, error: null });
    set({ albums });
    set({ isLoading: false });
  },

  fetchAlbumById: (id) => {
    set({ isLoading: true, error: null });
    set({ currentAlbum: albums.find((album) => album._id === id) });
    set({ isLoading: false });
  },

  fetchFeaturedSongs: () => {
    set({ isLoading: true, error: null });
    set({ featuredSongs });
    set({ isLoading: false });
  },

  fetchMadeForYouSongs: () => {
    set({ isLoading: true, error: null });
    set({ madeForYouSongs });
    set({ isLoading: false });
  },

  fetchTrendingSongs: () => {
    set({ isLoading: true, error: null });
    set({ trendingSongs });
    set({ isLoading: false });
  },
}));
