export interface IRegisterUserAction {
  fullname: string;
  email: string;
  password: string;
}

export interface ILoginUserAction {
  email: string;
  password: string;
}
