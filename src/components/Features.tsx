import { Code, Coffee, Zap, Shield, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Vibe Coding",
    description: "Writes clean, maintainable code with the relaxed precision of a sloth. No rushing, just quality."
  },
  {
    icon: Coffee,
    title: "Sleep Mode Active",
    description: "Set your project requirements before bed, wake up to a fully functional application."
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Automatically deploys your apps while you dream. Morning coffee, meet morning launch."
  },
  {
    icon: Shield,
    title: "Stress-Free Security",
    description: "Built-in security best practices applied with zen-like attention to detail."
  },
  {
    icon: Clock,
    title: "24/7 Chill Mode",
    description: "Never rushes, never panics. Takes the time needed to craft perfect solutions."
  },
  {
    icon: Sparkles,
    title: "Dream-Driven Features",
    description: "Analyzes your sleep patterns to optimize coding style and add features you didn't know you needed."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Sloth AI is the perfect coding companion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Slow and steady wins the race. Experience the zen of effortless development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}