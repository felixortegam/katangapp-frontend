import React from 'react';

var BusStopResult = require('./bus-stop-result/bus-stop-result');

var Results = React.createClass ({
  render: function () {
    return (
      <articles>
        <header className="ktg-results__header">
          <h1 className="ktg-results__title">Results</h1>
        </header>
        <BusStopResult />
      </articles>
    );
  }
});

module.exports = Results;