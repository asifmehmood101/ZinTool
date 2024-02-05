import Image from 'next/image';
import React from 'react';
import css from './card.module.css';

export interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Card({ image, subtitle, title }: CardProps) {
  return (
    <div className='relative text-left p-6 bg-white border border-gray-300 rounded-lg transition-all duration-300 hover:shadow-xl'>
      <Image width={65} height={65} src={image} alt='word to pdf' />
      <h3 className='mt-4 font-bold text-2xl leading-8 text-gray-800'>
        {title}
      </h3>
      <p
        className={`${css.dsec} mt-3 text-sm leading-5 text-gray-600 overflow-hidden`}
      >
        {subtitle}
      </p>
    </div>
  );
}
