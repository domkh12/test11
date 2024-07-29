import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa"; 

const SearchDashboardTemplate = () => {
  return (
    <>
    {/* <div>SearchDashboardTemplate</div> */}
    <div className=" flex items-center bg-gray-100 border border-gray-300 rounded-lg px-3 py-0 max-w-[270px]">
      <FaSearch className="text-gray-400 mr-1" />
      <input 
        type="text"
        placeholder="Search Templates"
        className=" bg-transparent text-gray-700 w-full border-none px-2 py-1 focus:outline-[rgb(76,61,227)] focus:outline-0 focus:ring-0 focus:ring-[rgb(76,61,227)] focus:ring-offset-0 focus:rounded-md"
      />
    </div>

    </>
  )
}

export default SearchDashboardTemplate