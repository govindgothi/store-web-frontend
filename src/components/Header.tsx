import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-[#f7b439] text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          Organic
        </div>

        {/* Desktop Search */}
        <div className={`relative hidden md:block transition-all duration-300 ${showSearch ? "w-72" : "w-10"}`}>
          {showSearch ? (
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-3 rounded-lg outline-none border border-gray-300"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          ) : (
            <FaSearch
              className="text-xl cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}
        </div>

        {/* Icons and Login */}
        <div className="flex items-center gap-4">
          {/* Search Mobile */}
          <div className="md:hidden">
            <FaSearch
              className="text-xl cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          </div>

          <FaHeart className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />

          <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            <FaUser /> Login
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="px-4 pb-3 md:hidden bg-[#f7b439]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-3 rounded-lg outline-none border border-gray-300"
            autoFocus
            onBlur={() => setShowSearch(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
