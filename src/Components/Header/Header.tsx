import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [pageName, setPageName] = useState('')

  useEffect(()=>{
    if(pathname === '/'){
      setPageName('Dashboard')
    }else if(pathname === '/savings'){
      setPageName('Savings')
    }
  },[pathname])
  
  
  return (
    <div className="sticky top-0 z-50" >
        <div className='draggable pb-10'/>
        <div className="flex flex-row ">
            <div className="basis-5/6">
              <div className="pl-[72px] flex justify-start">  
                <p className="text-xl font-bold">{pageName}</p>
              </div>
            </div>
            <div className="basis-1/6">
                <div className="flex flex-row-reverse pr-10">
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;