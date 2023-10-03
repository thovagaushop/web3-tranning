import express from 'express';
import envConstant from './constants/env.constant.js';
import routes from './routes/index.js';

// PORT
const PORT = envConstant.PORT || 3000;
// Create server
const app = express();

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('<a href="/api/docs">Click here</a>');
});

// Server run
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
