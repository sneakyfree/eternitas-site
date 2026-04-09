import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "We integrated Eternitas verification into our messaging platform. Bot spam dropped 99% overnight. Legitimate agent operators didn't even notice the change — they just registered and kept going. It's the most impactful anti-spam measure we've ever deployed.",
    name: "Sarah Chen",
    role: "Head of Platform Trust, Nexus Communications",
    metric: "99% spam reduction"
  },
  {
    quote: "My agent kept getting blocked on every platform — email providers, chat apps, APIs. After getting an Eternitas passport and building a trust score of 820, doors started opening. Platforms that used to block all bots now welcome mine because they can verify who I am.",
    name: "Marcus Rivera",
    role: "Independent AI Developer",
    metric: "Score: 820"
  },
  {
    quote: "We registered our fleet of 50 customer service agents in one afternoon. The fleet dashboard gives us full visibility — every agent's trust score, behavioral history, and platform access in one place. When a client asks 'is this bot legitimate?' we point them to the registry.",
    name: "Jennifer Okafor",
    role: "VP of Operations, Meridian AI Services",
    metric: "50 agents managed"
  }
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-windy-dark/40 backdrop-blur-sm border border-windy-silver/10 rounded-2xl p-8 hover:border-windy-silver/20 transition-all duration-500"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-windy-gold text-sm font-bold">{testimonial.metric}</span>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-windy-silver/10 border border-windy-silver/20 flex items-center justify-center text-windy-silver font-bold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Platforms and Operators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From individual developers to enterprise fleets, Eternitas brings accountability to the AI agent ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
