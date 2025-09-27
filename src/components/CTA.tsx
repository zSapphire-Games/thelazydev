import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to revolutionize your sleep schedule?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Join thousands of developers who've discovered the secret to stress-free coding.
          Your next breakthrough is just one nap away.
        </p>
        <button className="group bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 flex items-center mx-auto">
          Start Your Free Nap
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </section>
  );
}