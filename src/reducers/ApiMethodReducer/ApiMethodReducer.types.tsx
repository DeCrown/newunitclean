export interface IStateApi {
  func: 'get' | 'post' | 'patch' | 'delete' | 'put';
  url: string;
  data?: any;
  auth?: boolean;
  success: (response: any) => void;
  error: (error: any) => void
}

export interface IStateApiMethod {
  queue : IStateApi[]
}