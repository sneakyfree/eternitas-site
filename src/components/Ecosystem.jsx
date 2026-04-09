import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "Windy Word",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by thousands of specialized AI models. Your voice becomes searchable, permanent data.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Windy Clone",
    icon: "🧬",
    verb: "You become.",
    hook: "Your digital twin — voice clone, visual avatar, personality profile. One button and suddenly there are two of you.",
    link: "https://windyclone.com",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "Windy Chat",
    icon: "💬",
    verb: "You connect.",
    hook: "Encrypted multilingual messaging. Real-time translated chat, voice, and video — in your own voice.",
    link: "https://windychat.com",
    color: "from-green-500 to-teal-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "Windy Traveler",
    icon: "✈️",
    verb: "You explore.",
    hook: "AI travel companion with offline language packs, local guides, and real-time translation wherever you go.",
    link: "https://windytraveler.com",
    color: "from-amber-500 to-teal-500",
    ring: "ring-amber-500/30"
  },
  {
    brand: "Windy Translate",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ specialized translation models. The invisible force powering every Windy product.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "Windy Mail",
    icon: "✉️",
    verb: "You communicate.",
    hook: "Email for humans and AI agents. Verified sender identity, automatic translation, and intelligent inbox management.",
    link: "https://windymail.ai",
    color: "from-red-500 to-rose-500",
    ring: "ring-red-500/30"
  },
  {
    brand: "Windy Fly",
    icon: "🪰",
    verb: "You automate.",
    hook: "Your personal AI agent that sends email, joins chats, manages calendars, and operates on your behalf across the ecosystem.",
    link: "https://windyfly.ai",
    color: "from-sky-500 to-blue-500",
    ring: "ring-sky-500/30"
  },
  {
    brand: "Windy Code",
    icon: "💻",
    verb: "You create.",
    hook: "AI-native code editor. Write, debug, and deploy — with an AI that understands your entire codebase.",
    link: "https://windycode.ai",
    color: "from-violet-500 to-indigo-500",
    ring: "ring-violet-500/30"
  },
  {
    brand: "Windy Cloud",
    icon: "☁️",
    verb: "You store.",
    hook: "Storage, sync, and compute for all your AI data. Every model, clone, and conversation — one vault, one account.",
    link: "https://windycloud.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={step.link}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-silver/5 rounded-xl p-5 hover:border-windy-silver/20 transition-all duration-500 card-shimmer ring-1 ${step.ring} block`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.04] rounded-xl transition-opacity duration-500`} />
      <div className="relative flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">{step.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">{step.verb}</h3>
            <span className={`text-xs font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{step.hook}</p>
        </div>
        <svg className="w-4 h-4 text-gray-600 group-hover:text-windy-silver flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Trust Layer <span className="gradient-text">Behind the Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Eternitas is the independent identity foundation that every product in the Windy ecosystem
            relies on — and that <span className="text-white font-medium">any platform in the world</span> can adopt.
          </p>
        </motion.div>

        <div className="space-y-3 mb-12">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Eternitas as the foundation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-silver/5 via-windy-dark/50 to-windy-gold/5 border-2 border-windy-silver/20 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-silver/[0.02] to-transparent rounded-3xl" />
          <div className="relative">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Eternitas Verifies Them All.
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Every AI agent in the ecosystem — and beyond it — needs a verified identity to operate.
              Eternitas is the independent, nonprofit registry that issues passports, tracks trust,
              and revokes bad actors across every platform.
            </p>
            <p className="text-windy-steel text-sm italic">
              "Like the Department of State for AI agents. Independent. Authoritative. Permanent."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
