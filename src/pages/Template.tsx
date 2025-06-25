import { useState } from "react";
import { templates } from "../components/Template";

export default function Templates() {
  const categories = ['All', 'Business', 'Productivity', 'Entertainment', 'Communication'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTemplates =
    selectedCategory === 'All'
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            App Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Choose from our collection of pre-built templates to get started quickly.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full border transition
                ${
                  selectedCategory === category
                    ? 'bg-blue-100 border-blue-400 text-blue-600 font-medium'
                    : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Template Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[200px]">
          {filteredTemplates.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-lg font-medium py-20">
              🚧 Coming soon...
            </div>
          ) : (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-14 h-14 object-cover rounded shadow"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      {template.name}
                      {template.popular && (
                        <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{template.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{template.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">⏱️</span>
                  Deploy time: {template.deployTime}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    Deploy
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
                    Preview
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Custom CTA */}
        <div className="mt-20 text-center bg-white shadow-gray-200 shadow-2xl rounded-lg py-10 px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up for free and start deploying applications in seconds
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Get Started Free
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
