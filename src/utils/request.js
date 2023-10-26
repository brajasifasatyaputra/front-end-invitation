/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default (options, _requestOptions = {}) => {
  return axios(options);
};
