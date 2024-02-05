import React from 'react';
import { Button } from '@/components/atoms/Button';
import { SearchBar } from '@/components/atoms/SearchBar';
import { CatBarList } from '@/components/atoms/CatBar/CatBarList';
import { headers } from 'next/headers';
export function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className='shadow-lg bg-white z-[1000] sticky top-0'>
      <nav className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <div className='lg:hidden block'>
            <Button
              onClick={() => setOpen((prev) => !prev)}
              className='p-0 flex items-center'
              variant='normal'
            >
              <svg
                className='h-8 w-8'
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
                <line x1='4' y1='6' x2='20' y2='6' />
                <line x1='4' y1='12' x2='20' y2='12' />
                <line x1='4' y1='18' x2='20' y2='18' />
              </svg>
            </Button>
          </div>
          <p className='ml-3 lg:pb-1.5 pb-0 leading-none font-bold text-2xl md:text-3xl text-text-dark'>
            ZinTool
          </p>
        </div>
        <div className='max-w-lg relative w-full lg:block hidden'>
          <SearchBar />
        </div>
        <div className='lg:flex hidden'>
          <Button variant='normal'>Login</Button>
          <Button variant='full'>SignUp</Button>
        </div>

        <div
          className={`transition-all fixed top-0 right-0 w-full bg-white h-dvh ${
            open ? '-translate-x-0' : '-translate-x-full'
          }`}
        >
          <div
            className='absolute right-2 top-2 text-[#969696]'
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <ul className='py-2 border-b-[1px]'>
            <h3 className='py-2 pl-6 pr-4 text-sm font-medium uppercase text-text-dark'>
              settings
            </h3>
            <li className='flex items-center gap-5 py-2 pl-6 pr-4 text-text-default hover:text-text-dark'>
              Sign In
            </li>
            <li className='flex items-center gap-5 py-2 pl-6 pr-4 text-text-default hover:text-text-dark'>
              Create Account
            </li>
          </ul>
        </div>
      </nav>
      <CatBarList />
    </header>
  );
}
