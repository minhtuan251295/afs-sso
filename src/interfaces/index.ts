export interface IAPIMethods {
  getItems: (endpoint: string, typeRedux: string, params?: any) => Promise<any>,
  createItem: (endpoint: string, typeRedux: string, data: any, params?: any) => Promise<any>,
  login: (values: any, callbackForSuccess?: any, callbackForFail?: any) => Promise<any>,
  verifyToken: (token: string, callbackForSuccess?: any, callbackForFail?: any) => Promise<any>,
}

export interface IAction {
  type: string,
  payload?: any
}