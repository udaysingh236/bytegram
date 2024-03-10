import { HiBellAlert } from 'react-icons/hi2';

function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 px-4 py-4">
      <p className="font-pacifico text-2xl text-stone-800">bytegram</p>
      <HiBellAlert size="28px" color="rgb(41 37 36 / 1)" />
    </div>
  );
}

export default Header;
