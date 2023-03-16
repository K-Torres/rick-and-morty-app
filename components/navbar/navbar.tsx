import Image from 'next/image'
import logo from 'assets/images/rick-and-morty-logo.png'
import FilterCriteria from './filter-criteria/filter-criteria'
import filterReducer from "redux/slices/filtersSlice"


const NavBar = () => {

  return (
    <nav className="h-16 bg-gray-900 flex justify-around justify-items-center py-2">
      <Image src={logo} alt="logo" className='object-cover p-20' width={160} />
      <label className="relative flex w-3/5">
        <span className="sr-only">Search</span>
        <div className='relative'>
          <button className='bg-neutral-400 px-2 font-thin rounded-l-md h-full'>Filters</button>
          <FilterCriteria></FilterCriteria>
        </div>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-r-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a character..." type="text" name="search" />
      </label>
      <button className='text-white font-bold'>Filter By</button>
    </nav>
  )
}

export default NavBar
