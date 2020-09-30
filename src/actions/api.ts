import api from "api";
import { Dispatch } from "redux";
import { GET_USER_INFO } from "constants/index";

export const getItems = (endpoint: string, typeRedux: string, params?: any) => {
  return (dispatch: Dispatch) => {
    return api.get(endpoint, { params })
      .then((res) => {
        dispatch({
          type: typeRedux,
          payload: res.data,
        })
        return res.data;
      })
  }
}

export const getItemById = (endpoint: string, id: string, typeRedux: string, params?: any) => {
  return (dispatch: Dispatch) => {
    return api.get(`${endpoint}/${id}`, { params })
      .then((res) => {
        dispatch({
          type: typeRedux,
          payload: res.data,
        });
        return res.data;
      })
  }
}

export const createItem = (endpoint: string, typeRedux: string, data: any, params?: any) => {
  return (dispatch: Dispatch) => {
    return api.post(endpoint, data, { params })
      .then((res) => {
        dispatch({
          type: typeRedux,
          payload: res.data,
        })
        return res.data;
      })
  }
}

export const updateItem = (endpoint: string, id: string, typeRedux: string, data: any, params?: any) => {
  return (dispatch: Dispatch) => {
    return api.patch(`${endpoint}/${id}`, data, { params })
      .then((res) => {
        dispatch({
          type: typeRedux,
          payload: res.data,
        })
        return res.data;
      })
  }
}

export const login = (values: any, callbackForSuccess?: any, callbackForFail?: any) => {
  return (dispatch: Dispatch) => {
    return api.post('/auth/login', values)
      .then((res) => {
        dispatch({
          type: GET_USER_INFO,
          payload: res.data.payload,
        })

        //call the callback in here
        if (callbackForSuccess) callbackForSuccess(res.data);
      })
      .catch((err) => {
        if (callbackForFail) callbackForFail();
      })
  }
}

export const verifyToken = (token: string, callbackForSuccess?: any, callbackForFail?: any) => {
  return (dispatch: Dispatch) => {
    return api.post(`/auth/verify?token=${token}`, {})
      .then((res) => {
        dispatch({
          type: GET_USER_INFO,
          payload: res.data.payload,
        })

        //call the callback in here
        if (callbackForSuccess) callbackForSuccess(res.data);
      })
      .catch((err) => {
        if (callbackForFail) callbackForFail();
      })
  }
}