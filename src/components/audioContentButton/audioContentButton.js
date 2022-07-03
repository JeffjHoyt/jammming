import React from 'react'
import './audioContentButton.css';
import AudioContent from '../audioContent/audioContent';

class AudioContentButton extends React.Component {

    render() {
        return(                      
            <div>
                <AudioContent 
                    activeElement={this.props.activeElement}
                    preview={this.props.preview}
                    toggleIndex={this.props.toggleIndex}
                    index={this.props.index}
                    id={this.props.index}
                />          
            </div>
        )
    }
}

export default AudioContentButton;