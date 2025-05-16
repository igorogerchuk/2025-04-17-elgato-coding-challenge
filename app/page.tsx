'use client';

import AppearingContent from '@/components/AppearingContent';
import Feature from '@/components/Feature';
import Image from 'next/image';

export default function Home() {
  const features = Array.from({ length: 6 }, () => {
    return {
      image: {
        src: `/feature.svg`,
        alt: `Product feature`,
      },
      title: `Product feature`,
      description: 'Incorporating the latest technology for optimal performance.',
    };
  });

  return (
    <main className='h-screen overflow-y-auto'>
      {/* First Section - Blue Welcome */}
      <section className='flex justify-center items-center min-h-screen bg-[#110ef1] bg-blue-lines p-4'>
        <h1 className='md:max-w-[80%] text-center text-[#efefef] font-semibold text-3xl md:text-5xl lg:text-7xl uppercase'>
          Welcome
        </h1>
      </section>

      {/* Second Section - Scrollable Content */}
      <section className='flex justify-center items-center min-h-screen bg-[#101010] text-[#efefef] px-4 md:px-8 pb-8 md:pb-12 lg:pb-16'>
        <div className='w-full max-w-2xl'>
          <div className='mb-16 md:mb-24 lg:mb-32 space-y-8 lg:space-y-16 pt-24 md:pt-32 lg:pt-48'>
            {
              <AppearingContent>
                <p className='text-lg font-bold text-center uppercase text-highlight'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit similique itaque sapiente
                  corrupti commodi quam aut, quibusdam asperiores voluptatibus necessitatibus nihil dignissimos officiis
                  accusantium doloremque, cumque voluptatem nemo soluta! Sit.
                </p>
              </AppearingContent>
            }

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature, i) => (
                <AppearingContent key={i}>
                  <Feature {...feature} />
                </AppearingContent>
              ))}
            </div>
          </div>

          <div className='flex justify-center sticky bottom-0 bg-[#101010] pb-12'>
            <div className='relative w-full max-w-2xl aspect-[3/1]'>
              <Image src='/product.webp' alt='Product Image' fill className='object-contain' />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Red Thank You */}
      <section className='flex justify-center items-center min-h-screen bg-[#ee0e0f] p-4'>
        <h2 className='md:max-w-[80%] text-center text-[#efefef] font-semibold text-2xl md:text-3xl lg:text-5xl uppercase'>
          Thank You
        </h2>
      </section>
    </main>
  );
}
