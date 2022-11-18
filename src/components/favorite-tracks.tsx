import { Component } from 'react';

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

import { Tracks } from '../data/tracks';

interface ArtistProp {
  tracks: Array<Tracks>;
}

export class FavoriteTracks extends Component<ArtistProp, {}> {
  
  constructor(props: ArtistProp) {
    super(props);
  }

  render() {
    return (
      <div>
        <>
          <ListGroup key={"artistsList"} horizontal={"artistsList"} className="artists-list">
              {this.props.tracks.map((track: Tracks) => (
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    <img 
                      src={track.coverUrl} 
                      alt="new"
                      />
                    <div>
                      {track.name} 
                    </div>
                  </div>
                  <div>
                    {track.artist}
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </>
      </div>
  )};
}