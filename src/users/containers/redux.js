export const FETCH_USERS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
export const FETCH_USERS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
export const FETCH_USERS_FAILED = "posts/FETCH_POSTS_FAILED";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false
};

export const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
export const fetchSucceded = (data) => ({ type: FETCH_USERS_SUCCEDED, payload: data });
export const fetchFailed = () => ({ type: FETCH_USERS_FAILED });

// export const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchRequested());
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => dispatch(fetchSucceded(data.slice(0, 5))))
//       .catch((error) => dispatch(fetchFailed()));
//   };
// };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
