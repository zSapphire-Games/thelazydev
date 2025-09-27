const testimonials = [
  {
    name: "Aaron",
    role: "Software Developer",
    company: "Vita Studios",
    avatar: "AA",
    content: "I used to pull all-nighters debugging code I didn't even write. Now I can type what I want in a sentence, and wake up to perfect code."
  },
  {
    name: "Mark",
    role: "I met him",
    company: "an event",
    avatar: "MA",
    content: "Built our entire MVP while travelling. Investors were impressed, and I was well-rested. Win-win."
  },
  {
    name: "Lukas Sandvik",
    role: "CEO",
    company: "Sloth AI",
    avatar: "LS",
    content: "The code quality is incredible. I actually even used it while creating this website... What can I say, it just works."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our nappers are saying
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of developers who've discovered the power of napping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}