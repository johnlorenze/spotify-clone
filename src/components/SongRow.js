import React from 'react';
import '../styles/SongRow.css';
import { useDataLayerValue } from '../components/DataLayer';

function SongRow({ track }) {
    const [{ }, dispatch] = useDataLayerValue();
    const playSong = (singer) => {
        dispatch({
            type: "SET_SONG_PLAYING",
            playing: singer
        });
    }

    return (
        <div className="songRow" onClick={() => playSong(track)}>
            <img
                className="songRow__album"
                src={track.album.images[0].url}
                alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {/* {track.artists.map((artist) => artist.name).join(", ")}{track.album.name} */}
                    {`${track.artists.map((artist) => artist.name)}, ${track.album.name}`}
                </p>
            </div>
        </div>
    )
}

export default SongRow
