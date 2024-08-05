import { images } from '../assets/images';
import { CaseStudiesItem } from '../containers/CaseStudy/components/CaseStudies/CaseStudies';

export const mainCases: CaseStudiesItem[] = [
  {
    image: images.enterpriseProcurement,
    paragraphs: [
      'Building an innovative platform that simplifies corporate procurement processes and B2B payments, providing tools for pre-approved purchases, automated documentation, and spend management. Payment solution is integrated within the MasterCard ICCP which is connected with over 70 banks globally.',
    ],
    tags: [
      'React',
      'Ruby on Rails',
      'MongoDB',
      'GraphQL',
      'Docker',
      'jQuery',
      'SASS',
      'Workarea',
      'ElasticSearch',
      'HAML',
    ],
    keyTags: ['Web', 'FinTech', 'B2B', 'Enterprise', 'Management'],
    title: 'Procurement and B2B payments management solution',
  },
  {
    image: images.deliveryManagementSystem,
    paragraphs: [
      'Delivery management system with automated order-to-delivery process.',
      'Marketplace for bottled water delivery from your favorite local retail places to America’s counter spaces within 2 or 4 hours daily. System offers an easy to use ordering, convenience and delivery process all at the touch of a few buttons; from the Brands you already know from the places you already go!',
    ],
    tags: [
      'Ruby on Rails',
      'PostgreSQL',
      'Stripe',
      'Twilio',
      'Cypress',
      'Remix',
      'Node.js',
      'Prisma',
      'Capacitor',
      'React Native',
      'tRPC',
    ],
    keyTags: ['Mobile', 'FoodTech', 'Management', 'Web'],
    title: 'Delivery management system with automated order-to-delivery process',
  },
  {
    image: images.restarauntReservations,
    paragraphs: [
      "Mobile app designed to streamline the table reservation process for restaurants and bars. With its interactive map feature, customers can easily book a table by selecting it from the restaurant's floor plan. The system also offers pre-order and deposit options, making it a convenient all-in-one solution for customers and business owners alike.",
    ],
    tags: [
      'React',
      'Cypress',
      'Node.js',
      'MongoDB',
      'Prisma',
      'Capacitor',
      'React Native',
      'PostgreSQL',
      'tRPC',
      'StripeB',
    ],
    keyTags: ['Mobile', 'FoodTech', 'Web'],
    title: 'Restaurant reservations and pre-orders platform',
  },
  {
    image: images.reitInvestment,
    paragraphs: [
      'We developed a secure online portal where investors can easily manage their investments and track their returns. System gives non accredited investors the ability to diversify into real estate investing for as little as $500. Using this platform, users buy shares in REIT, a public non listed real estate investment trust.',
    ],
    tags: ['Playwright', 'Ruby on Rails', 'React', 'MongoDB'],
    keyTags: ['Web', 'FinTech', 'Real Estate'],
    title: 'REIT Investment Platform',
  },
  {
    image: images.platformForInfluencers,
    paragraphs: [
      "Building a digital platform intended to serve influencers, athletes, artists, bloggers and musicians. The company's platform allows the creation of a custom media kit online with real-time data and analytics, thereby enabling clients to pitch and present themselves in a better manner.",
    ],
    tags: ['TypeScript', 'React Native Web', 'Serverless', 'Postgresql'],
    keyTags: ['Mobile', 'Social Network', 'Web', 'Data Analytics'],
    title: 'SaaS-based platform offering data analytics solutions for influencers',
  },
  {
    image: images.marketingPlatform,
    paragraphs: [
      'System harnesses location data to build a precise understanding of consumers’ physical world behavior. Fortune 500 companies and marquee brands, activate this customer intelligence through audience targeting, measurement, insights and data licensing solutions. By filling the massive gap in understanding how consumers spend the majority of their time, the system provides marketers a comprehensive new model of the customer journey for impactful engagement.',
    ],
    tags: ['Hadoop', 'Python', 'Django'],
    keyTags: ['Web', 'Marketing'],
    title: 'Marketing platform powered by location data',
  },
  {
    image: images.ecommerceMicroservices,
    paragraphs: [
      'Building a scalable end-to-end commerce platform composed of loosely coupled Ruby on Rails Microservices. The project included developing the comprehensive ecommerce customer site, the portal for direct sales representatives, and the admin tools to manage products, customers, and orders.',
    ],
    tags: ['Ruby on Rails', 'MongoDB', 'Angular'],
    keyTags: ['Web', 'eCommerce'],
    title: 'Multi-brand eCommerce platform',
  },

  {
    title: 'Digital Trust Registration Platform',
    image: images.illuminote,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'S3', 'Terraform'],
    keyTags: ['Web', 'FinTech', 'Enterprise'],
    paragraphs: [
      'We built a solution to address the shortcomings of an outdated legal system that lacks robust mechanisms for verifying the legitimacy of paper-based legal documents such as trusts, powers of attorney, wills, and deeds. System allows users to register, authenticate, and protect legal records, establishing an immutable chain of evidence that safeguards client data and keeps all stakeholders informed',
    ],
  },

  {
    title: 'Wet cat food feeder app',
    paragraphs: [
      'Through the app, insights are provided to define the cat’s feeding time preferences and recipe preferences. This allows cat parents to adjust based on their cat’s desires. Additionally, the device will track how much and how quickly the cat eats. When a feeding trend is shifted or out of the norm, the app will notify users that a vet visit may be needed.',
    ],
    tags: [
      'React Native',
      'Nest.js',
      'Prisma',
      'TypeScript',
      'PostgreSQL',
      'Terraform',
      'Azure IOT hub',
      'Amazon Video Streaming with WebRTC',
    ],
    keyTags: ['Mobile', 'eCommerce', 'Enterprise'],
    image: images.BistroCat,
  },
  {
    title: 'Non-Emergency Medical Transportation',
    paragraphs: [
      'A project for privately held medical transportation company to digitize processes required for planning, requesting, reviewing, dispatching and tracking scheduled medical appointments. Platform covers complete lifecycle of NEMT Operations from trip parsing and execution to billing documents.',
    ],
    tags: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
    keyTags: ['Web', 'Healthcare', 'Enterprise'],
    image: images.AcadianNemt,
  },
  {
    image: images.sprintApp,
    paragraphs: [
      'Building a diversified payment acceptance solution designed to provide an affordable and secure way for online transactions. System provides payment processing through virtual terminals, invoice payments, chargeback management, multiple processor connectivity, and more. ',
    ],
    tags: ['Ruby on Rails', 'React', 'Electron', 'PostgreSQL', 'Stripe'],
    keyTags: ['Web', 'FinTech', 'eCommerce', 'Enterprise'],
    title: 'Next generation commerce hub',
  },
  {
    image: images.buzzyBooth,
    paragraphs: [
      'Building a social marketing kiosk tool for the customers to easily promote for the business through personal visual contents. The company devices are installed in more than 500 enterprises, including hotels, restaurants, and bars. all-in-one web and mobile platform allows employees and ambassadors to actively participate in the brand’s content marketing, social selling, social recruiting',
    ],
    tags: ['Angular', 'AI', 'Social Services'],
    keyTags: ['Web', 'Marketing', 'Social Network'],
    title: 'A smart social photo marketing platform',
  },
];
