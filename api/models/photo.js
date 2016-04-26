
// photo.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema.
var photoSchema = new Schema({
  name: String,
  address: { 
    type: String, 
    required: true, 
    unique: true 
  },
  rating: {
    type: Number,
    max: 5,
    min: 0
  },
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
var photo = mongoose.model('photo', photoSchema);

// Make this available to our Node applications.
module.exports = photo;


photoSchema.pre('save', function(next) {
    // Get the current date.
    var currentDate = new Date();

    // Change the updated_at field to current date.
    this.updated_at = currentDate;

    // If created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }

    // Continue.
    next();
});

// the schema is useless so far
// we need to create a model using it.
var photo = mongoose.model('photo', photoSchema);

// make this available to our users in our Node applications.
module.exports = photo;

// coffeeShopSchema.methods.summary = function() {
//     // Construct and return summary.
//     var summary = this.name + "\n" + this.address + "\nRating: " + this.rating; 
//     return summary;
// };

