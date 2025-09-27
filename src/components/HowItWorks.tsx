import { Moon, Code2, Sun } from 'lucide-react';

const steps = [
  {
    icon: Moon,
    title: "Set Your Intention",
    description: "Before bed, tell Sloth AI what you want to build. Be as detailed or as vague as you like. (We speak fluent sleepy-developer)",
    time: "Before bed"
  },
  {
    icon: Code2,
    title: "Sloth AI Codes",
    description: "While you dream, Sloth AI codes at the perfect pace. No all-nighters, no stress, just steady, quality development.",
    time: "While you sleep"
  },
  {
    icon: Sun,
    title: "Wake Up to Magic",
    description: "Wake up to a fully functional app, complete with anything you want. Coffee optional, satisfaction guaranteed.",
    time: "Morning"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Sloth AI works its magic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your dreams into code reality.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-300 to-green-400 mt-6"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mt-6"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="text-white" size={28} />
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {step.time}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}