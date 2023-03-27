export interface IUseDog {
  getDogSay: () => string
  getHobby: (h?: string) => string
  requestUrl: string
}

export interface IUseCat {
  getCatSay: () => string
  getHobby: (h?: string) => string
  requestUrl: any
}
