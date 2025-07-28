function Header() {
  return (
    <header className="shadow-3x1 flex h-16 items-center justify-between bg-white px-4 md:h-20 md:px-8">
      <div className="flex items-center gap-2">
        <img
          src="/images/logo_leve_saude.png"
          alt="Leve Saúde Logo"
          className="mr-2 h-10 md:h-12"
        />
      </div>
      <span className="text-secondary text-base font-bold tracking-wider md:text-lg">Admin</span>
    </header>
  );
}

export default Header;
