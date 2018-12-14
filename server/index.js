import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDb from './database/connect';
import morgan from 'morgan';
import config from './config';
import { loggers } from 'winston';
import post from './routes/post.route';

const ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const PORT = process.env.PORT || config[ENV].serverPort;

connectToDb(ENV);

const app = express();
app.use(cors());
// app.set('env', ENV);
app.use(bodyParser.urlencoded({extended: true}));  // may need it later
// app.use(morgan('dev', {'stream': loggers.stream}));

// Routes
app.use('/post', post);

// Index route
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log('Server started on port ', PORT);
});
