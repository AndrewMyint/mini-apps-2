const axios = require('axios');

const searchBitCoinPrice = (url, cb) => {
  axios.get(url)
    .then((response) => {
      // handle success
      cb(null, response);
    })
    .catch((error) => {
      // handle error
      cb(error, null);
    })
    .finally(() => {
      // always executed
      // eslint-disable-next-line no-console
      console.log('api call finished');
    });
};

module.exports = { searchBitCoinPrice };
