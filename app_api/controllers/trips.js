const mongoose = require('mongoose');
const Trip = mongoose.model('trips');
const User = mongoose.model('users');

//GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Trip
        .find({}) //empty filter for all
        .exec((err, trips) => {
            if(!trips){
                return res
                    .status(404)
                    .json({ "message": "trip not found"});
            } else if (err) {
                return res  
                    .status(404)
                    .json(err)
            } else {
                return res  
                    .status(200)
                    .json(trips)
            }
        });
};

//GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    console.log('tripsFindCode invoked with ' + req.params.tripCode);
    Trip
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found"});
            } else if (err){
                return res  
                    .status(404)
                    .json(err);
            } else {
                console.log('tripsFindCode returning:/n' + trip);
                return res
                .status(200)
                .json(trip);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    console.log('tripsAddTrip invoked with:\n' + req.body);
    getUser(req,res,
        (req, res) => {
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            lenght: req.body.lenght,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) =>{
            if(err){
                return res
                    .status(400) //bad request, invalid content
                    .json(err);
            } else {
                return res
                    .status(201) // created
                    .json(trip);
            }
        });
    }
    )
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    getUser(req,res,
        (req, res) => {
    Trip
        .findOneAndUpdate({ 'code' : req.params.tripCode},{
            code: req.body.code,
            name: req.body.name,
            lenght: req.body.lenght,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if (!trip){
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code" + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId'){
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code" + req.params.tripCode
                    });
            }
            return res
                .status(500) //server error
                .json(err);
        });
    }
    )
    }

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User        
            .findOne({ email: req.payload.email})
            .exec((err, user) => {
                if (!User) {
                    return res
                        .status(404)
                        .json({"message": "User not found "});
                }else if (err) {
                    console.log(err);
                    return res  .status(404)
                    .json(err);
                }
                callback(req, res, user.name);
            });
    } else {
        return res 
            .status(404)
            .json({"message": "User not found" });

    }
    };

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};