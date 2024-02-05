import { NavBar } from '@/components/molecules/NavBar';
import { Card } from '@/components/atoms/Card';
import { Carousel } from '@trendyol-js/react-carousel';
import { Button } from '@/components/atoms/Button';
import { Footer } from '@/components/molecules/Footer';
const CardData = [
  {
    title: 'Word to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/word-pdf.svg',
  },
  {
    title: 'PPT to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/PPT-PDF.svg',
  },
  {
    title: 'Excel to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: '	https://images.hipdf.com/images2022/icons/Excel-PDF.svg',
  },
];

const CardDataCarosal = [
  {
    title: 'Word to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/word-pdf.svg',
  },
  {
    title: 'PPT to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/PPT-PDF.svg',
  },
  {
    title: 'Excel to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: '	https://images.hipdf.com/images2022/icons/Excel-PDF.svg',
  },
  {
    title: 'Word to PPT',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/word-pdf.svg',
  },
  {
    title: 'PPT to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/PPT-PDF.svg',
  },
  {
    title: 'Excel to PDF',
    subtitle: 'The best Word to PDF converter online.',
    image: '	https://images.hipdf.com/images2022/icons/Excel-PDF.svg',
  },
  {
    title: 'Word to PPT',
    subtitle: 'The best Word to PDF converter online.',
    image: 'https://images.hipdf.com/images2022/icons/word-pdf.svg',
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='md:px-16 px-6'>
        <div className='flex flex-col mt-20'>
          <h2 className='mb-6 font-extrabold text-3xl leading-9'>
            Your Bookmarks
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {CardData.map(({ title, subtitle, image }) => {
              return (
                <Card
                  title={title}
                  key={title}
                  subtitle={subtitle}
                  image={image}
                />
              );
            })}
          </div>
        </div>
        <div className='flex flex-col mt-20'>
          <div className='flex justify-between'>
            <h2 className='mb-6 font-extrabold text-3xl leading-9'>
              Convert from PDF
            </h2>
            <Button
              className='flex items-center pl-4 py-4 pr-2 h-1 rounded-3xl bg-control'
              variant='full'
            >
              <span>All</span>{' '}
              <span>
                <svg
                  className='h-6 w-6'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  {' '}
                  <path stroke='none' d='M0 0h24v24H0z' />{' '}
                  <polyline points='9 6 15 12 9 18' />
                </svg>
              </span>
            </Button>
          </div>
          <Carousel
            responsive={true}
            className='relative'
            useArrowKeys={true}
            swiping
            show={5}
            slide={1}
            transition={0.5}
            rightArrow={
              <svg
                className='h-8 w-8 absolute top-[40%] -right-2 z-[10] bg-white rounded-full'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <polyline points='12 16 16 12 12 8' />
                <line x1='8' y1='12' x2='16' y2='12' />
              </svg>
            }
            leftArrow={
              <svg
                className='h-8 w-8 absolute top-[40%] -left-2 z-[10] bg-white rounded-full'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                {' '}
                <circle cx='12' cy='12' r='10' />{' '}
                <polyline points='12 8 8 12 12 16' />{' '}
                <line x1='16' y1='12' x2='8' y2='12' />
              </svg>
            }
          >
            {CardDataCarosal.map(({ title, subtitle, image }) => {
              return (
                <Card
                  title={title}
                  key={title}
                  subtitle={subtitle}
                  image={image}
                />
              );
            })}
          </Carousel>
        </div>
        <div className='flex flex-col mt-20'>
          <h2 className='mb-6 font-extrabold text-3xl leading-9'>
            Convert To PDF
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {CardData.map(({ title, subtitle, image }) => {
              return (
                <Card
                  title={title}
                  key={title}
                  subtitle={subtitle}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
