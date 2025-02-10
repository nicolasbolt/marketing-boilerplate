import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featureList = [
  {
    title: 'Feature 1',
    description: 'Talk about the first feature in two or less sentences.  Focus on the "how" and what this product does to solve the user\'s problem, justify your solution with the features.',
    icon: '/undraw_building-blocks.svg',
  },
  {
    title: 'Feature 2',
    description: 'Talk about the second feature in two or less sentences.  Focus on the "how" and what this product does to solve the user\'s problem, justify your solution with the features.',
    icon: '/undraw_dream-world.svg',
  },
  {
    title: 'Feature 3',
    description: 'Talk about the third feature in two or less sentences.  Focus on the "how" and what this product does to solve the user\'s problem, justify your solution with the features.',
    icon: '/undraw_design-components.svg',
  },
  
];

const Features = () => {
  return (
    <section id='features' className='px-3 md:px-0'>
    <div className='container py-24 sm:py-32 mx-auto'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold pb-5'>
            <span className='bg-clip-text'>
            The List of Features{' '}
            </span>
            That Make This Product Great
          </h2>

          {/* <p className='text-muted-foreground text-xl mt-4 mb-8 '>
          Receive real-time corrections, practice practical scenarios, and enjoy conversations that adapt to your skill level for a truly personalized language learning experience.
          </p> */}

          <div className='flex flex-col gap-8'>
            {featureList.map(({ title, description, icon }) => (
              <Card key={title}>
                <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                  <img src={icon} alt={`${title} icon`} className='w-24 h-24' />
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='text-md mt-2'>
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src='https://placehold.co/600x400'
          className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg'
          alt='Feature Image'
        />
      </div>
    </div>
    </section>
  );
};

export default Features;