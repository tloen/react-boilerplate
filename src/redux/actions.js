const fetching = () => ({
  type: "FETCHING"
});

const fetched = data => ({
  type: "FETCHED",
  data
});

const fetchError = err => ({
  type: "FETCH_ERROR",
  err
});

// use redux-thunk to dispatch a JSON API request
export const fetchData = function(url) {
  return (dispatch, getState) => {
    dispatch(fetching());
    const requestOptions = {
      method: "GET",
      mode: "cors"
    };
    fetch(url, requestOptions)
      .then(
        res => {
          return res.json();
        },
        err => {
          dispatch(fetchError(err));
        }
      )
      .then(responseJson => {
        dispatch(fetched(responseJson));
      });
  };
};
