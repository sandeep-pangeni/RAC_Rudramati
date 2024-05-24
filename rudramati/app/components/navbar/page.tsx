function navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.png" alt="Rudramati logo" />
          <span className="ml-3 text-xl"></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Introduction</a>
         
          <a className="mr-5 hover:text-gray-900">Members</a>
          <a className="mr-5 hover:text-gray-900">Donation</a>
        </nav>
       
      </div>
    </header>
  );
}

export default navbar;
