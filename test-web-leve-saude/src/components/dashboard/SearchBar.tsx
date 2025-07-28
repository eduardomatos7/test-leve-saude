import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = "Buscar por nome ou comentário...",
}: SearchBarProps) {
  return (
    <div className="relative mb-4 w-full max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MdSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 bg-white p-2 pl-10 text-sm text-gray-900 focus:ring-1 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
