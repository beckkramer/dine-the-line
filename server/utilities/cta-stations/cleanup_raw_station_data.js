
const cleanStations = [];
const cleanStationNames = [];
const newFormat = {
  accessible: false,
  name : '',
  lines : {
    active: [],
    all: {
      blue : false,
      brown : false,
      green : false,
      orange : false,
      pink : false,
      purple : false,
      red : false,
      yellow : false,
    }
  },
  location : '0,0',
  stop_id: 0,
  map_id: 0,
};

fetch('./raw_station_data.json').then(response => {

  response.json().then(result => {

    result.forEach(station => {

      // Check if this station's descriptive name is already in cleanStation array
      // to prevent both directions of travel from being added.
      if (!cleanStationNames.includes(station.station_descriptive_name)) {

        let thisStation = {
          accessible: station.ada,
          name : station.station_name,
          lines : {
            all: {
              blue : station.blue,
              brown : station.brn,
              green : station.g,
              orange : station.o,
              pink : station.pnk,
              purple : station.p,
              red : station.red,
              yellow : station.y,
            },
            active: []
          }, 
          location : station.location.coordinates.reverse().join(','),
          stop_id: station.stop_id,
          map_id: station.map_id,
        };

        let formattedLines = [];

        Object.entries(thisStation.lines.all).forEach(line => {
          if(line[1] === true) {
            thisStation.lines.active.push(line[0]);
          }
        });

        cleanStationNames.push(station.station_descriptive_name);
        cleanStations.push(thisStation);
      }

    });

    document.getElementById('main').innerHTML = JSON.stringify(cleanStations);
  }).catch(error => console.log(error));
}).catch(error => console.log(error));
