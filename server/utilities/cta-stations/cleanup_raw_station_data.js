
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

const consolidateStations = (rawStationData) => {
  const stations = {};

  rawStationData.forEach(station => {
    if (!stations[station.station_descriptive_name]) {
      stations[station.station_descriptive_name] = {};
    }
  });

  return stations;
};

const createActiveLineArray = (stationLines) => {
  
  let activeLines = [];
  
  Object.entries(stationLines).forEach(line => {
    if(line[1] === true) {
      activeLines.push(line[0]);
    }
  });

  return activeLines;
}

formatStation = (rawStation) => {

  const combinedPurple = rawStation.p || rawStation.pexp;

  const thisStation = {
    accessible: rawStation.ada,
    name : rawStation.station_name,
    lines : {
      all: {
        blue : rawStation.blue,
        brown : rawStation.brn,
        green : rawStation.g,
        orange : rawStation.o,
        pink : rawStation.pnk,
        purple : combinedPurple,
        red : rawStation.red,
        yellow : rawStation.y,
      },
      active: []
    }, 
    location : rawStation.location.coordinates.reverse().join(','),
    stop_id: rawStation.stop_id,
    map_id: rawStation.map_id,
    station_descriptive_name: rawStation.station_descriptive_name
  };

  return thisStation;
}

// If any instance of a station has a specific line, set that line to true
// in the combined station line data.
const overrideLineValue = (stationLines, allStationLines) => {

  Object.keys(stationLines).forEach(line => {
    if (stationLines[line]) {
      allStationLines[line] = true;
    }
  });

  return allStationLines;
}

fetch('./raw_station_data.json').then(response => {

  response.json().then(result => {

    const consolidatedStations = consolidateStations(result);

    result.forEach((station, index, []) => {

      let thisStation = formatStation(station);

      if (station.station_descriptive_name === thisStation.station_descriptive_name) {

        // Check if consolidated stations has an entry for this station already
        if (!consolidatedStations[station.station_descriptive_name].station_descriptive_name) {
          consolidatedStations[station.station_descriptive_name] = thisStation;
        
          // If the entry exists, update any `true` line values for this station to combine inner/outer track values, etc.
        } else {
          const currentLineValues = consolidatedStations[station.station_descriptive_name].lines.all;
          consolidatedStations[station.station_descriptive_name].lines.all = overrideLineValue(thisStation.lines.all, currentLineValues);
        }
      }
    });

    Object.values(consolidatedStations).forEach(station => {
      station.lines.active = createActiveLineArray(station.lines.all);
      cleanStations.push(station);
    });

    document.getElementById('main').innerHTML = JSON.stringify(cleanStations);
  }).catch(error => console.log(error));
}).catch(error => console.log(error));
