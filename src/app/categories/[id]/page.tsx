import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Cloud Computing Providers",
  description: "Discover powerful cloud computing solutions from leading Indian providers"
};

interface CloudProvider {
  id: string;
  name: string;
  description: string;
  website: string;
  features: string[];
  headquarters: string;
}

const cloudProviders: Record<string, CloudProvider[]> = {
  "cloud-computing": [
    {
      id: "ctrl-s",
      name: "CtrlS",
      description: "Asia's largest Rated-4 Hyperscale Datacenter provider offering cloud services with multiple data centers across India.",
      website: "https://www.ctrls.in",
      features: [
        "Enterprise Cloud Solutions",
        "Hybrid Cloud Services",
        "Disaster Recovery as a Service",
        "Multi-location Data Centers",
        "ISO 27001 Certified"
      ],
      headquarters: "Hyderabad, India"
    },
    {
      id: "yotta",
      name: "Yotta Infrastructure",
      description: "Provider of hyperscale data center and cloud services with Asia's largest data center park.",
      website: "https://www.yotta.com",
      features: [
        "Hyperscale Data Centers",
        "Private Cloud",
        "Public Cloud",
        "Hybrid Cloud",
        "Edge Computing Solutions"
      ],
      headquarters: "Mumbai, India"
    },
    {
      id: "web-werks",
      name: "Web Werks",
      description: "Leading data center and cloud service provider with facilities in Mumbai, Pune, and Delhi NCR.",
      website: "https://www.webwerks.in",
      features: [
        "Cloud Computing Services",
        "Colocation Services",
        "Disaster Recovery",
        "DevOps Solutions",
        "Managed Hosting"
      ],
      headquarters: "Mumbai, India"
    },
    {
      id: "nxtgen",
      name: "NxtGen",
      description: "Enterprise cloud and data center services provider with high-performance computing solutions.",
      website: "https://www.nxtgen.com",
      features: [
        "Infinite Data Center",
        "Enterprise Cloud Services",
        "Disaster Recovery Services",
        "Managed Security Services",
        "High-Performance Computing"
      ],
      headquarters: "Bangalore, India"
    },
    {
      id: "sify",
      name: "Sify Technologies",
      description: "Integrated ICT solutions provider offering cloud and data center services across India.",
      website: "https://www.sify.com",
      features: [
        "Cloud Transformation Services",
        "Multi-Cloud Management",
        "Cloud Security Services",
        "Application Services",
        "Data Center Services"
      ],
      headquarters: "Chennai, India"
    }
  ]
};

export async function generateStaticParams() {
  return Object.keys(cloudProviders).map((id) => ({
    id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id;
  const providers = cloudProviders[categoryId] || [];

  if (providers.length === 0) {
    return (
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Category Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sorry, we couldn't find any providers for this category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Indian Cloud Computing Providers
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Discover powerful cloud computing solutions from leading Indian providers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {providers.map((provider) => (
            <div 
              key={provider.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3">{provider.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {provider.description}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {provider.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 dark:text-gray-300">
                  HQ: {provider.headquarters}
                </span>
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}