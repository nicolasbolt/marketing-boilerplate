'use client';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
// import { useSession } from 'next-auth/react';

const pricingList = [
  {
    title: 'Monthly Plan',
    recommended: false,
    duration: 'month',
    price: 29,
    paymentLink:
      process.env.NODE_ENV === 'development'
      // stripe test price link
        ? '#'
      // stripe live price link
        : '#',
    paymentPriceId:
      process.env.NODE_ENV === 'development'
      // stripe test price id
        ? ''
      // stripe live price id
        : '',
    description: 'Pay monthly without a yearly discount.',
    buttonText: 'Get Started For Free',
    benefitList: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
  {
    title: 'Annual Plan',
    recommended: true,
    duration: 'year',
    price: 200,
    paymentLink:
      process.env.NODE_ENV === 'development'
      // stripe test price link
        ? '#'
      // stripe live price link
        : '#',
    paymentPriceId:
      process.env.NODE_ENV === 'development'
      // stripe test price id
        ? ''
      // stripe live price id
        : '',
    description: 'Save on annual price by getting a discount',
    buttonText: 'Get Started For Free',
    benefitList: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
];

const Pricing = () => {
  // const { data: session } = useSession();
  return (
    <div className='bg-slate-50 px-3 md:px-0'>
      <section id='pricing' className='container py-24 sm:py-32 mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
          Get
          <span className='bg-clip-text'> Started!</span>
        </h2>
        <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis. */}
        </h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto md:w-8/12'>
          {pricingList.map((pricing) => (
            <Card
              key={pricing.title}
              className={
                pricing.recommended
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                  : ''
              }
            >
              <CardHeader>
                <CardTitle className='flex item-center justify-between'>
                  {pricing.title}
                  {pricing.recommended ? (
                    <Badge variant='secondary' className='text-sm text-primary'>
                      Recommended
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className='text-3xl font-bold'>${pricing.price}</span>
                  <span className='text-muted-foreground'>
                    {' '}
                    /{pricing.duration}
                  </span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button asChild className='w-full cursor-pointer'>
                  <span>Get Started!</span>
                  {/* Example with next auth */}
                  {/* {session && session.user ? ( 
                    <Link
                      href='#'
                      // Example:
                      // href={`/app/onboarding?priceId=${pricing.paymentPriceId}`}
                    >
                      {pricing.buttonText}
                    </Link>
                  {/* ) : (
                    <Link
                      href='#'
                      // Example:
                      // href={`/signin?callbackUrl=/app/onboarding?priceId=${pricing.paymentPriceId}`}
                    >
                      {pricing.buttonText}
                    </Link> 
                  )}*/}
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
                <div className='space-y-4'>
                  {pricing.benefitList.map((benefit) => (
                    <span key={benefit} className='flex'>
                      <Check className='text-green-500' />{' '}
                      <h3 className='ml-2'>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
