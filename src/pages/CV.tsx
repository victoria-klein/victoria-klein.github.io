
import { motion } from "framer-motion";

const CV = () => {
  return (
    <div className="min-h-screen pt-16 font-courier">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-8 text-primary">Curriculum Vitae</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Academic Background</h2>
              <p className="text-gray-600">Coming Soon</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Experience</h2>
              <p className="text-gray-600">Coming Soon</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
