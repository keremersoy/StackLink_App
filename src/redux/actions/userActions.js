export default {
  login: (state, actions) => {
    state.token = actions.payload;
  },
};
