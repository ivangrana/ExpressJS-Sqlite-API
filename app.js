const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
