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
  StarOffImg,
  StarOnImg,
} from '../../../public';
import Image from 'next/image';

const Popular = () => {
  return (
    <section className='popular'>
      <div className='flex items-center justify-between p-10'>
        <h2>Popular ahora</h2>
        <a href='#'>Ver Todos</a>
      </div>
      <div className='grid grid-cols-4 gap-4 pl-10 pr-10'>
        <div className='flex items-center justify-center cover rounded-xl'>
          <div className='p-10'>
            <Image src={Cover1Img} alt='cover img' />
            <h3>Selena</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Tere Liye</h4>
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
            <Image src={Cover2Img} alt='cover img' />
            <h3>How to Master Your Habits</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Felix Y Siauw</h4>
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
            <Image src={Cover3Img} alt='cover img' />
            <h3>Bintang</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Tere Liye</h4>
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
            <Image src={Cover4Img} alt='cover img' />
            <h3>Start With Why</h3>
            <ul>
              <li className='flex'>
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOnImg} alt='star icon' />
                <Image src={StarOffImg} alt='star icon' />
              </li>
            </ul>
            <h4 className='mt-5 mb-5'>Felix Y Siauw</h4>
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

export default Popular;
