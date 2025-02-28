import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// This component introduces the user to the product and displays the first CTA button

const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1600px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              My Great <br />
            </span>{' '}
            Innovative Product{' '}
          </h1>{' '}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          Talk about the product and how great it is!  Keep this short and concise.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button size='lg' asChild>
            <Link target='_blank' href='#'>Main CTA</Link>
          </Button>

          <Button size='lg' variant='outline'>
          <Link target='_blank' href='#'> Secondary CTA (if needed)</Link>
            
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* TODO: This would be better as a video */}
      <div className='z-10 mx-auto'>
        <Image
          src='https://placehold.co/1200x1000'
          alt='Main Image'
          className='w-[80%] h-auto rounded shadow-lg mx-auto'
          width={1200}
          height={1000}
          priority
        />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>
  )
}

export default Hero
