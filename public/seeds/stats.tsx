import { users } from "./users";
import { songs } from "./songs";
import { albums } from "./albums";

export const stats = [
  {
    totalSongs: songs.length,
    totalAlbums: albums.length,
    totalUsers: users.length,
    totalArtists: 14,
  },
];
