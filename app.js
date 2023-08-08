const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
