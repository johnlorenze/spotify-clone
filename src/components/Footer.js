import React from 'react';
import '../styles/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from './DataLayer';

function Footer() {
    const [{ playing, discover_weekly }] = useDataLayerValue();

    return (
        <div className="footer">
            <div className="footer__left">
                {/* <h4>{discover_weekly?.tracks.items.track.name}</h4> */}
                <img
                    className="footer__albumLogo"
                    src={playing.album === undefined ?
                        (discover_weekly?.tracks.items[0].track.album.images[0].url) :
                        (playing.album?.images[0].url)}
                    alt=""
                />
                <div className="footer__songInfo">
                    {/* <h4>{discover_weekly?.tracks.items.track.name}</h4> */}
                    <h4>{playing.name === undefined ?
                        (discover_weekly?.tracks.items[0].track.name) :
                        (playing.name)}</h4>
                    <p>{playing.artists === undefined ?
                        (discover_weekly?.tracks.items[0].track.artists[0].name) :
                        (playing.artists[0].name)}</p>
                </div>

            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <PlaylistPlayIcon />
                <VolumeDownIcon />
                <Slider />
                {/* <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid> */}
            </div>
        </div>
    )
}

export default Footer
