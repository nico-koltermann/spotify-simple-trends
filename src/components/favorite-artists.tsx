import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

// Data
import { Artists } from '../data/artists';

interface ArtistProp {
  artists: Array<Artists>;
}

export class FavoriteArtists extends React.Component<ArtistProp, {}> {
  
  constructor(props: ArtistProp) {
    super(props);
  }

  render() {
    return (
      <div>
        <>
          <ListGroup key={"artistsList"} horizontal={"artistsList"} className="artists-list">
              {this.props.artists.map((artist: Artists) => (
                <ListGroup.Item>{artist.name}</ListGroup.Item>
              ))}
          </ListGroup>
        </>
      </div>
  )};

}