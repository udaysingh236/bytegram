import { Path, UseFormRegister } from 'react-hook-form';
import { validateEmail } from '../utils/validators';
import { IUserLoginForm } from '../types';
interface IEmailInput {
  name: Path<IUserLoginForm>;
  register: UseFormRegister<IUserLoginForm>;
  placeholder: string;
}

function EmailInput({ name, register, placeholder }: IEmailInput) {
  return (
    <input
      className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
      type="email"
      placeholder={placeholder}
      {...register(name, {
        required: 'Email address is required',
        validate: (value) => validateEmail(value) || 'Please use correct email format',
      })}
    />
  );
}

export default EmailInput;
