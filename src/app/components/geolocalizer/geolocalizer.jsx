/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

export default class Geolocalizer extends React.Component {

  constructor( props ) {
    super( props );
  }

  static defaultProps = {
    setCoords: () => true,
    setLoading: () => true
  };

  static propTypes = {
    setCoords: React.PropTypes.func,
    setLoading: React.PropTypes.func
  };

  geolocalizeMe = () => {
    let success = ( position )  => {
      this.props.setCoords( { latitude: position.coords.latitude, longitude: position.coords.longitude } );
      console.log('get coords html 5 api is success');
    };
    let error = ( err ) => {
      throw 'sorry you have and error with ' + err;
    };
    if ( navigator.geolocation ) {
      this.props.setLoading(true);
      navigator.geolocation.getCurrentPosition( success, error );
    } else {
      throw 'geolocalization is not supported by browser';
    }
  };

  render() {
    return (
      <button type='button' className='ktg-geolocalizer' onClick={this.geolocalizeMe}>
      </button>
    );
  }

}
