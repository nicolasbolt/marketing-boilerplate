import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const testimonials = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe1',
    comment:
      'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe2',
    comment:
      'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe3',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe4',
    comment:
      'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe5',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Testimonials = () => {
  return (
    <div className='bg-slate-50 px-3 md:px-0'>
      <section id='testimonials' className='container py-24 sm:py-32 mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mx-auto text-center'>
          What Others
          <span className='bg-clip-text'> Are Saying</span>
        </h2>

        <p className='text-xl text-muted-foreground pt-4 pb-8'>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo */}
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6'>
          {testimonials.map(
            ({ image, name, link, linkText, userName, comment }) => (
              <Card
                key={userName}
                className='max-w-md md:break-inside-avoid overflow-hidden'
              >
                <CardHeader className='flex flex-row items-center gap-4 pb-2'>
                  <Avatar>
                    <AvatarImage alt='' src={image} />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>

                  <div className='flex flex-col'>
                    <CardTitle className='text-lg'>{name}</CardTitle>
                    <CardDescription>
                      {userName ? (
                        userName
                      ) : (
                        <Link
                          target='_blank'
                          className='text-blue-700 transition hover:text-blue-800 font-bold'
                          href={link}
                        >
                          {linkText}
                        </Link>
                      )}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>{comment}</CardContent>
              </Card>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
