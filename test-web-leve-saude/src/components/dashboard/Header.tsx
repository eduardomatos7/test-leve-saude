import { MdMenu } from "react-icons/md";

interface HeaderProps {
  onMenuButtonClick: () => void;
}

export default function Header({ onMenuButtonClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white shadow-sm">
      <div className="flex h-full items-center justify-between px-4">
        <button
          onClick={onMenuButtonClick}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
        >
          <MdMenu size={24} />
        </button>
      </div>
    </header>
  );
}
