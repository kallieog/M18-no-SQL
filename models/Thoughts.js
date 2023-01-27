const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
reactionsSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
