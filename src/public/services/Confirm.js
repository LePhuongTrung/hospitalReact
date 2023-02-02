import { REGISTER_SUCCESS, SET_MESSAGE } from "./types";

import { Confirm } from "../services/Confirm.service";

export const confirm = (Link) => (dispatch) => {
  return Confirm(Link).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return response.text;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return message;
    }
  );
};
