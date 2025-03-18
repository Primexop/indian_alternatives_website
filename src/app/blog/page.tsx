'use client';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Rise of Indian Tech Startups',
      excerpt: 'How Indian entrepreneurs are building world-class alternatives to global tech solutions.',
      date: 'March 15, 2024',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      title: 'Made in India: Success Stories',
      excerpt: 'Highlighting successful Indian alternatives that are making waves in the global market.',
      date: 'March 10, 2024',
      category: 'Success Stories',
      readTime: '4 min read'
    },
    {
      title: 'Supporting Local Innovation',
      excerpt: 'Why choosing Indian alternatives matters for our economy and innovation ecosystem.',
      date: 'March 5, 2024',
      category: 'Economy',
      readTime: '3 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Latest Updates
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Insights, news, and stories about Indian alternatives and innovation
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="mx-2">·</span>
                  <time>{post.date}</time>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="block mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </a>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href="#"
                  className="text-base font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Read full story
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Developed and maintained by{' '}
            <a href="https://primexop.com" className="text-blue-600 hover:text-blue-500">
              Primexop.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}