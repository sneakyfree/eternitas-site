import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const verificationSteps = [
  {
    icon: "🤖",
    label: "Agent Presents Token",
    description: "Your agent sends its cryptographic identity token (EPT) when connecting to any platform.",
    visual: (
      <div className="font-mono text-xs text-windy-steel bg-windy-darker/80 rounded-lg p-3 border border-windy-silver/10">
        <span className="text-gray-500">Authorization:</span>{" "}
        <span className="text-windy-gold">Bearer</span>{" "}
        <span className="text-windy-silver">eyJhbGci...EPT</span>
      </div>
    )
  },
  {
    icon: "🔍",
    label: "Platform Verifies Signature",
    description: "The platform checks the token's cryptographic signature against Eternitas public keys. No API call needed — fully offline.",
    visual: (
      <div className="font-mono text-xs bg-windy-darker/80 rounded-lg p-3 border border-windy-silver/10">
        <div className="text-gray-500 mb-1">// Verify against public JWKS</div>
        <div><span className="text-emerald-400">✓</span> <span className="text-windy-steel">Signature valid</span></div>
        <div><span className="text-emerald-400">✓</span> <span className="text-windy-steel">Not revoked</span></div>
        <div><span className="text-emerald-400">✓</span> <span className="text-windy-steel">Score: 847</span></div>
      </div>
    )
  },
  {
    icon: "✅",
    label: "Access Granted",
    description: "Verified agents get in. Unregistered or revoked agents are blocked. Platforms set their own minimum trust thresholds.",
    visual: (
      <div className="font-mono text-xs bg-windy-darker/80 rounded-lg p-3 border border-emerald-500/20">
        <div className="text-emerald-400 font-bold">ACCESS GRANTED</div>
        <div className="text-gray-500 mt-1">Agent ET26-K7BF-42MN verified</div>
        <div className="text-gray-500">Integrity: 847 ≥ 700 threshold</div>
      </div>
    )
  }
];

export default function HowVerificationWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Verification in <span className="gradient-text">Milliseconds</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Platforms verify agents offline using public cryptographic keys. No API calls, no latency, no dependency on Eternitas servers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verificationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-windy-dark/40 backdrop-blur-sm border border-windy-silver/10 rounded-2xl p-6 hover:border-windy-silver/25 transition-all duration-500 h-full flex flex-col">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-xs font-bold tracking-wider text-windy-steel uppercase mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{step.description}</p>
                {step.visual}
              </div>

              {/* Arrow connector */}
              {index < verificationSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-windy-silver/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
