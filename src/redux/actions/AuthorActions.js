import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSucceas(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSucceas(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
