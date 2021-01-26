const express = require('express');
const cors = require('cors');
const regionsRouter = require('./regionsRoutes');
const regionsErrorHandler = require('./regionsErrorHandler');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', regionsRouter);
app.use(regionsErrorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});