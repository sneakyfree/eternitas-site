import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PassportVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Agent Gets <span className="gradient-text">a Passport</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A permanent, verifiable credential that proves who your agent is and who stands behind it.
          </p>
        </motion.div>

        {/* Passport Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          <div className="passport-card rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 relative overflow-hidden">
            {/* Subtle watermark pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(226,232,240,1) 20px, rgba(226,232,240,1) 21px)`
            }} />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🛡️</span>
                  <div>
                    <div className="text-xs font-bold tracking-[0.3em] text-windy-steel uppercase">Eternitas</div>
                    <div className="text-[10px] text-gray-500 tracking-wider">AI Agent Passport</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Status</div>
                  <div className="text-xs font-bold text-emerald-400">ACTIVE</div>
                </div>
              </div>

              {/* Passport Number */}
              <div className="mb-6 p-4 bg-windy-darker/60 rounded-xl border border-windy-silver/10">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Passport Number</div>
                <div className="text-2xl font-mono font-bold tracking-wider text-windy-silver">ET26-K7BF-42MN</div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Agent Name</div>
                  <div className="text-sm font-semibold text-white">Atlas-7</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Owner</div>
                  <div className="text-sm font-semibold text-white">Acme Corp</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Registered</div>
                  <div className="text-sm font-semibold text-white">2026-03-15</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Clearance</div>
                  <div className="text-sm font-semibold text-windy-gold">Verified</div>
                </div>
              </div>

              {/* Trust Score Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Integrity Index</div>
                  <div className="text-sm font-bold text-windy-silver">847 / 1000</div>
                </div>
                <div className="w-full h-2 bg-windy-darker rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '84.7%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-windy-steel via-windy-silver to-windy-gold rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-gray-600">0</span>
                  <span className="text-[9px] text-gray-600">1000</span>
                </div>
              </div>

              {/* QR and Footer */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Rating</div>
                  <div className="text-sm text-windy-gold">★★★★★ <span className="text-gray-400">(4.8) — 127 reviews</span></div>
                </div>
                {/* CSS QR placeholder */}
                <div className="w-14 h-14 bg-windy-darker/80 rounded-lg border border-windy-silver/10 grid grid-cols-5 grid-rows-5 gap-px p-1.5">
                  {[1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1].map((filled, i) => (
                    <div key={i} className={`rounded-[1px] ${filled ? 'bg-windy-silver/60' : 'bg-transparent'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
