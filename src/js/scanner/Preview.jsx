'use strict';
import React from 'react';
import VideoPreview from './VideoPreview';

const TYPE_VIDEO = 'video';
const TYPE_IMAGE = 'image';

export default
class Preview extends React.Component {
  render () {
    if (this.props.srcUrl) {
      switch (this.props.type) {
        case TYPE_IMAGE:
          return <img src={ this.props.srcUrl } width="100%" />;

        case TYPE_VIDEO:
          return <VideoPreview srcUrl={ this.props.srcUrl } />
      }
    }

    return null;
  }
}
