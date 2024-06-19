// model just for reference, not required.

const UserModel = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  stopwatch: {
    type: String,
    required: true,
  },
};

export {
    UserModel
}
