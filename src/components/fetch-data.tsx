import Button from 'react-bootstrap/Button';
import { GetTopTracks, GetTopArtists } from '../api/favorite-api'

const backendCall = () => {
  GetTopTracks(1, "long_term", 0);
  GetTopArtists(1, "long_term", 0);
}

function FetchData() {
  return (
    <div>
      <Button variant="primary" className="btn-primary" onClick={backendCall}>Primary</Button>{' '}
      <Button variant="outline-primary">Primary</Button>{' '}
    </div>
  );
}

export default FetchData;