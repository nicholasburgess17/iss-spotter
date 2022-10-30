// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require('./iss')
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("154.5.165.100", (error, coordinates) => {
//   if (error) {
//     console.log("no bueno, try again!", error);
//     return;
//   }
//   console.log("nice! coordinates are:", coordinates);
// });

const exCoords = { latitude: '69.42069', longitude: '-173.99900' }; //im not 12 i swear

fetchISSFlyOverTimes(exCoords, (error, passTimes) => {
  if (error) {
    console.log('try again', error);
    return;
  }
  console.log("flyover times:", passTimes)
})