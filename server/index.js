import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectToDb from './database/connect';
import config from './config/env';
import verifyToken from './utils/verify-token';
import auth from './routes/auth.route';
import post from './routes/post.route';

const ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const envConfig = config(ENV);
const {dbUrl, serverPort, bypassroutes, jwtSecret} = envConfig;

connectToDb(dbUrl);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));  // for content type 'application/x-www-form-urlencoded'
app.use(morgan(':method   :url    :status'));

app.use('/', verifyToken(bypassroutes, jwtSecret));

// Routes
app.use('/auth', auth);
app.use('/post', post);

// Index route
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(serverPort, () => {
  console.log('Server started on port ', serverPort);
});
