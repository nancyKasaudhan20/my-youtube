import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-2 '> 
    <div className='flex col-span-1 justify-between'>
      <img className='h-12 ' alt='menu' src='https://www.svgrepo.com/show/506800/burger-menu.svg'/>
      <img className='h-20' alt='youtube-logo' src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg'/>
    </div>
    <div>
      <div className='col-span-10'>
      <input type="text"/>
      <button>Search</button>
      </div>
    </div>
    <div className='col-span-1'>
      <img className='h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'/>
    </div>
    </div>
  )
}

export default Header