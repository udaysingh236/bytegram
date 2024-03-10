import { useForm } from 'react-hook-form';
import { IUserLoginForm } from '../../types';
import EmailInput from '../../ui/EmailInput';
import FormError from '../../ui/FormError';
import PassInput from '../../ui/PassInput';
import Button from '../../ui/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { routeNames } from '../../utils/routeNames';

function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginForm>();
  const onSubmit = (data: IUserLoginForm) => console.log(data);

  return (
    <div className="bg-wave-white-pattern mx-auto flex h-dvh max-w-md flex-col items-center justify-center gap-9 bg-no-repeat p-4">
      <div>
        <h1 className="font-pacifico text-5xl">bytegram</h1>
      </div>
      <div className="space-y-10 divide-y divide-stone-400 rounded-xl  px-4 py-6 shadow-md">
        <form className="flex  flex-col items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <EmailInput name="userEmail" register={register} placeholder="Your registered email" />
            {errors.userEmail && <FormError>{errors.userEmail.message}</FormError>}
          </div>
          <div>
            <PassInput name="userPass" register={register} placeholder="Your password" />
            {errors.userPass && <FormError>{errors.userPass.message}</FormError>}
          </div>
          <div className=" self-end text-xs font-medium">
            {/* On click todo */}
            <button
              type="button"
              className="text-stone-700 transition-all duration-300 hover:cursor-pointer hover:text-stone-950"
            >
              Forgot Password ?
            </button>
          </div>
          <div className="w-full">
            <Button variation="primary" isSubmit={true}>
              Login
            </Button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-between gap-3">
          <p className="mt-6 text-lg font-light">Or Sign Up Using</p>
          <div className="flex items-center justify-center gap-8">
            <div className=" rounded-full border-2 border-orange-700 p-1">
              <FcGoogle size="38px" />
            </div>
            <div className=" rounded-full border-2 border-orange-700 p-1">
              <FaGithub size="38px" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          Don&apos;t have an account ?{' '}
          <Link
            to={routeNames.createAccount}
            className="text-lg font-medium transition-all duration-300 hover:cursor-pointer hover:text-stone-700 "
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
