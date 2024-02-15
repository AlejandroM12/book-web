import Image from 'next/image';
import React from 'react';
import { Client1Img, Client2Img, Client3Img, KutipImg } from '../../../public';

const Testimonials = () => {
  return (
    <section>
      <div className='pt-10 mt-20'>
        <div className='grid grid-cols-3 gap-3'>
          {/* col */}
          <div className='text-center border-2 testimonial'>
            <div>
              <div className='flex items-center justify-center text-center'>
                <Image
                  src={Client1Img}
                  className='ml-32 mr-20 gambar'
                  alt='client img'
                />
                <Image src={KutipImg} className='gambar' alt='kutip img' />
              </div>
              <h5>Eka Ardilah</h5>
              <p>
                Me siento muy útil con todos los libros proporcionados, así que
                hago mi trabajo fácilmente y felizmente.
              </p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className='text-center border-2 testimonial'>
            <div>
              <div className='flex items-center justify-center text-center'>
                <Image
                  src={Client2Img}
                  className='ml-32 mr-20 gambar'
                  alt='client img'
                />
                <Image src={KutipImg} className='gambar' alt='kutip img' />
              </div>
              <h5>Hazar Hamzah</h5>
              <p>Gracias. Muchos buenos libros para acompañar cada día.</p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className='text-center border-2 testimonial'>
            <div>
              <div className='flex items-center justify-center text-center'>
                <Image
                  src={Client3Img}
                  className='ml-32 mr-20 gambar'
                  alt='client img'
                />
                <Image src={KutipImg} className='gambar' alt='kutip img' />
              </div>
              <h5>Khoerunnisa</h5>
              <p>Gracias equipo, muchos libros recomendados para la lectura.</p>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
