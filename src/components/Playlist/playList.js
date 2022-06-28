import React from 'react';
import TrackList from '../trackList/trackList';
import './playList.css';

class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} />
                <TrackList tracks={this.props.playlistTracks} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    };
}

export default PlayList;