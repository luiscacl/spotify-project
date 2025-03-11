import { Album } from "@/types";
import { songs } from "./songs";

export const albums: Album[] = [
  {
    _id: "album_01",
    title: "Urban Nights",
    artist: "Various Artists",
    imageUrl:
      "https://res.cloudinary.com/dftslwu7s/image/upload/v1738536586/7_gmig3p.jpg",
    releaseYear: 2024,
    songs: songs.filter((song) => song.albumId === "album_01"),
  },
  {
    _id: "album_02",
    title: "Coastal Dreaming",
    artist: "Various Artists",
    imageUrl:
      "https://res.cloudinary.com/dftslwu7s/image/upload/v1738536589/17_xprap1.jpg",
    releaseYear: 2024,
    songs: songs.filter((song) => song.albumId === "album_02"),
  },
  {
    _id: "album_03",
    title: "Midnight Sessions",
    artist: "Various Artists",
    imageUrl:
      "https://res.cloudinary.com/dftslwu7s/image/upload/v1738528631/1_aomnew.jpg",
    releaseYear: 2024,
    songs: songs.filter((song) => song.albumId === "album_03"),
  },
  {
    _id: "album_04",
    title: "Eastern Dreams",
    artist: "Various Artists",
    imageUrl:
      "https://res.cloudinary.com/dftslwu7s/image/upload/v1738536580/15_rr11fp.jpg",
    releaseYear: 2024,
    songs: songs.filter((song) => song.albumId === "album_04"),
  },
];
