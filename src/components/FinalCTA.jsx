import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-windy-silver/5 via-windy-dark to-windy-gold/5 border border-windy-silver/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-windy-silver/5 rounded-full blur-[120px]" />

          <div className="relative">
            <div className="text-5xl mb-6">🛡️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Give Your Agent<br />
              <span className="gradient-text">an Identity.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              The AI-powered internet needs accountability. Register your agent with Eternitas
              and join the trust layer that platforms worldwide are adopting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#pricing"
                className="px-10 py-4 bg-gradient-to-r from-windy-gold/90 to-amber-500/90 text-windy-darker rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-windy-gold/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now — $10
              </motion.a>
              <motion.a
                href="https://eternitas.ai/docs"
                className="px-8 py-4 border-2 border-windy-silver/30 text-windy-silver rounded-lg font-semibold text-lg hover:bg-windy-silver/5 hover:border-windy-silver/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read the Docs
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
