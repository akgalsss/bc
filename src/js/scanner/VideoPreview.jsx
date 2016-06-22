'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default
class VideoPreview extends React.Component {
  render () {
    if (this.props.srcUrl) {
      return <div></div>;
    }

    return null;
  }

  componentDidMount() {
    initVideo.call(this, this.props.srcUrl);
  }

  componentWillUnmount() {
    clearInterval(this.videoInterval);
  }
}

function initVideo(srcUrl) {
  if (!this.canvas) {
    this.canvas = document.createElement("canvas");
    this.canvas.height = 200;
    this.video = document.createElement('video');
    ReactDOM.findDOMNode(this).appendChild(this.canvas);
  }
  let ctx = this.canvas.getContext("2d");
  this.video.src = srcUrl;
  if (srcUrl) {
    this.video.play();
    this.videoInterval = setInterval(
      () => ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height),
      20
    );
  } else {
    this.video.pause();
    clearInterval(this.videoInterval);
  }
  
}
