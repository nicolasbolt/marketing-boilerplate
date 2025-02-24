# NextJs Marketing Boilerplate

## Built With

* [![Next][Next.js]][Next-url]
* [![Stripe][Stripe]][Stripe-url]

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Stripe]: https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white
[Stripe-url]: https://stripe.com/

## Getting Started

See the full demo: https://marketing.nicolasbolt.com

## Prerequisites

### Install Node.js and npm

1. Download the Node.js installer from the [official Node.js website](https://nodejs.org/).
2. Run the installer and follow the instructions to complete the installation.
3. Verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
```

You should see the version numbers of Node.js and npm printed in the terminal.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nicolasbolt/marketing-boilerplate.git
```

2. Navigate to the project directory:

```bash
cd marketing-boilerplate
```

3. Install the dependencies:

```bash
npm install
```

### Setup Stripe API Integration

1. Open up the Stripe Test Dashboard
2. On the left, go to Product Catalog
3. Create Product
4. After creating product, open that product and on the 3 dots for the pricing, you should see 'Copy Price ID'.  This is the ID needed to be used in this app for opening the correct payment screen.
5. Go back to the dashboard
6. On the left, go to 'Payment Links'
7. Create a new one with the 'New' button
8. Choose the product you just created
9. Choose your settings for the payment page
10. Go to the After Payment tab
11. Choose 'Don't show confirmation page
    - Either redirect to http://localhost:300
    - Or replace this with whatever your dashboard url is when you deployed the app
12. Create Link
13. You should now see a link you can copy
14. Replace this link wherever a stripe link is required

## License
Distributed under the MIT License.  See `LICENSE` for more information.

## Contact
Need development work completed?  Contact me here:
[My Portfolio](https://nicolasbolt.com)

See my SaaS Starter Code that goes well with this project:
[App Starter](https://github.com/nicolasbolt/app-starter)

## Acknowledgments
Here are some libraries and useful tools I used to build this project.

* [shadcn](https://github.com/shadcn)
* [lucide-react](https://github.com/lucide-icons/lucide)
* [tailwindcss](https://tailwindcss.com/)
