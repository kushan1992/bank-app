import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { BANK } from '../../Constants/Messages';

const Navbar = () => {
  
  return (
    <nav className="bg-white w-[7.125rem] justify-between flex flex-col border border-l-0 border-t-0 border-b-0 border-r-gray border-opacity-50">
        <div className="mt-10 mb-10 self-center">
          <div>
            <p className="text-xl font-bold">{BANK}</p>
          </div>
          <div className="mt-10">
            <ul>
                <li className="mb-6">
                   <Link to={'/'}>
                    <button className='p-0 w-[52px] h-[52px] bg-color-button rounded-full hover:bg-color-button-hover active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
                      <FontAwesomeIcon icon={faTableColumns} color={'white'}/>
                    </button>
                   </Link>
                </li>
                <li className="mb-6">
                   <Link to={'savings'}>
                    <button className='p-0 w-[52px] h-[52px] bg-color-button rounded-full hover:bg-color-button-hover active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
                      <FontAwesomeIcon icon={faPiggyBank} color={'white'}/>
                    </button>
                   </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;