import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../../services/apiUser';

export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpUser,
  });
  return { signUp, isPending };
}
