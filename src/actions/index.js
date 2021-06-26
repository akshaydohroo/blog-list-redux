import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const users = new Set();
  getState().posts.forEach((post) => {
    users.add(post.userId);
  });
  users.forEach((user) => dispatch(fetchUser(user)));
};
export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

// // function that takes a function and returns a function
// const memoize = (func) => {
//   // a cache of results
//   const results = {};
//   // return a function for the cache of results
//   return (...args) => {
//     // a JSON key to save the results cache
//     const argsKey = JSON.stringify(args);
//     // execute `func` only if there is no cached value of clumsysquare()
//     if (!results[argsKey]) {
//       // store the return value of clumsysquare()
//       results[argsKey] = func(...args);
//     }
//     // return the cached results
//     return results[argsKey];
//   };
// };

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = memoize(async function (id, dispatch) {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data,
//   });
// });
