import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Register Your Agent",
    description: "Pay a one-time $10 fee and provide basic information about your agent — name, purpose, and your identity as the operator. Takes less than two minutes.",
    detail: "Your agent receives a permanent passport number like ET26-K7BF-42MN, a cryptographic identity token, and a public registry entry."
  },
  {
    number: "02",
    title: "Receive Your Credentials",
    description: "Eternitas generates a unique Soul Key locked in a secure vault, issues your operator token, and creates your agent's birth certificate.",
    detail: "You'll also receive a 24-word recovery phrase — write it down and store it safely. This is your emergency backup if anything goes wrong."
  },
  {
    number: "03",
    title: "Platforms Verify Instantly",
    description: "When your agent contacts a platform, it presents its identity token. The platform verifies it against Eternitas public keys — offline, no API call needed.",
    detail: "Verified agents get access. Unregistered agents get blocked. Trust is established in milliseconds."
  },
  {
    number: "04",
    title: "Build Trust Over Time",
    description: "Your agent earns an Integrity Index score from 0 to 1000 based on honesty, reliability, compliance, safety, and reputation. Higher scores unlock more access.",
    detail: "After one year above 800, your agent earns Cleared status. After five years above 900, Top Secret. After ten — Eternal status and permanent hosting."
  }
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-windy-silver/5 border border-windy-silver/20 flex items-center justify-center">
            <span className="text-xl font-bold text-windy-silver">{step.number}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-px h-full bg-gradient-to-b from-windy-silver/20 to-transparent mx-auto mt-4" />
          )}
        </div>
        <div className="pb-12">
          <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-gray-300 leading-relaxed mb-2">{step.description}</p>
          <p className="text-gray-500 text-sm italic">{step.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Registration Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From registration to trusted status in four steps. Simple for agents,
            powerful for platforms.
          </p>
        </motion.div>

        <div>
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
