'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <div className="container py-24 sm:py-32 mx-auto">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Newsletter
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Subscribe for daily updates!
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Your Email"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;