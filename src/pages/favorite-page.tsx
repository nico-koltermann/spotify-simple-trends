import React from 'react';

import { FavoriteArtists }  from '../components/favorite-artists';
import { FavoriteTracks }  from '../components/favorite-tracks';

import '../css/pages.css';
import { Artists } from '../data/artists';
import { Tracks } from '../data/tracks';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

interface FavesProps {
  artists: Array<Artists>;
  tracks: Array<Tracks>;
}

export class FavoritePage extends React.Component<FavesProps, {}> {

  state = {
    isMobile: false,
    activeTab: 0,
  };

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 800 });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  renderArtists = (artists: Artists[]) => {
    return (
      <FavoriteArtists artists={this.props.artists} />
    );
  };

  renderTracks = (artists: Tracks[]) => {
    return (
      <FavoriteTracks tracks={this.props.tracks} />
    );
  };

  renderTabs = () => {
    return (
      <Tab.Container
        activeKey={this.state.activeTab.toString()}
        onSelect={(key: any) => this.setState({ activeTab: parseInt(key) })}
      >
        <Nav variant="tabs">
          {['Show Artists', 'Show Tracks'].map((name, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={index.toString()}>{name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {[0, 1].map((list, index) => (
            <Tab.Pane key={index} eventKey={index.toString()}>
              { index===0 && this.renderArtists(this.props.artists) }
              { index===1 && this.renderTracks(this.props.tracks) }
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    );
  };


  render() {
    const { isMobile, activeTab } = this.state;

    return (
      <>

        {isMobile ? (
          <div className='fav-page-layout mobile-tabs'>
            {this.renderTabs()}
          </div>
        ) : (
          <div className='fav-page-layout'>
            <>
            <div className='half-page'>
              {this.renderArtists(this.props.artists)}
            </div>
            <div className='half-page'>
              {this.renderTracks(this.props.tracks)}
          </div>
            </>
          </div>
        )}
      </>
  )}
}