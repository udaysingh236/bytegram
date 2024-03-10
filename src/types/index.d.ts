export interface IPost {
  id: numnber;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string;
  postDescription: string;
}

export interface IUserLoginForm {
  userEmail: string;
  userPass: string;
}

export interface IUserSignUpForm {
  userEmail: string;
  userPass: string;
  confirmUserPass: string;
  userName: string;
}
