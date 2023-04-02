import React, { useState } from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Header = ({ handleToggleSidebar }) => {

  const [input,setInput] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input.length===0) return;
    navigate(`/search/${input}`)
  }
  return (
    <div className='header'>
      <FaBars
        className='header__menu'
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="logo" className="header__logo" />

      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
         />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatar" />
      </div>


    </div>
  )
}

export default Header