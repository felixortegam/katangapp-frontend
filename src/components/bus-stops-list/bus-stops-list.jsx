import React from 'react';

var BusRoute = require('../bus-route/bus-route');

var BusStopsList = React.createClass ({
  render: function () {
    return (
      <article>
      <header className="ktg-bus-stops-list__header">
        <h2 className="ktg-bus-stops-list__title">Bus Stop</h2>
      </header>
        <table id="route-results">
          <thead>
            <tr>
              <th colSpan="2">
                Route Description
              </th>
            </tr>
          </thead>
          <tbody>
            <BusRoute />
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = BusStopsList;
