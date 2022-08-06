const {User, Thought, Reaction } = require('../models');

const thoughtController = {



// get api thoughts
    getAllThoughts(req, res) {
        thoughtController.find({})
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(500).json(err))
    }
},

// get api thought by id

getThoughtById({ params }, res) => {
    Thought.findOne({ _id: params.id })
    .populate({ path: 'reactions', select: '-__v' })
    .select('-__v')
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: 'No available thought found with this id'});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},


