// User Log In
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config/env';
import User from '../models/user';

const jwtSecret = config(process.env.NODE_ENV).jwtSecret;

const AuthController = {
  // User log in
  acquireOneByEmail: (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .exec()
    .then(result => {
      if (!result) {
        res.status(404).send({
          message: 'Authentication failed. Can not find user.'
        });
      } else {
        const isMatch = bcrypt.compareSync(password, result.password)
        if (!isMatch) {
          return res.status(401).send('Authentication failed. Incorrect password.');
        } else {
          const token = jwt.sign(
            {id: result._id},
            jwtSecret,
            {expiresIn: '2h'}
          );
          res.status(200).send(token);
        }
      }
    })
    .catch(err => {
      res.status(500).send({err});
    });
  },
  // Sign up
  addUser: (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(password, 10);

    User.findOne({email: email})
    .exec()
    .then(result => {
      if(!result) {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          firstName,
          lastName,
          email,
          password: hashedPassword,
          created: new Date(),
        });
        user.save()
        .then(result => {
          const token = jwt.sign(
            {id: result._id},
            jwtSecret,
            {expiresIn: '2h'}
          );
          res.status(201).send(token);
        });
      } else {
        res.status(409).send({
          message: 'Email address already exists.'
        });
      }
    })
    .catch(error => {
      res.status(500).send({error});
    });
  }
};

export default AuthController;