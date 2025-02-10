import React from 'react'
import { Card } from '@/components/ui/card'

const ProblemAgitation = () => {
    return (
      <section id='problem' className='bg-slate-50 px-3 md:px-0'>
      <div id='problem' className='container py-24 sm:py-32 mx-auto'>
        <Card className='py-12'>
          <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
            <img
              src='/undraw_heavy-box.svg'
              alt=''
              className='w-[300px] object-contain rounded-lg'
            />
            <div className='bg-green-0 flex flex-col justify-between md:w-8/12'>
              <div className='pb-6'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                  <span className='bg-clip-text'>A Painful </span>
                  Problem to Solve
                </h2>
                <p className='text-xl text-muted-foreground mt-4'>
                  A short and concise explanation of the problem that the ICP is facing.  Should cause an emotional response from the reader.
                </p>
              </div>

              <section id='statistics'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>10+</h2>
                    <p className='text-xl text-muted-foreground'>Wasted Hours</p>
                  </div>

                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      15+
                    </h2>
                    <p className='text-xl text-muted-foreground'>times started over</p>
                  </div>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      Countless
                    </h2>
                    <p className='text-xl text-muted-foreground'>
                      Frustrating Days
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </section>

      );
}

export default ProblemAgitation
