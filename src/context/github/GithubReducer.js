const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "GET_USER_AND_REPOS":
      return {
        user: action.payload.user,
        repos: action.payload.repos,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
