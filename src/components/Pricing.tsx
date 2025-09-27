import { Check } from 'lucide-react';

const plans = [
  {
    name: "Power Nap",
    price: "Free",
    description: "Perfect for trying out the sloth lifestyle",
    features: [
      "3 nap sessions per month",
      "Basic web applications",
      "Community support",
      "Sleep quality tracking"
    ],
    popular: false
  },
  {
    name: "Deep Sleep",
    price: "$24.50",
    period: "/month",
    description: "For developers who take their naps seriously",
    features: [
      "Unlimited nap sessions",
      "Full-stack applications",
      "Priority support",
      "Advanced sleep analytics",
      "Custom dream prompts",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Hibernation",
    price: "$99",
    period: "/month",
    description: "For teams that want to sleep their way to success",
    features: [
      "Everything in Deep Sleep",
      "Enterprise security",
      "Custom integrations",
      "Dedicated sleep coach",
      "24/7 sloth support",
      "White-label solutions"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose your nap plan
          </h2>
          <p className="text-xl text-gray-600">
            All plans include unlimited dreams and zero stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Start Napping
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}