import { IUserSignUpForm } from '../types';
import supabase from './supabase';

export async function signUpUser({ userName, userPass, userEmail }: IUserSignUpForm) {
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPass,
    options: {
      data: {
        name: userName,
        displayName: userName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
