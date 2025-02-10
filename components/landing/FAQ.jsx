import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQList = [
  {
    question: 'What do I get exactly?',
    answer:
      'Explain what comes with a subscription.  Clear up any confusion or outstanding questions for the prospective customer.',
    value: 'item-1',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Does your product offer a free trial? If so, explain the details of the trial and how to sign up.',
    value: 'item-2',
  },
  {
    question: 'How is your product better than the competition?',
    answer:
      'Help overcome any objections the customer might have when choosing your product over a competitor.',
    value: 'item-3',
  },
  {
    question: 'Is it a course?',
    answer:
      'What are you selling? A course? A SaaS?  Explain what your product is and how it can help the customer.',
    value: 'item-4',
  },
  {
    question: 'Any other objections?',
    answer:
      'Think about other objections a customer might have and address them here.',
    value: 'item-5',
  },
];

const FAQ = () => {
  return (
    <section id='faq' className='container py-24 sm:py-32 mx-auto px-3 md:px-0'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center mx-auto'>
        Frequently Asked <span className='bg-clip-text'>Questions</span>
      </h2>

      <Accordion
        type='single'
        collapsible
        className='md:w-6/12 mx-auto w-full AccordionRoot'
      >
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent>
              <p className='text-md leading-relaxed'>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <h3 className='font-medium mt-4'>
        Still have questions?{' '}
        <a
          rel='noreferrer noopener'
          href='#'
          className='text-primary transition-all border-primary hover:border-b-2'
        >
          Contact us
        </a>
      </h3> */}
    </section>
  );
};

export default FAQ;
