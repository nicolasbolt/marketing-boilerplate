import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Twitter, Linkedin } from 'lucide-react';

const teamList = [
  {
    imageUrl:
      'https://github.com/shadcn.png',
    name: "Founder's Name",
    position: 'Software Engineer',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/nicolas-bolt-59a523131/',
      },
      // {
      //   name: 'Twitter',
      //   url: 'https://x.com/_nbolt',
      // },
    ],
    content: [
      `I'm a software engineer with a passion for building products that help people.`,
      `This about page is to explain a story about the founder`,
      `Help build trust by explaining who you are and why you built this product.`,
      `Keep the story concise and easy to read.`

    ],
  },
];

const About = () => {
  const socialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      //   case 'Twitter':
      //     return <Twitter size='20' />;
    }
  };

  return (
    <section id='team' className='container py-24 sm:py-32 mx-auto px-3 md:px-0'>
      <h2 className='text-3xl md:text-4xl font-bold mx-auto text-center'>
        <span className='bg-clip-text'>Founder's </span>
        Story!
      </h2>

      <p className='mt-4 mb-10 text-xl text-muted-foreground'>
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit! */}
      </p>

      <div className='md:w-5/12 w-full mx-auto gap-8 gap-y-10 pt-10'>
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, content }) => (
            <Card
              key={name}
              className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'
            >
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                />
                <CardTitle className='text-center'>{name}</CardTitle>
                <CardDescription className='text-primary'>
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className='text-center pb-2'>
                {content.map((paragraph, index) => (
                  <p key={index} className='mb-4'>
                    {paragraph}
                  </p>
                ))}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }) => (
                  <div key={name}>
                    <a
                      rel='noreferrer noopener'
                      href={url}
                      target='_blank'
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className='sr-only'>{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default About;