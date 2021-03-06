const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const PersonnalityQuest = require('./models/PersonnalityQuest');
const Activity = require('./models/Activity');
const ActivitiesHistory = require('./models/ActivitiesHistory');
//const req = require('express/lib/request');

//Connection to the mongodb database
mongoose.connect('mongodb://localhost/moodivity');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ROUTES

app.post('/signup', (req, res, next) => {
  // Création du nouvel utilisateur
  const newUser = new User({
    name: req.body.name,
    birthdate: req.body.birthdate,
    city: req.body.city,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  newUser.save(err => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'Adresse email déjà utilisée'
      })
    }
    return res.status(200).json({
      title: 'signup success'
    })
  })
})


app.post('/login', (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    })
    if (!user) {
      return res.status(401).json({
        title: 'user not found',
        error: 'invalid credentials'
      })
    }
    //incorrect password
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        tite: 'login failed',
        error: 'invalid credentials'
      })
    }
    //IF ALL IS GOOD create a token and send to frontend
    let token = jwt.sign({ userId: user._id, userE: user.email}, 'secretkey');
    return res.status(200).json({
      title: 'login sucess',
      token: token
    })
  })
})

app.post('/createpersonnalityquest', (req, res, next) => {
  //Création du nouveau questionnaire de personnalité
  const newPersonnalityQuest = new PersonnalityQuest({
    emailUser: req.body.emailUser,
    personnality: req.body.personnality,
    outings: req.body.outings,
    hobbies: req.body.hobbies,
    interests: req.body.interests,
    sport: req.body.sport,
    cinemaseries: req.body.cinemaseries,
    books: req.body.books,
    museum: req.body.museum,
    activityplace: req.body.activityplace,
    activitypeople: req.body.activitypeople,
    cooking: req.body.cooking,
    handicrafts: req.body.handicrafts,
  })
  newPersonnalityQuest.save(err => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'Erreur'
      })
    }
    return res.status(200).json({
      title: 'success',
      success: 'Questionnaire de personnalité créé !'
    })
  })
})

app.post('/createactivitieshistory', (req, res, next) => {
  //Création du nouveau questionnaire de personnalité
  const newActivitiesHistory = new ActivitiesHistory({
    email: req.body.email,
    type: req.body.type,
    peopleNumber: req.body.peopleNumber,
    city: req.body.city,
    mood: req.body.mood,
    place: req.body.place,
    description: req.body.description,
    nameActivity: req.body.nameActivity,
    image: req.body.image,
  })
  newActivitiesHistory.save(err => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'Erreur'
      })
    }
    return res.status(200).json({
      title: 'success',
      success: 'Historisation de l\'activité effectuée !'
    })
  })
})

// Update profile : user informations
app.put('/updateuserinformations', (req, res, next) => {
  var myquery = { email: req.body.email }
  //console.log(myquery)
  var newvalues = { $set: {
    name: req.body.name,
    birthdate: req.body.birthdate,
    city: req.body.city } 
  }
  User.updateOne(myquery, newvalues, (err) => {
    if (err) {
      return res.json({
        title: 'errorUser',
        errorUser: 'Erreur'
      })
    }
    return res.json({
      title: 'successUser',
      successUser: 'Modifications de vos informations effectuée !'
    })
  })
})

// Update profile : personnality quest
app.put('/updatepersonnalityquest', (req, res, next) => {
  var myquery = { emailUser: req.body.emailUser }
  //console.log(myquery)
  var newvalues = { $set: {
    personnality: req.body.personnality,
    outings: req.body.outings,
    hobbies: req.body.hobbies,
    interests: req.body.interests,
    sport: req.body.sport,
    cinemaseries: req.body.cinemaseries,
    books: req.body.books,
    museum: req.body.museum,
    activityplace: req.body.activityplace,
    activitypeople: req.body.activitypeople,
    cooking: req.body.cooking,
    handicrafts: req.body.handicrafts } 
  }
  PersonnalityQuest.updateOne(myquery, newvalues, (err) => {
    if (err) {
      return res.json({
        title: 'errorPQ',
        errorPQ: 'Erreur'
      })
      
    }
    return res.json({
      title: 'successPQ',
      successPQ: 'Questionnaire de personnalité enregistré !'
    })
  })
})

//grabbing user info
app.get('/user', (req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    //token is valid
    User.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) return console.log(err)
      return res.status(200).json({
        title: 'user grabbed',
        user: {
          email: user.email,
          name: user.name,
          city: user.city,
          birthdate: user.birthdate,
        }
      })
    })
  })
})


//grabbing user personnality quest
app.get('/personnalityquest', (req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })

    if(decoded.userE!=null)
    {
      //token is valid
      PersonnalityQuest.findOne({ emailUser : decoded.userE}, (err, personnalityquest) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'personnality quest grabbed',
          personnalityquest: {
            emailUser: personnalityquest.emailUser,
            personnality: personnalityquest.personnality,
            outings: personnalityquest.outings,
            hobbies: personnalityquest.hobbies,
            interests: personnalityquest.interests,
            sport: personnalityquest.sport,
            cinemaseries: personnalityquest.cinemaseries,
            books: personnalityquest.books,
            museum: personnalityquest.museum,
            activityplace: personnalityquest.activityplace,
            activitypeople: personnalityquest.activitypeople,
            cooking: personnalityquest.cooking,
            handicrafts: personnalityquest.handicrafts,
          }
        })
      })
    }
  })
})

//grabbing activities info
app.get('/activities', (req, res, next) => {
    //token is valid
    Activity.find((err, activities) => {
      //console.log(activities);
      if (err) return console.log(err)
      return res.status(200).json({
        activities
      })
    })
  })

//grabbing history activities info
app.get('/activitieshistory', (req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    //token is valid
    if(decoded.userE!=null)
    {
      ActivitiesHistory.find({ email: decoded.userE }, (err, activitieshistory) => {
        if (err) return console.log(err)
        return res.status(200).json({
          activitieshistory
        })
      })
    }
  })
})

//Port
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('server running on port ' + port);
})