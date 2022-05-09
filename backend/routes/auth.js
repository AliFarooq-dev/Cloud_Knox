const express = require('express');
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'aliis$boy';
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: CREATE A SIGNUP FOR NEW USER

router.post('/signup', [
   body('email', 'Please enter valid Email').isEmail(),
   body('name', 'Please enter valid name of 3 characters long').isLength({ min: 3, max: 15 }),
   body('password', 'Please enter valid password of 5 characters long').isLength({ min: 3, max: 20 })
], async (req, res) => {
   let success = false;
   let error = validationResult(req);
   if (!error.isEmpty()) {
      success = false;
      return res.status(400).json({ error: error.array() });
   }
   try {
      let User = await user.findOne({ email: req.body.email });
      if (User) {
         success = false;
         return res.status(300).json({ error: "A user with this email already exiist" });
      }
      let salt = await bcrypt.genSalt(6);
      let password = await bcrypt.hash(req.body.password, salt);
      success = true;
      // CREATE A USER
      User = await user.create({
         email: req.body.email,
         name: req.body.name,
         password: password
      });
      const data = {
         User: {
            id: User.id
         }
      }
      success = true;
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      return res.json({success, authToken });

   } catch (error) {
      return res.status(500).json({ error: "internal server error" })
   }
});

//ROUTE 2: lOGGIN A USER | ------------------------------------------------------------------------

router.post('/login', [
   body('email').isEmail(),
   body('password').exists()
],
   async (req, res) => {
      let success = false;
      const error = validationResult(req);
      if (!error.isEmpty()) {
         success = false;
         return res.status(400).json({ success, error: error.array() });
      }
      const { email, password } = req.body;
      try {
         let User = await user.findOne({ email });
         if (!User) {
            success = false;
            return res.status(401).json({ success, error: "email issue" });
         }
         const passwordCompare = await bcrypt.compare(password, User.password);
         if (!passwordCompare) {
            success = false;
            return res.status(401).json({ success, error: 'pass issue' });
         }
         let data = {
            User: {
               id: User.id
            }
         }
         const authToken = jwt.sign(data, JWT_SECRET);
         success = true;
         return res.json({ success, authToken });

      } catch (error) {
         return res.status(500).json({ error: "internal server error" });
      }
   });


//  ROUTE 3: MIDDLEWARE TO GET USER DETAILS |-------------------------------------------------------------

router.post('/getuser', fetchUser, async (req, res) => {

   try {
      let userID = req.User.id;
      const User = await user.findById(userID).select("-password")
      res.send(User);
   } catch (error) {
      return res.status(500).json({ error: "internal server error" });
   }
})

module.exports = router;


