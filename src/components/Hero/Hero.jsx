import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Hero() {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <header id="hero" className="h-[50vh] bg-cover bg-center md:h-[80vh]">
        <div className="dropdown dropdown-bottom dropdown-end flex justify-end" onClick={toggleMenu}>
          <label className="btn m-4">MENU</label>
        </div>
        <div className="flex flex-col items-center h-full text-white">
          <img src={logo} alt="logo" className='w-[20vh] md:w-[40vh] rounded-full my-16' />
        </div>
      </header>

      <div className={`z-10 absolute top-0 bg-white h-full ${openMenu ? 'block' : 'hidden'}`}>
        <div
          className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
        >
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <img src={logo} alt="logo" className='w-14 rounded-full'/>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">Le BZ</h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              <Link to="/apropos">
                A Propos
              </Link>
              </span>
          </div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Nous Trouver</span>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Contacts</span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Hero
