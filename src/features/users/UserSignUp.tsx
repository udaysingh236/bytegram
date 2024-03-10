import { useForm } from 'react-hook-form';
import { IUserSignUpForm } from '../../types';
import FormError from '../../ui/FormError';
import Button from '../../ui/Button';
import { checkPassword, validateEmail } from '../../utils/validators';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../utils/routeNames';
import toast from 'react-hot-toast';
import { useSignup } from './useSignUp';
import Loader from '../../ui/Loader';

function UserSignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IUserSignUpForm>();
  const navigate = useNavigate();
  const { signUp, isPending } = useSignup();

  const onSubmit = (data: IUserSignUpForm) => {
    signUp(data, {
      onSuccess() {
        toast.success(
          'Account creation sucessful, Please check your mail box for a verification mail from bytegram',
        );
        navigate(routeNames.login);
      },
      onError() {
        toast.error('Some error occured, Please try again');
        reset();
      },
    });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto flex h-dvh max-w-md flex-col items-center justify-center gap-6 p-4">
      <div>
        <h1 className="font-pacifico text-5xl">bytegram</h1>
      </div>
      <div>
        <div className="mt-4">
          <h1 className="text-lg font-medium">Only few things and you will be all set !😎</h1>
        </div>
        <div className=" space-y-1 text-center">
          <p className="text-sm ">You will receive a verfication link on your Email 🔎</p>
          <p className="text-sm">Verify your email and start using app 🚀</p>
        </div>
      </div>
      <div className="space-y-10 divide-y divide-stone-400 rounded-xl  px-4 py-6 shadow-md">
        <form className="flex  flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
              type="email"
              placeholder="Your Email"
              {...register('userEmail', {
                required: 'Email address is required',
                validate: (value) => validateEmail(value) || 'Please use correct email format',
              })}
            />
            {errors.userEmail && <FormError>{errors.userEmail.message}</FormError>}
          </div>
          <div>
            <input
              className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
              type="password"
              placeholder={'Your password'}
              {...register('userPass', {
                required: 'Password is required',
                validate: (value) =>
                  checkPassword(value) ||
                  'Password should be of minimum 11 character with atleast one special char and atleast one upper and one lowercase char',
              })}
            />
            {errors.userPass && <FormError>{errors.userPass.message}</FormError>}
          </div>
          <div>
            <input
              className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
              type="password"
              placeholder={'Confirm your password'}
              {...register('confirmUserPass', {
                required: 'Password is required',
                validate: (value) => {
                  return watch('userPass') === value || 'Passwords should match';
                },
              })}
            />
            {errors.confirmUserPass && <FormError>{errors.confirmUserPass.message}</FormError>}
          </div>
          <div>
            <input
              className=" w-full rounded-xl border-2 border-cyan-500 bg-stone-100 px-1 py-2 text-lg shadow-md focus:outline-none focus-visible:outline-none"
              type="text"
              placeholder={'Your name'}
              {...register('userName', {
                required: 'Name is required',
              })}
            />
            {errors.userName && <FormError>{errors.userName.message}</FormError>}
          </div>
          <div className="flex w-full items-center justify-between gap-5">
            <Button variation="primary" isSubmit={true}>
              Sign Up
            </Button>
            <Button
              variation="secondary"
              isSubmit={false}
              onClick={() => {
                navigate(routeNames.login);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSignUp;
