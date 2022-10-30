const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = function (callback) {
//   request("https://api.ipify.org?format=json", (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(
//         Error(`Status Code ${response.statusCode} when fetching IP: ${body}`),
//         null
//       );
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

const fetchCoordsByIP = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsed = JSON.parse(body);
    if (!parsed.success) {
      const message = `Success status is ${parsed.success}. server says ${parsed.message} when retrieving IP ${parsed.ip}`;
      callback(error(message), null);
      return;
    }
    const { latitude, longitude } = parsed;
    callback(null, { latitude, longitude });
  });
};

//module.exports = { fetchMyIP };
//module.exports = { fetchCoordsByIP };
