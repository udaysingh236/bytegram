interface IFormError {
  children: React.ReactNode;
}

function FormError({ children }: IFormError) {
  return (
    <p className=" p-1 text-sm text-red-500" role="alert">
      {children}
    </p>
  );
}

export default FormError;
