'use strict';
import { ReduceStore } from 'flux/utils';
import dispatcher from './Dispatcher';

const TYPE_VIDEO = 'video';
const TYPE_IMAGE = 'image';

class BarcodeStore extends ReduceStore {

  getInitialState () {
    return {
      srcUrl: null,
      type: null
    };
  }

  get actions() {
    return {
      'set/image'  : updateImage,
      'set/video'  : updateVideo,
      'stream/off' : reset
    }
  }

  reduce (state, action) {
    const fn = this.actions[action.type] || (state => state);
    return fn.call(this, state, action.data);
  }
}

function updateImage(state, data) {
  let res = {};
  res.srcUrl = data;
  res.type = TYPE_IMAGE;
  return res;
}

function updateVideo(state, data) {
  let res = {};
  res.srcUrl = data;
  res.type = TYPE_VIDEO;
  return res;
}

function reset(state, data) {
  let res = {
    srcUrl: null,
    type: null
  }
  return res;
}

const instance = new BarcodeStore(dispatcher);
export default instance;
