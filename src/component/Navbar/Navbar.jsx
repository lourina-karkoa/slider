import React, { useEffect, useState } from 'react'
import logo from './../../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
    const [bgcolor,setBgcolor]=useState(false)
    useEffect(()=>{
        const handlescroll = () =>{
            if(window.scrollY > 50){
                setBgcolor(true)

            }
            else{
                setBgcolor(false)
            }

        }
       
        window.addEventListener('scroll',handlescroll)

    },[])

  return (
    <>
    
    <nav className={bgcolor ? 'lk-nav-bg' : 'lk-nav'}>
       
            <img src={logo} className="lk-nav-child1"/>
            <ul className='lk-nav-ul-des'>
                <li className="lk-nav-li-des">Home</li>
                <li className="lk-nav-li-des">About</li>
                <li className="lk-nav-li-des">Service</li>
                <li className="lk-nav-li-des">New Property</li>
                <li className="lk-nav-li-des">Contact</li>
                
            </ul>
            <button className='lk-nav-child3-btn'>Login</button>
     
        
        <i className="fa-solid fa-bars lk-nav-child4"></i>


    </nav>
    <div className='lk-nav-mobile'>
        <ul className='lk-nav-ul-des-mobile'>
                <li className="lk-nav-li-des">Home</li>
                <li className="lk-nav-li-des">About</li>
                <li className="lk-nav-li-des">Service</li>
                <li className="lk-nav-li-des">New Property</li>
                <li className="lk-nav-li-des">Contact</li>
                
            </ul>
    </div>
    </>
  )
}
