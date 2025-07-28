import { type Dispatch, type SetStateAction } from "react";
import { MdClose, MdFeedback, MdHome, MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import handleLogout from "../../services/auth";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      name: "Home",
      icon: <MdHome size={22} />,
      href: "/admin",
      current: location.pathname === "/admin",
    },
    {
      name: "Feedbacks",
      icon: <MdFeedback size={22} />,
      href: "/admin/feedbacks",
      current: location.pathname === "/admin/feedbacks",
    },
  ];

  return (
    <>
      {open && (
        <div
          className="bg-opacity-50 fixed inset-0 z-20 bg-black/70 transition-opacity md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-all duration-300 ease-in-out md:relative md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center justify-center">
            <img
              src="/images/logo_leve_saude.png"
              alt="Leve Saúde Logo"
              className="mr-2 h-10 md:h-12"
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:hidden"
          >
            <MdClose size={24} />
          </button>
        </div>

        <div className="py-4">
          <nav className="space-y-1 px-2">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  item.current ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          <button
            onClick={() => handleLogout(navigate)}
            className="text-logout flex items-center space-x-1 rounded-md p-2 hover:cursor-pointer hover:text-amber-800"
          >
            <MdLogout size={20} />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </div>
    </>
  );
}
