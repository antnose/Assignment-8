import { motion } from "framer-motion";

const LoadingPage = () => {
  // Animation variants for the slogan text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Animation for the loading dots
  const dotVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        {/* Main Slogan */}
        <motion.div className="mb-8" initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={textVariants}
            custom={0}
          >
            ডাটা
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={textVariants}
            custom={1}
          >
            আইতাছে
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            variants={textVariants}
            custom={2}
          >
            খারান
          </motion.h1>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              variants={dotVariants}
              animate="animate"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 mt-6 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          তাড়াহুড়া হইলে বাইরইয়া জান
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingPage;
