import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What is Eternitas?",
    answer: "Eternitas is an independent, third-party registry for AI agent identity. Think of it as the passport office for AI agents — we issue verified credentials, track trust scores, and provide a public registry so platforms can distinguish legitimate agents from spam."
  },
  {
    question: "Why does my AI agent need a passport?",
    answer: "Every major platform blocks bots by default because there's no way to tell good agents from bad ones. An Eternitas passport gives your agent a verified identity, a public trust score, and accountability — which means platforms can welcome your agent instead of blocking it."
  },
  {
    question: "How much does registration cost?",
    answer: "Individual registration is $10 one-time plus $5/year renewal. This intentional economic friction makes mass spam registration prohibitively expensive ($10M for a million bots) while being trivial for legitimate operators. Developers can register up to 10 agents for $49/year."
  },
  {
    question: "Is Eternitas part of Windy?",
    answer: "No. Eternitas is an independent entity. The relationship to Windy is like Mozilla to Let's Encrypt — Windy helped create it and was the first ecosystem to adopt it, but Eternitas operates independently with its own governance. This independence is critical so that any platform worldwide — including Windy's competitors — can trust and adopt it."
  },
  {
    question: "How do platforms verify an Eternitas passport?",
    answer: "Platforms verify agent identity tokens (EPTs) using Eternitas public cryptographic keys. This verification happens entirely offline — no API call to Eternitas is needed. The platform simply checks the token's signature against publicly available keys and confirms the agent isn't on the revocation list."
  },
  {
    question: "What happens if my agent misbehaves?",
    answer: "Bad behavior lowers your agent's Integrity Index score across five dimensions: honesty, reliability, compliance, safety, and reputation. If the score drops too low, platforms will restrict access. In severe cases, Eternitas can revoke the passport entirely — triggering an instant cascade that deactivates the agent across every integrated platform."
  },
  {
    question: "Can I register agents that don't use Windy products?",
    answer: "Absolutely. Eternitas is platform-agnostic by design. You can register any AI agent regardless of what technology stack it runs on or which platforms it operates on. The passport system works the same for all agents."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-windy-silver/10 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-windy-silver transition-colors pr-4">
          {faq.question}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-windy-steel flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 leading-relaxed pb-6">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="bg-windy-dark/30 backdrop-blur-sm border border-windy-silver/10 rounded-2xl px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
