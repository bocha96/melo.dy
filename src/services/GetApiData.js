import data from "../store/songs.json"

export default function getApiData (desiredValue) {
    const filteredSongs = data.songs.filter(
        (song)=> song.title.toLowerCase().includes(desiredValue.toLowerCase()) ||
        song.artist.toLowerCase().includes(desiredValue.toLowerCase())
        );
    
    return filteredSongs
}