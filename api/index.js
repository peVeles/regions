const express = require('express');
const cors = require('cors');
const regionsRouter = require('./routes/region.routes');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', regionsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});