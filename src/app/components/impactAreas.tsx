'use client';

import { impactAreas } from '../data';

export const ImpactAreas = () => {
  return (
    <section id="impact-areas" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Areas of Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {area.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  <span className="text-blue-600 dark:text-blue-400">{area.initiatives}</span> initiatives
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Active in: {area.states.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};