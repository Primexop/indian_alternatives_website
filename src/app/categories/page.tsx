'use client';

const categories = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Indian alternatives for cloud infrastructure and platform services',
    count: 15,
    icon: '☁️'
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    description: 'Business solutions developed by Indian companies',
    count: 25,
    icon: '💼'
  },
  {
    id: 'digital-payments',
    title: 'Digital Payments',
    description: 'Indian payment gateways and financial technology solutions',
    count: 20,
    icon: '💳'
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platforms',
    description: 'Online marketplace and retail solutions from India',
    count: 18,
    icon: '🛍️'
  },
  {
    id: 'communication',
    title: 'Communication Tools',
    description: 'Messaging and collaboration platforms made in India',
    count: 12,
    icon: '💬'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Security solutions from Indian tech companies',
    count: 15,
    icon: '🔒'
  }
];

export default function Categories() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Indian Digital Solutions Categories
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Explore a wide range of digital solutions and alternatives developed by Indian companies across various sectors
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => window.location.href = `/categories/${category.id}`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{category.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {category.count} solutions
                </span>
                <span className="text-blue-600 dark:text-blue-400">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}