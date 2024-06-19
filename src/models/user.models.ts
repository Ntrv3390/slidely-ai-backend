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
  github_link: {
    type: String,
    required: true,
  },
  stopwatch_time: {
    type: String,
    required: true,
  },
};

export {
    UserModel
}
