type Song = {
  id: number;
  name: string;
  length: number;
  coverUrl: string;
  url: string;
}

type User = {
  id: string;
  name: string,
  age: number
  imageUrl: string
}

type Playlist = {
  owner: User;
  songs: Song[];
  votes: number
}

type AppState = {
  user: User
  listenedSongs: Song[];
  playlist: Playlist[];
  uploadedSongs: Song[]
}

export const initSongState = (): AppState => ({
 // code
});

