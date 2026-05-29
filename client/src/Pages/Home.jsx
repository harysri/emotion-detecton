//client/src/Pages/Home
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   Music,
//   Smile,
//   Zap,
//   Shield,
//   Heart,
//   Play,
//   ChevronRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const containerRef = useRef(null);

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const pulseAnimation = {
//     initial: { scale: 1 },
//     animate: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   };

//   const floatingAnimation = {
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white font-sans overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl"></div>
//       </div>

//       {/* === HERO SECTION === */}
//       <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:pt-36">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="text-center"
//           >
//             {/* Decorative Element */}
//             <motion.div
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
//                 Emotion-Powered Music Experience
//               </span>
//             </motion.div>

//             {/* Main Headline */}
//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
//             >
//               <span className="block bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
//                 FaceTunes
//               </span>
//               <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-slate-300">
//                 Where Emotion Meets Melody
//               </span>
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               variants={fadeInUp}
//               className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
//             >
//               Your face becomes the DJ. Real-time emotion detection creates the
//               perfect soundtrack for every moment of your life.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               variants={fadeInUp}
//               className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {" "}
//               <Link to={"/emotion-detection"}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group relative px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center gap-3"
//                 >
//                   <Play className="w-5 h-5" />
//                   Start Your Journey
//                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </Link>
//             </motion.div>

//             {/* Preview Visual */}
//             <motion.div
//               variants={fadeInUp}
//               className="mt-20 relative max-w-4xl mx-auto"
//             >
//               <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-2">
//                 <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500/10 to-cyan-500/10 h-64 md:h-80 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="relative inline-block">
//                       <motion.div
//                         animate={pulseAnimation}
//                         className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-2 border-white/20 flex items-center justify-center"
//                       >
//                         <Smile className="w-16 h-16 md:w-20 md:h-20 text-white" />
//                       </motion.div>
//                       <motion.div
//                         animate={floatingAnimation}
//                         className="absolute -top-2 -right-2"
//                       >
//                         <Music className="w-10 h-10 text-purple-400" />
//                       </motion.div>
//                     </div>
//                     <p className="mt-6 text-slate-400 text-lg">
//                       Camera preview with real-time emotion overlay
//                     </p>
//                   </div>
//                 </div>
//                 {/* Floating elements */}
//                 <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 rounded-full"></div>
//                 <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-cyan-500 rounded-full"></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* === HOW IT WORKS SECTION === */}
//       <section className="py-20 relative">
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             <motion.div variants={fadeInUp} className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//                   How It Works
//                 </span>
//               </h2>
//               <p className="text-xl text-slate-400 max-w-3xl mx-auto">
//                 Experience the magic in three simple steps
//               </p>
//             </motion.div>

//             {/* Steps */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   step: "01",
//                   icon: <Smile className="w-8 h-8" />,
//                   title: "Face Detection",
//                   description:
//                     "Allow camera access. Our AI analyzes your facial expressions in real-time.",
//                   color: "from-purple-500 to-pink-500",
//                 },
//                 {
//                   step: "02",
//                   icon: <Zap className="w-8 h-8" />,
//                   title: "Emotion Analysis",
//                   description:
//                     "We detect joy, sadness, excitement, or calmness instantly.",
//                   color: "from-cyan-500 to-blue-500",
//                 },
//                 {
//                   step: "03",
//                   icon: <Music className="w-8 h-8" />,
//                   title: "Personalized Playback",
//                   description:
//                     "Perfect soundtrack plays automatically, matching your mood.",
//                   color: "from-green-500 to-emerald-500",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.step}
//                   variants={fadeInUp}
//                   whileHover={{ y: -10 }}
//                   className="relative group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 group-hover:border-slate-700 transition-all duration-300">
//                     <div
//                       className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} mb-6`}
//                     >
//                       {item.icon}
//                     </div>
//                     <div className="text-6xl font-bold text-slate-800 mb-4">
//                       {item.step}
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4 text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-slate-400 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* === FEATURES SECTION === */}
//       <section className="py-20 relative">
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           >
//             {/* Left Column - Visual */}
//             <motion.div variants={fadeInUp} className="relative">
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
//                 <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
//                   <div className="space-y-6">
//                     <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
//                       <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
//                         <Heart className="w-6 h-6" />
//                       </div>
//                       <div>
//                         <div className="font-semibold">Joy Detected</div>
//                         <div className="text-sm text-slate-400">
//                           Playing upbeat playlist
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
//                       <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
//                         <Smile className="w-6 h-6" />
//                       </div>
//                       <div>
//                         <div className="font-semibold">Calm Detected</div>
//                         <div className="text-sm text-slate-400">
//                           Playing lo-fi beats
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Column - Content */}
//             <motion.div variants={fadeInUp}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-8">
//                 <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//                   Why You'll Love It
//                 </span>
//               </h2>

//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: <Zap className="w-5 h-5" />,
//                     title: "Real-Time Adaptation",
//                     description:
//                       "Music evolves with your emotions throughout the day",
//                   },
//                   {
//                     icon: <Shield className="w-5 h-5" />,
//                     title: "Complete Privacy",
//                     description: "Everything happens locally on your device",
//                   },
//                   {
//                     icon: <Sparkles className="w-5 h-5" />,
//                     title: "Curated Excellence",
//                     description: "Premium playlists for every emotional state",
//                   },
//                   {
//                     icon: <Music className="w-5 h-5" />,
//                     title: "Smooth Transitions",
//                     description: "Seamless blending between moods and tracks",
//                   },
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-start gap-4 group">
//                     <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <div className="text-purple-300">{feature.icon}</div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-1 text-white">
//                         {feature.title}
//                       </h3>
//                       <p className="text-slate-400">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* === FINAL CTA === */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.div variants={fadeInUp}>
//               <h2 className="text-4xl md:text-6xl font-bold mb-8">
//                 <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
//                   Ready to Feel the Music?
//                 </span>
//               </h2>

//               <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
//                 Join thousands who have transformed their daily soundtrack. No
//                 setup, no learning curve—just pure emotional resonance.
//               </p>
//               <Link to={"/emotion-detection"}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group relative px-12 py-6 text-xl font-bold text-white transition-all duration-500 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center gap-3">
//                     <Play className="w-6 h-6" />
//                     Start Free Experience
//                     <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Animated particles */}
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Music,
  Smile,
  Zap,
  Shield,
  Heart,
  Play,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* === HERO SECTION === */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 px-4 md:px-6 lg:pt-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            {/* Decorative Element */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6 sm:mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Emotion-Powered Music Experience
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              <span className="block bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
                FaceTunes
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mt-2 sm:mt-4 text-slate-300">
                Where Emotion Meets Melody
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Your face becomes the DJ. Real-time emotion detection creates the
              perfect soundtrack for every moment of your life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to={"/emotion-detection"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center gap-2 sm:gap-3"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Journey
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Preview Visual */}
            <motion.div
              variants={fadeInUp}
              className="mt-13 sm:mt-16 md:mt-20 relative max-w-4xl mx-auto px-2"
            >
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 p-2">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500/10 to-cyan-500/10 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="relative inline-block">
                      <motion.div
                        animate={pulseAnimation}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-2 border-white/20 flex items-center justify-center"
                      >
                        <Smile className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 text-white" />
                      </motion.div>
                      <motion.div
                        animate={floatingAnimation}
                        className="absolute -top-2 -right-2"
                      >
                        <Music className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400" />
                      </motion.div>
                    </div>
                    <p className="mt-4 sm:mt-6 text-slate-400 text-sm sm:text-base md:text-lg">
                      Camera preview with real-time emotion overlay
                    </p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === HOW IT WORKS SECTION === */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
                Experience the magic in three simple steps
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  icon: <Smile className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Face Detection",
                  description:
                    "Allow camera access. Our AI analyzes your facial expressions in real-time.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "02",
                  icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Emotion Analysis",
                  description:
                    "We detect joy, sadness, excitement, or calmness instantly.",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  step: "03",
                  icon: <Music className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Personalized Playback",
                  description:
                    "Perfect soundtrack plays automatically, matching your mood.",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-4 sm:p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-800/50 group-hover:border-slate-700 transition-all duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color} mb-4 sm:mb-6`}
                    >
                      {item.icon}
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-2 sm:mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            {/* Left Column - Visual */}
            <motion.div
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-800 p-4 sm:p-6 md:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Joy Detected
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          Playing upbeat playlist
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Calm Detected
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          Playing lo-fi beats
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Why You'll Love It
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Real-Time Adaptation",
                    description:
                      "Music evolves with your emotions throughout the day",
                  },
                  {
                    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Complete Privacy",
                    description: "Everything happens locally on your device",
                  },
                  {
                    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Curated Excellence",
                    description: "Premium playlists for every emotional state",
                  },
                  {
                    icon: <Music className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Smooth Transitions",
                    description: "Seamless blending between moods and tracks",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="text-purple-300">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Ready to Feel the Music?
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
                Join thousands who have transformed their daily soundtrack. No
                setup, no learning curve—just pure emotional resonance.
              </p>
              <Link to={"/emotion-detection"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl font-bold text-white transition-all duration-500 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    Start Free Experience
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated particles */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;
