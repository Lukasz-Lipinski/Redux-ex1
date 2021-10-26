const FETCH_POSTS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "posts/FETCH_POSTS_FAILED";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchSucceded = (data) => ({ type: FETCH_POSTS_SUCCEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });

export const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch(fetchSucceded(data.slice(0, 5))))
      .catch((error) => dispatch(fetchFailed()));
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_POSTS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        isError: false
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    default:
      return state;
  }
};
