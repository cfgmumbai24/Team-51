import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Branding */}
        <div className="text-lg font-bold">
          <Link to="/">Gram Urja</Link>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/attendance" className="hover:text-gray-300">Attendance</Link>
          <Link to="/report" className="hover:text-gray-300">Report</Link>
        </nav>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shown when toggled) */}
      <div className="md:hidden">
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Home</Link>
          <Link to="/attendance" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Attendance</Link>
          <Link to="/report" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Report</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
