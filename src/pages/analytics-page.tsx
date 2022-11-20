import React from 'react';

import { Artists } from '../data/artists';
import { Tracks } from '../data/tracks';

import '../css/pages.css';

interface FavesProps {
  artists: Array<Artists>;
  tracks: Array<Tracks>;
}

export class AnalyticsPage extends React.Component<FavesProps, {}> {

  render() {
    return (
      <div className=''>
        Analytics
      </div>
  )}
}