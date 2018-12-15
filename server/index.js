import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectToDb from './database/connect';
import config from './config/env';
import post from './routes/post.route';

const ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const PORT = process.env.PORT || config[ENV].serverPort;

connectToDb(ENV);

const app = express();
app.use(cors());
// app.set('env', ENV);
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(':method   :url    :status'));

// Routes
app.use('/post', post);

// Index route
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log('Server started on port ', PORT);
});
