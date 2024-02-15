import Image from 'next/image';
import React from 'react';
import {
  Author1Img,
  Author2Img,
  Author3Img,
  Author4Img,
  Cover1Img,
  Cover2Img,
  Cover3Img,
  Cover4Img,
  Cover5Img,
  Cover6Img,
  Cover7Img,
  Cover8Img,
  StarOffImg,
  StarOnImg,
} from '../../../public';

const Latest = () => {
  return (
    <section className='popular'>
      <div className='flex items-center justify-between p-10'>
        <h2>Últimos libros</h2>
        <a href='#'>Ver Todos</a>
      </div>
      <div className='grid grid-cols-4 gap-4 pl-10 pr-10'>
        <div className='flex items-center justify-center cover rounded-xl'>
          <div className='p-10'>
            <Image src={Cover5Img} alt='cover img' />
            <h3>El Efecto Compuesto</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Drren Hardy</h4>
            <div className='flex items-center'>
              <Image src={Author1Img} alt='autor img' />
              <p className='ml-2'>
                <span className='font-semibold'>Andre Syak</span> - hace 1
                semana
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center cover rounded-xl'>
          <div className='p-10'>
            <Image src={Cover6Img} alt='cover img' />
            <h3>Build A Story Brand</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Donald Miller</h4>
            <div className='flex items-center'>
              <Image src={Author2Img} alt='autor img' />
              <p className='ml-2'>
                <span className='font-semibold'>John Lucas</span> - hace 5 dias
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center cover rounded-xl'>
          <div className='p-10'>
            <Image src={Cover7Img} alt='cover img' />
            <h3>Crushing IT</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Gary Vaynerchuck</h4>
            <div className='flex items-center'>
              <Image src={Author3Img} alt='autor img' />
              <p className='ml-2'>
                <span className='font-semibold'>Ade Barkah</span> - hace 6 meses
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center cover rounded-xl'>
          <div className='p-10'>
            <Image src={Cover8Img} alt='cover img' />
            <h3>Atomic Habits</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>James Clear</h4>
            <div className='flex items-center'>
              <Image src={Author4Img} alt='autor img' />
              <p className='ml-2'>
                <span className='font-semibold'>Andre Syak</span> - hace 3 meses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
