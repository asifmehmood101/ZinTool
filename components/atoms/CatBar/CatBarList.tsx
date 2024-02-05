import React, { useState } from 'react';

const catBarData = [
  {
    title: 'Stock Video',
    href: '/stock-video',
    subItems: [
      { title: 'Stock Footage', href: '/stock-video/stock-footage' },
      { title: 'Motion Graphics', href: '/stock-video/motion-graphics' },
    ],
  },
  {
    title: 'Video Templates',
    href: '/video-templates',
    subItems: [
      {
        title: 'After Effects',
        href: '/video-templates/compatible-with-after-effects',
      },
      {
        title: 'Premiere Pro',
        href: '/video-templates/compatible-with-premiere-pro',
      },
    ],
  },
  {
    title: 'Music',
    href: '/audio',
    subItems: [
      { title: 'Royalty Free Music', href: '/audio/royalty-free-music' },
      { title: 'Logos & Idents', href: '/audio/logos-and-idents' },
    ],
  },
  {
    title: 'Sound Effects',
    href: '/sound-effects',
    subItems: [
      { title: 'Game Sounds', href: '/sound-effects/game-sounds' },
      {
        title: 'Transitions & Movement',
        href: '/sound-effects/transitions-and-movement',
      },
    ],
  },
];

export function CatBarList() {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseOver = (index: any) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className='lg:block hidden px-12'>
      <ul className='relative flex h-full list-none m-0 ml-[-15px] p-0 pl-[15px]'>
        {catBarData.map((item, index) => (
          <li
            key={index}
            className={`${
              activeItem === index
                ? 'after:content-[""] after:w-full after:h-[2px] after:absolute after:bottom-0 after:bg-purple-900'
                : ''
            } transition-all duration-700 py-4 flex items-center cursor-pointer text-base font-semibold leading-5 relative`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className={`${
                activeItem === index ? 'text-purple-600' : 'text-gray-700'
              } flex items-center  h-full px-4`}
              data-testid={`pageheader-itemtype-${item.title
                .toLowerCase()
                .replace(/\s+/g, '-')}`}
              href={item.href}
            >
              {item.title}
            </a>
            <div
              style={{ transform: 'translateX(15px)' }}
              className={` bg-white border border-solid border-gray-200 rounded-b-lg shadow-md text-gray-700 left-[-15px] p-5 absolute top-full ${
                activeItem === index ? 'visible' : 'invisible'
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <ul className='flex flex-col list-none m-0 p-0 gap-4'>
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className='whitespace-nowrap font-normal hover:text-purple-600'
                  >
                    <a className='R0yMSq_u lyPG8BW8' href={subItem.href}>
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
