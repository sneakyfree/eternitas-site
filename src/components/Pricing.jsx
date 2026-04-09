import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Individual",
    price: "$10",
    period: "one-time + $5/yr renewal",
    description: "For personal AI agents. One passport, one identity, full accountability.",
    features: [
      "1 agent passport",
      "Public registry entry",
      "Digital birth certificate",
      "Integrity Index tracking",
      "24-word recovery phrase",
      "Community support"
    ],
    cta: "Register Your Agent",
    highlighted: false
  },
  {
    name: "Developer",
    price: "$49",
    period: "/year",
    description: "For builders running multiple agents. Fleet management with full control.",
    features: [
      "Up to 10 agent passports",
      "Developer tools access",
      "Fleet dashboard",
      "Bulk registration",
      "Operator token management",
      "Priority support"
    ],
    cta: "Start Building",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For organizations deploying agents at scale with custom trust requirements.",
    features: [
      "Unlimited agent passports",
      "Dedicated account manager",
      "Custom trust policies",
      "White-label verification",
      "SLA guarantees",
      "On-premise deployment options"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

function PricingCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative ${tier.highlighted ? 'popular-ring' : ''}`}
    >
      <div className={`h-full bg-windy-dark/50 backdrop-blur-sm border rounded-2xl p-8 flex flex-col ${
        tier.highlighted
          ? 'border-windy-silver/30'
          : 'border-windy-silver/10 hover:border-windy-silver/25'
      } transition-all duration-500`}>
        {tier.highlighted && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="px-4 py-1.5 bg-gradient-to-r from-windy-silver/20 to-windy-gold/20 text-windy-gold text-xs font-bold rounded-full border border-windy-gold/30">
              MOST POPULAR
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-windy-silver">{tier.price}</span>
            <span className="text-sm text-gray-500">{tier.period}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-windy-silver/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href="#"
          className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
            tier.highlighted
              ? 'bg-gradient-to-r from-windy-gold/90 to-amber-500/90 text-windy-darker hover:shadow-lg hover:shadow-windy-gold/20'
              : 'bg-windy-silver/10 text-windy-silver border border-windy-silver/20 hover:bg-windy-silver/20 hover:border-windy-silver/30'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {tier.cta}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            $10 registration creates economic friction that blocks spam while remaining trivial for legitimate operators. Fees cover infrastructure — not profits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          Eternitas is structured as a nonprofit foundation. All fees fund infrastructure, governance, and security.
        </motion.p>
      </div>
    </section>
  );
}
