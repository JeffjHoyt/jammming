import React from 'react';
import './searchResults.css';
import TrackList from '../trackList/trackList';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {
        this.setState({ this.props.onSearch })
    }

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList 
                    onAdd={this.props.onAdd} 
                    tracks={this.props.searchResults} 
                    isRemoval={false}
                    />
            </div>
        )
    }
};

export default SearchResults;