import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: 'undraw_organize-photos.svg',
    title: 'Benefit 1',
    description: 'Describe the first benefit here in 2 or less sentences.  Focus on the user\'s needs and what the actual benefit is that they receive.'
  },
  {
    icon: 'undraw_organize-resume.svg',
    title: 'Benefit 2',
    description: 'Describe the first benefit here in 2 or less sentences.  Focus on the user\'s needs and what the actual benefit is that they receive.'
  },
  {
    icon: 'undraw_powerful.svg',
    title: 'Benefit 3',
    description: 'Describe the first benefit here in 2 or less sentences.  Focus on the user\'s needs and what the actual benefit is that they receive.'
  }
];

const Solution = () => {
  return (
    <section id='solution' className='container text-center py-24 sm:py-32 mx-auto px-3 md:px-0'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        How Does <span className='bg-clip-text'>This Project Solve Problems</span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'></p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {benefits.map(({ title, description, icon }) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                <img src={icon} alt={`${title} icon`} className='w-24 h-24' />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Solution;

