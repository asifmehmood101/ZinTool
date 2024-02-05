import React from 'react';

export function Footer() {
  return (
    <div className='md:px-20 px-6 mt-28 bg-footer'>
      <div className='w-full mx-auto'>
        <div className='flex items-center gap-8 py-8'>
          <span className='text-base font-medium text-text-dark'>
            Follow us
          </span>
          <ul className='flex items-center gap-4'>
            <li>
              <a
                href='https://www.youtube.com/'
                className='text-text-default hover:text-text-dark'
              >
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  {' '}
                  <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />{' '}
                  <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com/'
                className='text-text-default hover:text-text-dark'
              >
                <i className='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                  >
                    <path d='M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807'></path>
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/'
                className='text-text-default hover:text-text-dark'
              >
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-wrap items-start gap-2 py-10 border-t gap-y-8 border-t-clr-border'>
          <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
            <h3 className='pb-6 text-base font-semibold text-text-dark'>
              Internal Links
            </h3>
            <ul className='flex flex-col'>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
          <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
            <h3 className='pb-6 text-base font-semibold text-text-dark'>
              Enterprise
            </h3>
            <ul className='flex flex-col'>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Download Chrome Browser
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome Browser for Enterprise
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome Browser Devices
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  ChromeOS
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Google Cloud
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Google Workspace
                </a>
              </li>
            </ul>
          </div>
          <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
            <h3 className='pb-6 text-base font-semibold text-text-dark'>
              Internal Links
            </h3>
            <ul className='flex flex-col'>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='/documentaries/'
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='/themes/'
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
          <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
            <h3 className='pb-6 text-base font-semibold text-text-dark'>
              Enterprise
            </h3>
            <ul className='flex flex-col'>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Download Chrome Browser
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome Browser for Enterprise
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome Browser Devices
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  ChromeOS
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Google Cloud
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Google Workspace
                </a>
              </li>
            </ul>
          </div>
          <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
            <h3 className='pb-6 text-base font-semibold text-text-dark'>
              Internal Links
            </h3>
            <ul className='flex flex-col'>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
                  href='#'
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-6 pt-6 pb-10 border-t md:pb-12 md:pt-8 md:gap-8 border-t-clr-border'>
          <div className='flex items-center justify-between grow'>
            <a title='Go to home page' href='/'>
              <div className='relative flex items-center -mb-1 transition-colors first-line:dark:opacity-80'>
                <span className='pb-1.5 leading-none font-bold text-2xl md:text-3xl text-text-dark'>
                  ZinTools
                </span>
              </div>
            </a>
          </div>
          <ul className='flex flex-wrap items-center gap-8 gap-y-2'>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                Terms and conditions
              </a>
            </li>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                Cookies Policy
              </a>
            </li>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                About us
              </a>
            </li>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                EULA
              </a>
            </li>
            <li>
              <a
                className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
