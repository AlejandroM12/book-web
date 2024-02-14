import React from 'react';
import Image from 'next/image';
import { LogoImg } from '../../../public';
import { LuSearch } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Hero from '../Hero';
const Navbar = () => {
  return (
    <section className='min-h-screen'>
      <div>
        <nav className='flex justify-between pt-10 pb-5 pl-10 pr-10 mb-12'>
          <Image src={LogoImg} alt='logo' />
          <div>
            <form>
              <input
                placeholder='Encuentra el libro que estás buscando'
                className='search-area'
              />
              <button className='search-button'>
                <LuSearch />
              </button>
            </form>
          </div>
          <ul className='flex items-center'>
            <li>
              <FaRegHeart className='text-2xl cursor-pointer' />
            </li>
            <li>
              <BsFillMoonStarsFill className='ml-12 text-2xl cursor-pointer' />
            </li>
            <li>
              <a href='#' className='ml-12 text-xl'>
                ID
              </a>
            </li>
            <li>
              <a
                href='#'
                className='px-4 py-2 ml-8 text-white rounded-md button-bg-secondary'
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className='pl-10'>
          <ul className='flex items-center justify-center'>
            <li>
              <a href='#' className='mr-8'>
                Inicio
              </a>
            </li>
            <li>
              <a href='#' className='mr-8'>
                Más vendidos
              </a>
            </li>
            <li>
              <a href='#' className='mr-8'>
                Categoría
              </a>
            </li>
            <li>
              <a href='#' className='mr-8'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='mr-8'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <Hero />
      </div>
    </section>
  );
};

export default Navbar;
