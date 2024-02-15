import Image from 'next/image';
import React from 'react';
import { FacebookImg, InstagramImg, LogoImg } from '../../../public';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='p-10 mt-12'>
        <div className='flex justify-between pl-10 pr-10 mt-5'>
          <div>
            <Image src={LogoImg} alt='logo img' />
            <p className='mt-5'>Is the best place to review a bookd</p>
          </div>
          <div className='flex menu'>
            <ul className='mr-52'>
              <li>
                <p className='mb-5'>Navegación</p>
              </li>
              <li className='mb-3'>
                <a href='#'>Inicio</a>
              </li>
              <li className='mb-3'>
                <a href='#'>Más vendidos</a>
              </li>
              <li className='mb-3'>
                <a href='#'>Categoría</a>
              </li>
              <li className='mb-3'>
                <a href='#'>Contacto</a>
              </li>
            </ul>
            <ul className='mr-20'>
              <li>
                <p className='mb-5'>Compañía</p>
              </li>
              <li className='mb-3'>
                <a href='#'>admin@baca.web</a>
              </li>
              <li className='mb-3'>
                <a href='#'>Admin</a>
              </li>
              <li className='mb-3'>
                <a href='#'>Buenos Aires, Argentina</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-between pl-10 pr-10 mt-5'>
          <p>@ 2024 Book Web</p>
          <div className='flex'>
            <Image src={InstagramImg} alt='instagram logo' className='mr-5' />
            <Image src={FacebookImg} alt='instagram logo' className='mr-32' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
