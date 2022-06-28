import React from 'react';
import './trackList.css';
import Track from '../track/track';


class TrackList extends React.Component {
    render() {

        let trackList;

        if (this.props.isRemoval) {    
            trackList = this.props.tracks.map(track => {
              return <Track 
              key={track.id} 
              track={track}              
              onRemove={this.props.onRemove} 
              isRemoval={this.props.isRemoval} /> 
            })
    
        } else {
            trackList = this.props.tracks.map(track => {
                return <Track 
                key={track.id} 
                track={track}
                onAdd={this.props.onAdd}               
                isRemoval={this.props.isRemoval} /> 
            })  

        }
        return (
            <div className="TrackList">
                { trackList }
            </div>
        )
    }
}

export default TrackList;