import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const sampleResult = {
  passport: "ET26-K7BF-42MN",
  name: "Atlas-7",
  status: "Active",
  owner: "Acme Corp (EH26-R3DP-71XQ)",
  registered: "2026-03-15",
  integrity: 847,
  clearance: "Verified",
  rating: "4.8",
  reviews: 127,
  dimensions: [
    { name: "Honesty", score: 91, weight: "30%" },
    { name: "Reliability", score: 88, weight: "25%" },
    { name: "Compliance", score: 82, weight: "20%" },
    { name: "Safety", score: 79, weight: "15%" },
    { name: "Reputation", score: 84, weight: "10%" },
  ]
};

export default function Registry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showResult, setShowResult] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Public <span className="gradient-text">Registry</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Anyone can look up any registered agent. Full transparency — owner, trust score, behavioral history, everything.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative">
            <div className="flex bg-windy-dark/60 border border-windy-silver/20 rounded-xl overflow-hidden focus-within:border-windy-silver/40 transition-colors">
              <div className="flex items-center pl-5 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Look up any agent — ET26-K7BF-42MN"
                className="flex-1 bg-transparent text-white px-4 py-4 outline-none text-lg placeholder-gray-500"
                defaultValue="ET26-K7BF-42MN"
                readOnly
              />
              <button
                onClick={() => setShowResult(true)}
                className="px-6 py-4 bg-windy-silver/10 hover:bg-windy-silver/20 text-windy-silver font-semibold transition-colors border-l border-windy-silver/10"
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sample Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-windy-dark/50 backdrop-blur-sm border border-windy-silver/15 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-2xl font-bold text-white">{sampleResult.name}</h3>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                  {sampleResult.status}
                </span>
              </div>
              <div className="font-mono text-windy-steel text-sm">{sampleResult.passport}</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-windy-silver">{sampleResult.integrity}</div>
              <div className="text-xs text-gray-500">Integrity Index</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-windy-darker/50 rounded-xl p-4 border border-windy-silver/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Owner</div>
              <div className="text-sm text-white font-medium">{sampleResult.owner}</div>
            </div>
            <div className="bg-windy-darker/50 rounded-xl p-4 border border-windy-silver/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Registered</div>
              <div className="text-sm text-white font-medium">{sampleResult.registered}</div>
            </div>
            <div className="bg-windy-darker/50 rounded-xl p-4 border border-windy-silver/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Clearance</div>
              <div className="text-sm text-windy-gold font-medium">{sampleResult.clearance}</div>
            </div>
            <div className="bg-windy-darker/50 rounded-xl p-4 border border-windy-silver/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Rating</div>
              <div className="text-sm text-windy-gold font-medium">★ {sampleResult.rating} <span className="text-gray-400">({sampleResult.reviews})</span></div>
            </div>
          </div>

          {/* Integrity Dimensions */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Integrity Dimensions</div>
            <div className="space-y-3">
              {sampleResult.dimensions.map((dim, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-gray-400">{dim.name}</div>
                  <div className="flex-1 h-2 bg-windy-darker rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dim.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-windy-steel to-windy-silver rounded-full"
                    />
                  </div>
                  <div className="w-10 text-sm font-mono text-windy-silver text-right">{dim.score}%</div>
                  <div className="w-10 text-xs text-gray-600">{dim.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
