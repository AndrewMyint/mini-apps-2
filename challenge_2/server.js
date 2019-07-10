/* eslint-disable no-unused-vars */
const express = require('express');
const apiCall = require('./lib/bitCoinApi.js').searchBitCoinPrice;

const URL = 'https://api.coindesk.com/v1/bpi/historical/BTC.json';
const app = express();
const PORT = 3000;

app.use('/', express.static('public'));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/bpi', (req, res) => {
  apiCall(URL, (error, response) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } else {
      // eslint-disable-next-line no-console
      // res.send(response.data);
      const tempObject = {};
      tempObject.date = Object.keys(response.data.bpi);
      tempObject.price = Object.values(response.data.bpi);
      res.send(tempObject);
    }
  });
});
