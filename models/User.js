const { Schema, model } = require('mongoose');
const moment = require("moment");

// const assignmentSchema = require('./Thought');

// Schema to create user model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/]    
    },
    
    thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
      }
  ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  ]
},
  {
      toJSON: {
          virtuals: true
      },
      id: false
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create  User model using  UserSchema
const User = model('User', UserSchema);

// export  User model
module.exports = User;