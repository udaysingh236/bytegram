import { Path, UseFormRegister } from 'react-hook-form';
import { checkPassword } from '../utils/validators';
import { IUserLoginForm } from '../types';

interface IPassInput {
  name: Path<IUserLoginForm>;
  register: UseFormRegister<IUserLoginForm>;
  placeholder: string;
}

function PassInput({ name, register, placeholder }: IPassInput) {
  return (
    <input
      className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
      type="password"
      placeholder={placeholder}
      {...register(name, {
        required: 'Password is required',
        validate: (value) =>
          checkPassword(value) ||
          'Password should be of minimum 11 character with atleast one special char and atleast one upper and one lower case char',
      })}
    />
  );
}

export default PassInput;
