export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast Deployments',
      description: 'Deploy your applications in seconds, not minutes. Our optimized infrastructure ensures rapid deployment times.',
      details: ['Zero-downtime deployments', 'Instant rollbacks', 'Global CDN distribution']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with SSL certificates, DDoS protection, and compliance standards.',
      details: ['SSL/TLS encryption', 'DDoS protection', 'SOC 2 compliance', 'Regular security audits']
    },
    {
      icon: '📈',
      title: 'Auto Scaling',
      description: 'Automatically scale your applications based on traffic. Handle any load without manual intervention.',
      details: ['Horizontal scaling', 'Load balancing', 'Traffic monitoring', 'Cost optimization']
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Connect with your favorite tools and services. Git integration, CI/CD pipelines, and more.',
      details: ['GitHub/GitLab integration', 'Webhook support', 'API access', 'Third-party integrations']
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Monitor your applications with detailed analytics and performance metrics.',
      details: ['Performance monitoring', 'Error tracking', 'User analytics', 'Custom dashboards']
    },
    {
      icon: '🌍',
      title: 'Global Infrastructure',
      description: 'Deploy to multiple regions worldwide for optimal performance and reliability.',
      details: ['Multi-region deployment', '99.9% uptime SLA', 'Edge locations', 'Disaster recovery']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to deploy, manage, and scale your applications with confidence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                    <span className="text-green-500 mr-2">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Developer Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for Developers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand developers' needs. That's why we've built SumoPod with simplicity and power in mind.
              </p>
              <ul className="space-y-3">
                {[
                  'One-click deployments from Git',
                  'Environment variable management',
                  'Custom build configurations',
                  'Preview deployments for PRs',
                  'Rollback to any previous version'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-3">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
              <div className="mb-2">$ git push origin main</div>
              <div className="text-gray-500 mb-2"># Deploying to SumoPod...</div>
              <div className="mb-2">✓ Build completed in 23s</div>
              <div className="mb-2">✓ Deployed to production</div>
              <div className="text-blue-400">🚀 https://my-app.sumopod.com</div>
            </div>
          </div>

          {/* Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-600">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">&lt;100ms</div>
                    <div className="text-gray-600">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">15s</div>
                    <div className="text-gray-600">Deploy Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Performance That Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your users expect fast, reliable applications. Our global infrastructure ensures optimal performance worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Global CDN with 200+ edge locations</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Automatic image optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Smart caching strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have already made the switch
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
