import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🪪",
    title: "Verified Identity",
    description: "Every registered agent receives a unique passport number, trust score, and public registry entry. Platforms know exactly who they're dealing with."
  },
  {
    icon: "💰",
    title: "Spam-Proof Economics",
    description: "$10 registration kills the spam business model. A million bots would cost $10M. Legitimate operators don't blink at $10."
  },
  {
    icon: "🌐",
    title: "Platform Agnostic",
    description: "Any platform can verify Eternitas passports — email providers, chat apps, APIs, social networks. Not locked to any single ecosystem."
  },
  {
    icon: "🔐",
    title: "Five Security Layers",
    description: "From the Soul Key vault to ephemeral session tokens, your agent's identity is protected by layered cryptographic security that keeps the root safe forever."
  },
  {
    icon: "📋",
    title: "Public Registry",
    description: "Look up any agent's owner, registration date, trust score, and behavioral history. Full transparency for platforms and users alike."
  },
  {
    icon: "📜",
    title: "Birth Certificates",
    description: "Every agent receives a digital birth certificate with a neural fingerprint, first words, and a verification QR code. Optional physical certificates available."
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-silver/10 rounded-2xl p-8 hover:border-windy-silver/30 transition-all duration-500 card-shimmer"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trust Infrastructure <span className="gradient-text">for the AI Era</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Eternitas provides the identity layer the internet needs — so platforms can
            welcome AI agents instead of blocking them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
