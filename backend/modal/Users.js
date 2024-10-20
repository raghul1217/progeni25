

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose); // Using mongoose-sequence for auto-increment

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    department: { type: String, required: true }, 
    collegeName: { type: String, required: true }, 
    mobile: { type: String, required: true },
    customId: { type: String, unique: true }, 
    paymentStatus: { type: Boolean, default: false }
});

userSchema.plugin(autoIncrement, { inc_field: 'sequenceId', start_seq: 101 }); 

userSchema.pre('save', function(next) {
    this.customId = `progeni25${this.sequenceId}`;
    next();
});

module.exports = mongoose.model("User", userSchema);

