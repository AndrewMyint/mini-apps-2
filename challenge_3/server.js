const express = require('express');

const PORT = 3000;
const app = express();

app.use('/', express.static('public'));


// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
