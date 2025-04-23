import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full px-5 py-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden gap-x-5">
          {navLists.map((nav) => (
            <div key={nav} className="text-sm cursor-pointer text-gray-300 hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-x-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar