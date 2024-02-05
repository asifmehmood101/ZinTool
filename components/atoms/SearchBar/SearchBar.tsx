import React from 'react';

export function SearchBar() {
  return (
    <form className='w-full min-h-12 bg-control rounded-full flex items-center'>
      <input
        className='w-full h-full bg-transparent outline-none pl-6'
        type='text'
        placeholder='Search for Movies, TV Shows, Themes & Cast '
      />
      <span className='cursor-pointer flex items-center justify-center max-w-[72px] relative w-full  before:absolute before:top-1/2 before:transform  before:-translate-y-1/2 before:bg-search before:h-9 before:content-[""] before:w-px before:left-0'>
        <svg
          className='text-current'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <circle cx='10' cy='10' r='7' />
          <line x1='21' y1='21' x2='15' y2='15' />
        </svg>
      </span>
    </form>
  );
}
