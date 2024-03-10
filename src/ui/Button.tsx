interface IButton {
  variation: string;
  isSubmit: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ variation, isSubmit, onClick, children }: IButton) {
  if (variation === 'primary') {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className="mt-3 w-full rounded-3xl bg-cyan-600 px-4 py-2 text-xl font-medium text-stone-50  hover:cursor-pointer hover:bg-cyan-800"
      >
        {children}
      </button>
    );
  }
  if (variation === 'secondary') {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className="mt-3 w-full rounded-3xl bg-orange-600 px-4 py-2 text-xl font-medium text-stone-50  hover:cursor-pointer hover:bg-orange-800"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
