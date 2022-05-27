export interface IStateAuth {
  access_token: string
  refresh_token: string
  isFetching : boolean
  isAuthorized: boolean
  error : null | string
}