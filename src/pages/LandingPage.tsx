import { Link } from "react-router-dom";

export default function Home() {


  return (
    <main className="flex flex-col items-center justify-center text-center" style={{minWidth: '1024px'}}>
      {/* Hero Section */}
      <section
        id="home"
        className="w-full px-6 flex items-center justify-center bg-white"
        style={{minHeight: '100vh'}}
      >
        <div className="w-full text-center" style={{maxWidth: '896px'}}>
          <h1 className="font-bold leading-tight tracking-tight" style={{fontSize: '4rem'}}>
            <span className="text-blue-600">Deploy your App</span>
            <br />
            <span className="text-black">in 15 Seconds!</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            The fastest way to deploy your applications with zero configuration.
            Get your app live in seconds, not hours.
          </p>
          <div className="mt-8 flex justify-center" style={{gap: '16px'}}>
            <Link
              to="/pricing"
              className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700"
              style={{borderRadius: '6px'}}
            >
              Get Started
            </Link>
            <Link
              to="/templates"
              className="bg-gray-200 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-300"
              style={{borderRadius: '6px'}}
            >
              See App Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 px-6 bg-gray-50">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-4" style={{fontSize: '3rem'}}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 mx-auto p-6" style={{maxWidth: '576px'}}>
              Choose the plan that fits your needs. Start free and scale as you
              grow.
            </p>
          </div>
          <div className="mx-auto" style={{maxWidth: '480px'}}>
            <div className="bg-white border border-gray-200 py-8 px-8 text-center" style={{borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}}>
              <h3 className="text-2xl p-2 font-bold text-gray-900 mb-4">
                Start Today
              </h3>
              <div className="text-5xl font-bold text-blue-600 mb-4">FREE</div>
              <p className="text-lg text-gray-600 mb-6">
                All the features you need to manage containers and applications
                effectively
              </p>
              <div className="flex flex-col gap-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 font-bold rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
                <button className="w-full bg-blue-100 text-blue-700 py-2 px-4 font-bold rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full min-h-screen py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Everything you need in one platform.
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              SumoPod offers comprehensive solutions for container and
              application management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Container Marketplace
              </h3>
              <p className="text-gray-600">
                Explore and purchase from our extensive container library, all
                verified and ready for instant deployment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure by Default
              </h3>
              <p className="text-gray-600">
                Built-in security features to keep your applications safe and
                protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Analytics
              </h3>
              <p className="text-gray-600">
                Monitor your application performance with detailed analytics and
                insights.
              </p>
            </div>
          </div>
          <div className="w-full bg-blue-600 mt-20 rounded-xl py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Kiri: Teks */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to transform your container management?
                </h2>
                <p className="text-white text-lg">
                  Join thousands of businesses using SumoPod to simplify their
                  container and application infrastructure.
                </p>
              </div>

              {/* Kanan: Tombol */}
              <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-0">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                  See App Templates
                </button>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
