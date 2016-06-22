'use strict';
import { ReduceStore } from 'flux/utils';
import dispatcher from './Dispatcher';
import { dispatch } from './Dispatcher';

class StreamStore extends ReduceStore {
  
  /** Trying to init StreamMode throw getUserMedia()
    * TRUE means that SRC URL would be return later
    *
    * @return {boolean} TRUE if succesed
    */ 
  streamInit() {
    this.getUserMedia = initUserMedia();
    if (!this.getUserMedia) {
      return false;
    }
    return true;
  }

  getInitialState () {
    return {
      streamMode: this.streamInit()
    };
  }

  get actions() {
    return {
      'stream/on': streamOn.bind(this),
      'stream/off': streamOff.bind(this)
    }
  }

  reduce (state, action) {
    const fn = this.actions[action.type] || (state => state);
    return fn.call(this, state, action.data);
  }
}

const streamOn = function (state) {
  this.getUserMedia.call(navigator, {
      video: true,
      audio: false
    },
    (localMediaStream) => {
      this.getUserMediaStream = localMediaStream;
      dispatch({ type: 'set/video', data: window.URL.createObjectURL( localMediaStream ) });
    },
    (err) => {
      console.warn("The following error occured: " + err);
    }
  );
  state.streaming = true;
  return state;
}

const streamOff = function (state) {
  this.getUserMediaStream && this.getUserMediaStream.getVideoTracks().forEach(function (track) {
    track.stop();
  });
  state.streaming = false;
  return state;
}

const initUserMedia = function () {
  return navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
}

const instance = new StreamStore(dispatcher);
export default instance;
