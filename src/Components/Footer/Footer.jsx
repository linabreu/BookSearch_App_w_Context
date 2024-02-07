import React from 'react'

function Footer() {
  return (
<footer className="w-full bg-fuchsia-800 h-[75px] stuck-footer">
    <div className="w-full mx-auto max-w-screen-xl pt-4 md:flex md:items-center md:justify-between">
      <span className="ml-3 text-lg text-white sm:text-center dark:text-white pargraph-font"><a href= '#' className="hover:underline">BookVault</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" className="pargraph-font hover:underline me-4 md:me-6 ">About</a>
        </li>
        <li>
            <a href="#" className="pargraph-font hover:underline me-4 md:me-6">Careers</a>
        </li>
        <li>
            <a href="#" className="pargraph-font hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="pargraph-font hover:underline mr-3">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer