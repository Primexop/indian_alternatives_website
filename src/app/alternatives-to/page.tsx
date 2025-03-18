"use client";

export const alternatives = [
  {
    id: "aws",
    title: "AWS Alternatives",
    description: "Indian cloud providers offering similar services to Amazon Web Services",
    alternatives: [
      {
        name: "E2E Networks",
        description: "Indian cloud infrastructure provider with data centers across India",
        website: "https://e2enetworks.com"
      },
      {
        name: "Web Werks",
        description: "Data center and cloud solutions provider with multiple locations in India",
        website: "https://www.webwerks.in"
      }
    ],
    icon: "☁️"
  },
  {
    id: "salesforce",
    title: "Salesforce Alternatives",
    description: "Indian CRM and business management solutions",
    alternatives: [
      {
        name: "Zoho",
        description: "Comprehensive suite of business applications including CRM",
        website: "https://www.zoho.com"
      },
      {
        name: "Kredily",
        description: "HR and payroll management platform for Indian businesses",
        website: "https://kredily.com"
      }
    ],
    icon: "💼"
  },
  {
    id: "stripe",
    title: "Stripe Alternatives",
    description: "Indian payment processing solutions",
    alternatives: [
      {
        name: "Razorpay",
        description: "Full-stack payments solution for Indian businesses",
        website: "https://razorpay.com"
      },
      {
        name: "PayU India",
        description: "Payment gateway service provider for Indian merchants",
        website: "https://payu.in"
      }
    ],
    icon: "💳"
  }
];

export default function AlternativesTo() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Indian Alternatives to Global Products
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Discover powerful Indian alternatives to popular global software and services
        </p>
        
        <div className="space-y-12">
          {alternatives.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {category.alternatives.map((alt) => (
                  <div 
                    key={alt.name}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">{alt.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {alt.description}
                    </p>
                    <a
                      href={alt.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Visit Website &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}