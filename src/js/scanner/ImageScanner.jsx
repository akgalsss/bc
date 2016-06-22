'use strict';
import React from 'react';
import { dispatch } from '../flux/Dispatcher';

export default
class ImageScanner extends React.Component {
  constructor () {
    super();
    this.state = {
      imageUrl: ''
    }
  }

  onImageLoad (event) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      processFile( file, (imageURL) => dispatch({ type: 'set/image', data: imageURL }) );
    }
  }

  render () {
    return (
      <div>
        <input type='file' accept="image/*;capture=camera" onChange={ this.onImageLoad.bind(this) } />
      </div>
    )
  }
}

function processFile (file, callback) {
  const promise = new Promise( (resolve, reject) => {
    const url = processDirectly(file);
    reject();
    if (url) {
      resolve(url);
    } else {
      reject();
    }
  });
  promise
    .then(res => callback(res))
    .catch(() => processWithFileReader(file, callback));

}

const processDirectly = function (file) {
  try {
    const URL = window.URL || window.webkitURL;
    return URL.createObjectURL(file);
  } catch (e) {
    return false;
  }
}

const processWithFileReader = function (file, callback) {
  try {
    const promise = new Promise( (resolve, reject) => {
      try {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
          resolve( event.target.result );
        };
        fileReader.readAsDataURL(file);
      } catch (e) {
        reject();
      }
    });
    promise
      .then(res => callback(res))
      .catch(() => console.warn('Error: No way to read image'));
  } catch (e) {
    return false;
  }
}