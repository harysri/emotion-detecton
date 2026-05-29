// worked one

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as faceapi from "@vladmandic/face-api";
// import {
//   Camera,
//   CameraOff,
//   Music,
//   Play,
//   Pause,
//   SkipForward,
//   Volume2,
//   VolumeX,
//   Smile,
//   Frown,
//   Meh,
//   Angry,
//   PartyPopper,
//   Heart,
//   Activity,
//   TrendingUp,
//   SkipBack,
//   Shuffle,
//   Repeat,
//   List,
//   Loader,
//   Disc,
//   Sparkles,
// } from "lucide-react";

// const EmotionDetection = () => {
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [currentEmotion, setCurrentEmotion] = useState("neutral");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(70);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showQueue, setShowQueue] = useState(false);
//   const [modelsLoaded, setModelsLoaded] = useState(false);
//   const [isDetecting, setIsDetecting] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [emotionHistory, setEmotionHistory] = useState([]);
//   const [confidence, setConfidence] = useState(0);
//   const [faceDetected, setFaceDetected] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [showEmojiDisplay, setShowEmojiDisplay] = useState(false);
//   const [lastEmotionChange, setLastEmotionChange] = useState(Date.now());

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const audioRef = useRef(null);
//   const streamRef = useRef(null);
//   const detectionIntervalRef = useRef(null);
//   const emojiDisplayTimeoutRef = useRef(null);

//   // Emotion configuration with local audio files
//   const emotionPlaylists = {
//     happy: [
//       {
//         id: 1,
//         title: "All of it X thumbi Penne",
//         artist: "Gopisunder",
//         file: "/audio/happy/all_of_it_all_x_thumbi_penne.mp3",
//       },
//       {
//         id: 2,
//         title: "Dheema Dheema",
//         artist: "Anirudh_Ravichander",
//         file: "/audio/happy/dheema_song.mp3",
//       },
//       {
//         id: 3,
//         title: "Uff X what makes you Beautiful",
//         artist: "One Direction",
//         file: "/audio/happy/uff_x_what_makes_you_beautiful.mp3",
//       },
//     ],
//     sad: [
//       {
//         id: 4,
//         title: "Kabira",
//         artist: "Pritam",
//         file: "/audio/sad/kabira_lofi.mp3",
//       },
//       {
//         id: 5,
//         title: "Let her Go X Husn",
//         artist: "anuv jain",
//         file: "/audio/sad/let_her_go_x_husn.mp3",
//       },
//       {
//         id: 6,
//         title: "Marappathillai Nenje",
//         artist: "james",
//         file: "/audio/sad/marappathillai_nenje.mp3",
//       },
//     ],
//     angry: [
//       {
//         id: 7,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/angry/vaathi_coming.mp3",
//       },
//       {
//         id: 8,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/angry/oru_maalai.mp3",
//       },
//       {
//         id: 9,
//         title: "Ambersariya",
//         artist: "Unknown",
//         file: "/audio/angry/ambarsariya.mp3",
//       },
//     ],
//     neutral: [
//       {
//         id: 10,
//         title: "Dooreyo x night changes",
//         artist: "shaan rahman X One Direction",
//         file: "/audio/neutral/dooreyo_x_night_changes.mp3",
//       },
//       {
//         id: 11,
//         title: "Oorum Blood",
//         artist: "Sai Abhay shanker",
//         file: "/audio/neutral/oorum_blood.mp3",
//       },
//       {
//         id: 12,
//         title: "Ambarsariya",
//         artist: "Sona Mohapatra",
//         file: "/audio/neutral/ambarsariya.mp3",
//       },
//     ],
//     surprised: [
//       {
//         id: 13,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/emotion_surprise/oru_maalai.mp3",
//       },
//       {
//         id: 14,
//         title: "Uff_X_What_Makes_You_Beautiful",
//         artist: "One_Direction",
//         file: "/audio/emotion_surprise/uff_x_what_makes_you_beautiful.mp3",
//       },
//       {
//         id: 15,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/emotion_surprise/vaathi_coming.mp3",
//       },
//     ],
//     fearful: [
//       {
//         id: 16,
//         title: "Dooreyo x night changes",
//         artist: "shaan rahman X One Direction",
//         file: "/audio/fearful/dooreyo_x_night_changes.mp3",
//       },
//       {
//         id: 17,
//         title: "Kabira",
//         artist: "Pritam",
//         file: "/audio/fearful/kabira_lofi.mp3",
//       },
//       {
//         id: 18,
//         title: "Let her Go X Husn",
//         artist: "anuv jain",
//         file: "/audio/fearful/let_her_go_x_husn.mp3",
//       },
//     ],
//     disgusted: [
//       {
//         id: 19,
//         title: "Dheema Dheema",
//         artist: "Anirudh_Ravichander",
//         file: "/audio/disgusted/dheema_song.mp3",
//       },
//       {
//         id: 20,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/disgusted/oru_maalai.mp3",
//       },
//       {
//         id: 21,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/disgusted/vaathi_coming.mp3",
//       },
//     ],
//   };

//   const emotionConfig = {
//     happy: {
//       emoji: "😊",
//       bigEmoji: "😊",
//       color: "from-yellow-400 to-orange-400",
//       bgColor: "bg-yellow-500/10",
//       borderColor: "border-yellow-500/30",
//       icon: <Smile className="w-5 h-5" />,
//       label: "Happy",
//       displayText: "Feeling Happy!",
//       animation: "bounce",
//     },
//     sad: {
//       emoji: "😢",
//       bigEmoji: "😢",
//       color: "from-blue-400 to-indigo-400",
//       bgColor: "bg-blue-500/10",
//       borderColor: "border-blue-500/30",
//       icon: <Frown className="w-5 h-5" />,
//       label: "Sad",
//       displayText: "Feeling Sad...",
//       animation: "float",
//     },
//     angry: {
//       emoji: "😠",
//       bigEmoji: "😠",
//       color: "from-red-400 to-pink-400",
//       bgColor: "bg-red-500/10",
//       borderColor: "border-red-500/30",
//       icon: <Angry className="w-5 h-5" />,
//       label: "Angry",
//       displayText: "Feeling Angry!",
//       animation: "pulse",
//     },
//     neutral: {
//       emoji: "😐",
//       bigEmoji: "😐",
//       color: "from-gray-400 to-slate-400",
//       bgColor: "bg-gray-500/10",
//       borderColor: "border-gray-500/30",
//       icon: <Meh className="w-5 h-5" />,
//       label: "Neutral",
//       displayText: "Neutral Mood",
//       animation: "fade",
//     },
//     surprised: {
//       emoji: "😮",
//       bigEmoji: "😮",
//       color: "from-purple-400 to-pink-400",
//       bgColor: "bg-purple-500/10",
//       borderColor: "border-purple-500/30",
//       icon: <PartyPopper className="w-5 h-5" />,
//       label: "Surprised",
//       displayText: "Surprised!",
//       animation: "pop",
//     },
//     fearful: {
//       emoji: "😨",
//       bigEmoji: "😨",
//       color: "from-indigo-400 to-purple-400",
//       bgColor: "bg-indigo-500/10",
//       borderColor: "border-indigo-500/30",
//       icon: <Heart className="w-5 h-5" />,
//       label: "Fearful",
//       displayText: "Feeling Anxious",
//       animation: "shake",
//     },
//     disgusted: {
//       emoji: "🤢",
//       bigEmoji: "🤢",
//       color: "from-green-400 to-emerald-400",
//       bgColor: "bg-green-500/10",
//       borderColor: "border-green-500/30",
//       icon: <Meh className="w-5 h-5" />,
//       label: "Disgusted",
//       displayText: "Feeling Disgusted",
//       animation: "wiggle",
//     },
//   };

//   // Get current playlist based on emotion
//   const getCurrentPlaylist = () =>
//     emotionPlaylists[currentEmotion] || emotionPlaylists.neutral;
//   const currentSong = getCurrentPlaylist()[currentSongIndex] || {
//     title: "No song",
//     artist: "Unknown",
//     file: "",
//   };

//   // Show big emoji display when emotion changes
//   const triggerEmojiDisplay = () => {
//     setShowEmojiDisplay(true);
//     setLastEmotionChange(Date.now());

//     // Clear any existing timeout
//     if (emojiDisplayTimeoutRef.current) {
//       clearTimeout(emojiDisplayTimeoutRef.current);
//     }

//     // Hide display after 3 seconds
//     emojiDisplayTimeoutRef.current = setTimeout(() => {
//       setShowEmojiDisplay(false);
//     }, 3000);
//   };

//   // Load face-api.js models
//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         const MODEL_URL = "/models";

//         await Promise.all([
//           faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//           faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
//           faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
//           faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
//         ]);

//         setModelsLoaded(true);
//         console.log("Face-api models loaded successfully");
//       } catch (error) {
//         console.error("Error loading face-api models:", error);
//       }
//     };

//     loadModels();
//   }, []);

//   // Audio event listeners
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const updateDuration = () => setDuration(audio.duration);
//     const handleEnded = () => playNext();

//     audio.addEventListener("timeupdate", updateTime);
//     audio.addEventListener("loadedmetadata", updateDuration);
//     audio.addEventListener("ended", handleEnded);

//     return () => {
//       audio.removeEventListener("timeupdate", updateTime);
//       audio.removeEventListener("loadedmetadata", updateDuration);
//       audio.removeEventListener("ended", handleEnded);
//     };
//   }, [currentSongIndex, currentEmotion]);

//   // Update audio source when song changes
//   useEffect(() => {
//     if (audioRef.current && currentSong.file) {
//       audioRef.current.src = currentSong.file;
//       if (isPlaying && isCameraOn) {
//         audioRef.current
//           .play()
//           .catch((err) => console.log("Audio play error:", err));
//       }
//     }
//   }, [currentSong.file]);

//   // Control audio playback
//   useEffect(() => {
//     if (audioRef.current) {
//       if (isPlaying && isCameraOn) {
//         audioRef.current
//           .play()
//           .catch((err) => console.log("Audio play error:", err));
//       } else {
//         audioRef.current.pause();
//       }
//     }
//   }, [isPlaying, isCameraOn]);

//   // Control volume
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = isMuted ? 0 : volume / 100;
//     }
//   }, [volume, isMuted]);

//   // Cleanup timeouts on unmount
//   useEffect(() => {
//     return () => {
//       if (emojiDisplayTimeoutRef.current) {
//         clearTimeout(emojiDisplayTimeoutRef.current);
//       }
//     };
//   }, []);

//   // Start webcam
//   const startVideo = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//           width: { ideal: 1280 },
//           height: { ideal: 720 },
//           facingMode: "user",
//         },
//         audio: false,
//       });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         streamRef.current = stream;

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current.play();
//           setIsDetecting(true);
//           startDetection();
//         };
//       }
//     } catch (error) {
//       console.error("Error accessing webcam:", error);
//       alert(
//         "Could not access camera. Please ensure camera permissions are granted."
//       );
//     }
//   };

//   // Stop webcam
//   const stopVideo = () => {
//     if (streamRef.current) {
//       streamRef.current.getTracks().forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//     if (videoRef.current) {
//       videoRef.current.srcObject = null;
//     }
//     if (detectionIntervalRef.current) {
//       clearInterval(detectionIntervalRef.current);
//     }
//     if (emojiDisplayTimeoutRef.current) {
//       clearTimeout(emojiDisplayTimeoutRef.current);
//     }
//     setIsDetecting(false);
//     setFaceDetected(false);
//     setShowEmojiDisplay(false);
//   };

//   // Face detection and emotion recognition
//   const detectEmotion = async () => {
//     if (!videoRef.current || !canvasRef.current || !modelsLoaded) return;

//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     const displaySize = {
//       width: video.videoWidth || video.width,
//       height: video.videoHeight || video.height,
//     };

//     faceapi.matchDimensions(canvas, displaySize);

//     try {
//       const detections = await faceapi
//         .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//         .withFaceLandmarks()
//         .withFaceExpressions();

//       const ctx = canvas.getContext("2d");
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       if (detections.length > 0) {
//         setFaceDetected(true);

//         const resizedDetections = faceapi.resizeResults(
//           detections,
//           displaySize
//         );

//         faceapi.draw.drawDetections(canvas, resizedDetections);
//         faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

//         const expressions = detections[0].expressions;

//         let maxValue = 0;
//         let dominantEmotion = "neutral";

//         Object.entries(expressions).forEach(([emotion, value]) => {
//           if (value > maxValue) {
//             maxValue = value;
//             dominantEmotion = emotion;
//           }
//         });

//         if (maxValue > 0.5 && dominantEmotion !== currentEmotion) {
//           setCurrentEmotion(dominantEmotion);
//           setConfidence(maxValue);
//           setCurrentSongIndex(0); // Reset to first song of new emotion playlist
//           triggerEmojiDisplay();

//           setEmotionHistory((prev) => [
//             {
//               emotion: dominantEmotion,
//               time: new Date().toLocaleTimeString(),
//               confidence: maxValue,
//             },
//             ...prev.slice(0, 9),
//           ]);
//         } else {
//           setConfidence(maxValue);
//         }
//       } else {
//         setFaceDetected(false);
//       }
//     } catch (error) {
//       console.error("Error during face detection:", error);
//     }
//   };

//   // Start continuous detection
//   const startDetection = () => {
//     if (detectionIntervalRef.current) {
//       clearInterval(detectionIntervalRef.current);
//     }

//     detectionIntervalRef.current = setInterval(() => {
//       detectEmotion();
//     }, 100);
//   };

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       stopVideo();
//     };
//   }, []);

//   // Toggle camera
//   const toggleCamera = async () => {
//     if (!modelsLoaded) {
//       alert("Models are still loading. Please wait...");
//       return;
//     }

//     const newState = !isCameraOn;
//     setIsCameraOn(newState);

//     if (newState) {
//       await startVideo();
//       setIsPlaying(true);
//     } else {
//       stopVideo();
//       setIsPlaying(false);
//       setConfidence(0);
//       setEmotionHistory([]);
//       setShowEmojiDisplay(false);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     }
//   };

//   const togglePlayPause = () => {
//     if (isCameraOn) {
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const playNext = () => {
//     const playlist = getCurrentPlaylist();
//     setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
//   };

//   const playPrevious = () => {
//     const playlist = getCurrentPlaylist();
//     setCurrentSongIndex(
//       (prev) => (prev - 1 + playlist.length) % playlist.length
//     );
//   };

//   const formatTime = (seconds) => {
//     if (!seconds || isNaN(seconds)) return "0:00";
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   const handleSeek = (e) => {
//     const audio = audioRef.current;
//     if (audio) {
//       const seekTime = (e.target.value / 100) * duration;
//       audio.currentTime = seekTime;
//       setCurrentTime(seekTime);
//     }
//   };

//   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

//   // Animation variants for the big emoji display
//   const emojiVariants = {
//     happy: {
//       initial: { scale: 0, rotate: -180 },
//       animate: {
//         scale: [1, 1.1, 1],
//         rotate: 0,
//         transition: {
//           scale: {
//             repeat: Infinity,
//             duration: 1.5,
//             ease: "easeInOut",
//           },
//         },
//       },
//     },
//     sad: {
//       initial: { y: -100, opacity: 0 },
//       animate: {
//         y: [0, -10, 0],
//         opacity: 1,
//         transition: {
//           y: {
//             repeat: Infinity,
//             duration: 2,
//             ease: "easeInOut",
//           },
//         },
//       },
//     },
//     angry: {
//       initial: { scale: 0 },
//       animate: {
//         scale: [1, 1.2, 1],
//         transition: {
//           scale: {
//             repeat: Infinity,
//             duration: 0.5,
//             ease: "easeInOut",
//           },
//         },
//       },
//     },
//     neutral: {
//       initial: { opacity: 0 },
//       animate: {
//         opacity: 1,
//         transition: { duration: 0.5 },
//       },
//     },
//     surprised: {
//       initial: { scale: 0 },
//       animate: {
//         scale: [0, 1.2, 1],
//         transition: { duration: 0.5 },
//       },
//     },
//     fearful: {
//       initial: { x: 0 },
//       animate: {
//         x: [-5, 5, -5],
//         transition: {
//           x: {
//             repeat: Infinity,
//             duration: 0.2,
//             ease: "easeInOut",
//           },
//         },
//       },
//     },
//     disgusted: {
//       initial: { rotate: 0 },
//       animate: {
//         rotate: [-5, 5, -5],
//         transition: {
//           rotate: {
//             repeat: Infinity,
//             duration: 0.5,
//             ease: "easeInOut",
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white font-sans overflow-hidden">
//       {/* Hidden Audio Element */}
//       <audio ref={audioRef} />

//       {/* Animated Background */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       {/* Big Emoji Display Overlay */}
//       <AnimatePresence>
//         {showEmojiDisplay && isCameraOn && faceDetected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
//           >
//             <div className="relative">
//               {/* Background Blur */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl rounded-full"
//               />

//               {/* Emoji Container */}
//               <motion.div
//                 key={currentEmotion}
//                 variants={emojiVariants[currentEmotion]}
//                 initial="initial"
//                 animate="animate"
//                 className="relative z-10 text-center"
//               >
//                 {/* Big Emoji */}
//                 <div className="text-[200px] md:text-[300px] leading-none mb-6">
//                   {emotionConfig[currentEmotion].bigEmoji}
//                 </div>

//                 {/* Emotion Text */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
//                 >
//                   {emotionConfig[currentEmotion].displayText}
//                 </motion.div>

//                 {/* Confidence */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="mt-4 text-lg text-slate-300 font-mono"
//                 >
//                   {(confidence * 100).toFixed(0)}% Confidence
//                 </motion.div>

//                 {/* Sparkles */}
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="absolute -top-4 -right-4"
//                 >
//                   <Sparkles className="w-12 h-12 text-yellow-400" />
//                 </motion.div>
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   className="absolute -bottom-4 -left-4"
//                 >
//                   <Sparkles className="w-10 h-10 text-purple-400" />
//                 </motion.div>
//               </motion.div>

//               {/* Pulse Ring */}
//               <motion.div
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 0.5 }}
//                 exit={{ scale: 1.5, opacity: 0 }}
//                 className="absolute inset-0 border-4 border-purple-400 rounded-full"
//               />
//               <motion.div
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1.2, opacity: 0 }}
//                 exit={{ scale: 1.8, opacity: 0 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute inset-0 border-4 border-cyan-400 rounded-full"
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 relative z-10">
//         {/* Simple Top Bar / Title */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
//             <Music className="w-6 h-6 text-purple-500" /> FaceTunes
//           </h1>

//           {/* Live Status Pill */}
//           <AnimatePresence mode="wait">
//             {isCameraOn && faceDetected && (
//               <motion.div
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0, opacity: 0 }}
//                 className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${emotionConfig[currentEmotion].bgColor} border ${emotionConfig[currentEmotion].borderColor} backdrop-blur-sm`}
//               >
//                 <span className="text-xl">
//                   {emotionConfig[currentEmotion].emoji}
//                 </span>
//                 <span
//                   className={`text-sm font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
//                 >
//                   {emotionConfig[currentEmotion].label}
//                 </span>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {/* LEFT SECTION - Webcam */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div className="relative">
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
//               <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden">
//                 <div className="relative aspect-video bg-slate-900">
//                   {!isCameraOn ? (
//                     <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
//                       {!modelsLoaded ? (
//                         <>
//                           <Loader className="w-12 h-12 md:w-20 md:h-20 text-purple-400 mb-4 animate-spin" />
//                           <p className="text-slate-400 text-base md:text-lg font-medium">
//                             Loading AI Models...
//                           </p>
//                         </>
//                       ) : (
//                         <>
//                           <CameraOff className="w-12 h-12 md:w-20 md:h-20 text-slate-600 mb-4" />
//                           <p className="text-slate-400 text-base md:text-lg font-medium">
//                             Camera is off
//                           </p>
//                           <p className="text-slate-500 text-sm mt-2">
//                             Click below to start detection
//                           </p>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="relative w-full h-full">
//                       <video
//                         ref={videoRef}
//                         autoPlay
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover transform scale-x-[-1]"
//                       />

//                       <canvas
//                         ref={canvasRef}
//                         className="absolute top-0 left-0 w-full h-full transform scale-x-[-1]"
//                       />

//                       {!faceDetected && isDetecting && (
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg z-10">
//                           <p className="text-yellow-400 text-xs md:text-sm whitespace-nowrap">
//                             No face detected
//                           </p>
//                         </div>
//                       )}

//                       <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500/90 rounded-full z-10">
//                         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                         <span className="text-xs font-bold">LIVE</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-4 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
//                   <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                     <button
//                       onClick={toggleCamera}
//                       disabled={!modelsLoaded}
//                       className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
//                         !modelsLoaded
//                           ? "bg-slate-700 cursor-not-allowed opacity-50"
//                           : isCameraOn
//                           ? "bg-red-500 hover:bg-red-600"
//                           : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/50"
//                       }`}
//                     >
//                       {isCameraOn ? (
//                         <>
//                           <CameraOff className="w-5 h-5" /> Stop Camera
//                         </>
//                       ) : (
//                         <>
//                           <Camera className="w-5 h-5" />{" "}
//                           {modelsLoaded ? "Start Detection" : "Loading..."}
//                         </>
//                       )}
//                     </button>

//                     {isCameraOn && faceDetected && (
//                       <div className="flex items-center gap-2 text-slate-400">
//                         <Activity className="w-4 h-4 text-cyan-400" />
//                         <span className="text-sm font-mono">
//                           {(confidence * 100).toFixed(0)}% Confidence
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Emotion History */}
//             <div className="hidden md:block bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <TrendingUp className="w-5 h-5 text-purple-400" />
//                 <h3 className="text-lg font-semibold">Recent Emotions</h3>
//               </div>

//               <div className="space-y-2">
//                 {emotionHistory.length === 0 ? (
//                   <p className="text-slate-500 text-sm text-center py-8">
//                     Start camera to see emotion history
//                   </p>
//                 ) : (
//                   emotionHistory.slice(0, 3).map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
//                     >
//                       <div className="flex items-center gap-3">
//                         <span className="text-xl">
//                           {emotionConfig[item.emotion].emoji}
//                         </span>
//                         <div>
//                           <div className="text-sm font-medium capitalize">
//                             {emotionConfig[item.emotion].label}
//                           </div>
//                           <div className="text-xs text-slate-500">
//                             {item.time}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-xs text-slate-400">
//                         {(item.confidence * 100).toFixed(0)}%
//                       </div>
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT SECTION - Music Player */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div className="relative">
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
//               <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 md:p-8">
//                 {/* Album Art / Visualization */}
//                 <div className="relative mb-6">
//                   <div
//                     className={`aspect-square rounded-xl bg-gradient-to-br ${emotionConfig[currentEmotion].color} p-1 shadow-2xl`}
//                   >
//                     <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden relative">
//                       {isPlaying && isCameraOn ? (
//                         <div className="absolute inset-0 flex items-center justify-center opacity-30">
//                           <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/20 animate-ping"></div>
//                           <div
//                             className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-white/20 animate-ping"
//                             style={{ animationDelay: "0.2s" }}
//                           ></div>
//                         </div>
//                       ) : null}
//                       <Disc
//                         className={`w-24 h-24 md:w-32 md:h-32 text-slate-700 ${
//                           isPlaying && isCameraOn ? "animate-spin-slow" : ""
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   {/* Music Bars */}
//                   {isPlaying && isCameraOn && (
//                     <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-full shadow-lg">
//                       <div className="flex gap-1 items-end h-6">
//                         {[...Array(4)].map((_, i) => (
//                           <motion.div
//                             key={i}
//                             className="w-1 bg-white rounded-full"
//                             animate={{
//                               height: ["40%", "100%", "60%", "80%", "40%"],
//                             }}
//                             transition={{
//                               duration: 0.8,
//                               repeat: Infinity,
//                               delay: i * 0.1,
//                             }}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Song Info */}
//                 <div className="mb-6 text-center md:text-left">
//                   <h2 className="text-2xl font-bold mb-2 truncate text-white">
//                     {currentSong.title}
//                   </h2>
//                   <p className="text-slate-400 truncate text-sm uppercase tracking-wider">
//                     {currentSong.artist}
//                   </p>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="mb-6">
//                   <input
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={progress}
//                     onChange={handleSeek}
//                     className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-purple-500"
//                     style={{
//                       backgroundImage: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(34, 211, 238) ${progress}%, rgb(30, 41, 59) ${progress}%, rgb(30, 41, 59) 100%)`,
//                     }}
//                   />
//                   <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
//                     <span>{formatTime(currentTime)}</span>
//                     <span>{formatTime(duration)}</span>
//                   </div>
//                 </div>

//                 {/* Main Controls */}
//                 <div className="flex items-center justify-between md:justify-center md:gap-8 mb-8">
//                   <button className="p-2 text-slate-400 hover:text-white transition-colors">
//                     <Shuffle className="w-5 h-5" />
//                   </button>

//                   <button
//                     onClick={playPrevious}
//                     className="p-3 hover:bg-slate-800 rounded-full transition-colors text-white"
//                   >
//                     <SkipBack className="w-6 h-6" />
//                   </button>

//                   <button
//                     onClick={togglePlayPause}
//                     disabled={!isCameraOn}
//                     className={`w-16 h-16 flex items-center justify-center rounded-full transition-all shadow-xl ${
//                       isCameraOn
//                         ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-purple-500/50 hover:scale-105 text-white"
//                         : "bg-slate-700 cursor-not-allowed opacity-50 text-slate-400"
//                     }`}
//                   >
//                     {isPlaying ? (
//                       <Pause className="w-8 h-8 fill-current" />
//                     ) : (
//                       <Play className="w-8 h-8 fill-current translate-x-1" />
//                     )}
//                   </button>

//                   <button
//                     onClick={playNext}
//                     className="p-3 hover:bg-slate-800 rounded-full transition-colors text-white"
//                   >
//                     <SkipForward className="w-6 h-6" />
//                   </button>

//                   <button className="p-2 text-slate-400 hover:text-white transition-colors">
//                     <Repeat className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Bottom Controls (Volume & Queue) */}
//                 <div className="flex items-center justify-between pt-4 border-t border-slate-800">
//                   <div className="flex items-center gap-3 w-1/2">
//                     <button
//                       onClick={() => setIsMuted(!isMuted)}
//                       className="text-slate-400 hover:text-white"
//                     >
//                       {isMuted ? (
//                         <VolumeX className="w-5 h-5" />
//                       ) : (
//                         <Volume2 className="w-5 h-5" />
//                       )}
//                     </button>
//                     <input
//                       type="range"
//                       min="0"
//                       max="100"
//                       value={isMuted ? 0 : volume}
//                       onChange={(e) => setVolume(e.target.value)}
//                       className="w-full h-1 bg-slate-700 rounded-full appearance-none cursor-pointer accent-cyan-400"
//                     />
//                   </div>

//                   <button
//                     onClick={() => setShowQueue(!showQueue)}
//                     className={`p-2 rounded-lg transition-colors ${
//                       showQueue
//                         ? "bg-slate-800 text-cyan-400"
//                         : "text-slate-400 hover:text-white"
//                     }`}
//                   >
//                     <List className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Queue / Playlist Overlay */}
//                 <AnimatePresence>
//                   {showQueue && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-4 bg-slate-950/50 rounded-xl overflow-hidden"
//                     >
//                       <div className="p-4 max-h-48 overflow-y-auto custom-scrollbar">
//                         <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">
//                           Current Playlist ({currentEmotion})
//                         </h4>
//                         <div className="space-y-1">
//                           {getCurrentPlaylist().map((song, idx) => (
//                             <button
//                               key={song.id}
//                               onClick={() => setCurrentSongIndex(idx)}
//                               className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-sm transition-colors ${
//                                 currentSongIndex === idx
//                                   ? "bg-slate-800 text-cyan-400"
//                                   : "hover:bg-slate-800/50 text-slate-300"
//                               }`}
//                             >
//                               <span className="truncate pr-4">
//                                 {song.title}
//                               </span>
//                               {currentSongIndex === idx && (
//                                 <Activity className="w-4 h-4" />
//                               )}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </main>

//       {/* Global CSS for Custom Scrollbar and Animations */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(30, 41, 59, 0.5);
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(148, 163, 184, 0.5);
//           border-radius: 4px;
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EmotionDetection;

// perfectly worked

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as faceapi from "@vladmandic/face-api";
// import {
//   Camera,
//   CameraOff,
//   Music,
//   Play,
//   Pause,
//   SkipForward,
//   Volume2,
//   VolumeX,
//   Smile,
//   Frown,
//   Meh,
//   Angry,
//   PartyPopper,
//   Heart,
//   Activity,
//   TrendingUp,
//   SkipBack,
//   Shuffle,
//   Repeat,
//   List,
//   Loader,
//   Disc,
//   Sparkles,
// } from "lucide-react";

// const EmotionDetection = () => {
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [currentEmotion, setCurrentEmotion] = useState("neutral");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(70);
//   const [showQueue, setShowQueue] = useState(false);
//   const [modelsLoaded, setModelsLoaded] = useState(false);
//   const [isDetecting, setIsDetecting] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [emotionHistory, setEmotionHistory] = useState([]);
//   const [confidence, setConfidence] = useState(0);
//   const [faceDetected, setFaceDetected] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [showEmojiDisplay, setShowEmojiDisplay] = useState(false);

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const audioRef = useRef(null);
//   const streamRef = useRef(null);
//   const detectionIntervalRef = useRef(null);
//   const emojiDisplayTimeoutRef = useRef(null);

//   const emotionPlaylists = {
//     happy: [
//       {
//         id: 1,
//         title: "All of it X thumbi Penne",
//         artist: "Gopisunder",
//         file: "/audio/happy/all_of_it_all_x_thumbi_penne.mp3",
//       },
//       {
//         id: 2,
//         title: "Dheema Dheema",
//         artist: "Anirudh_Ravichander",
//         file: "/audio/happy/dheema_song.mp3",
//       },
//       {
//         id: 3,
//         title: "Uff X what makes you Beautiful",
//         artist: "One Direction",
//         file: "/audio/happy/uff_x_what_makes_you_beautiful.mp3",
//       },
//     ],
//     sad: [
//       {
//         id: 4,
//         title: "Kabira",
//         artist: "Pritam",
//         file: "/audio/sad/kabira_lofi.mp3",
//       },
//       {
//         id: 5,
//         title: "Let her Go X Husn",
//         artist: "anuv jain",
//         file: "/audio/sad/let_her_go_x_husn.mp3",
//       },
//       {
//         id: 6,
//         title: "Marappathillai Nenje",
//         artist: "james",
//         file: "/audio/sad/marappathillai_nenje.mp3",
//       },
//     ],
//     angry: [
//       {
//         id: 7,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/angry/vaathi_coming.mp3",
//       },
//       {
//         id: 8,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/angry/oru_maalai.mp3",
//       },
//       {
//         id: 9,
//         title: "Ambersariya",
//         artist: "Unknown",
//         file: "/audio/angry/ambarsariya.mp3",
//       },
//     ],
//     neutral: [
//       {
//         id: 10,
//         title: "Dooreyo x night changes",
//         artist: "shaan rahman X One Direction",
//         file: "/audio/neutral/dooreyo_x_night_changes.mp3",
//       },
//       {
//         id: 11,
//         title: "Oorum Blood",
//         artist: "Sai Abhay shanker",
//         file: "/audio/neutral/oorum_blood.mp3",
//       },
//       {
//         id: 12,
//         title: "Ambarsariya",
//         artist: "Sona Mohapatra",
//         file: "/audio/neutral/ambarsariya.mp3",
//       },
//     ],
//     surprised: [
//       {
//         id: 13,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/emotion_surprise/oru_maalai.mp3",
//       },
//       {
//         id: 14,
//         title: "Uff_X_What_Makes_You_Beautiful",
//         artist: "One_Direction",
//         file: "/audio/emotion_surprise/uff_x_what_makes_you_beautiful.mp3",
//       },
//       {
//         id: 15,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/emotion_surprise/vaathi_coming.mp3",
//       },
//     ],
//     fearful: [
//       {
//         id: 16,
//         title: "Dooreyo x night changes",
//         artist: "shaan rahman X One Direction",
//         file: "/audio/fearful/dooreyo_x_night_changes.mp3",
//       },
//       {
//         id: 17,
//         title: "Kabira",
//         artist: "Pritam",
//         file: "/audio/fearful/kabira_lofi.mp3",
//       },
//       {
//         id: 18,
//         title: "Let her Go X Husn",
//         artist: "anuv jain",
//         file: "/audio/fearful/let_her_go_x_husn.mp3",
//       },
//     ],
//     disgusted: [
//       {
//         id: 19,
//         title: "Dheema Dheema",
//         artist: "Anirudh_Ravichander",
//         file: "/audio/disgusted/dheema_song.mp3",
//       },
//       {
//         id: 20,
//         title: "Oru Maalai",
//         artist: "Karthik X Harris Jayaraj",
//         file: "/audio/disgusted/oru_maalai.mp3",
//       },
//       {
//         id: 21,
//         title: "Vaathi Comming",
//         artist: "Anirudh_Ravichander X vijay",
//         file: "/audio/disgusted/vaathi_coming.mp3",
//       },
//     ],
//   };

//   const emotionConfig = {
//     happy: {
//       emoji: "😊",
//       bigEmoji: "😊",
//       color: "from-yellow-400 to-orange-400",
//       bgColor: "bg-yellow-500/10",
//       borderColor: "border-yellow-500/30",
//       icon: <Smile className="w-5 h-5" />,
//       label: "Happy",
//       displayText: "Feeling Happy!",
//     },
//     sad: {
//       emoji: "😢",
//       bigEmoji: "😢",
//       color: "from-blue-400 to-indigo-400",
//       bgColor: "bg-blue-500/10",
//       borderColor: "border-blue-500/30",
//       icon: <Frown className="w-5 h-5" />,
//       label: "Sad",
//       displayText: "Feeling Sad...",
//     },
//     angry: {
//       emoji: "😠",
//       bigEmoji: "😠",
//       color: "from-red-400 to-pink-400",
//       bgColor: "bg-red-500/10",
//       borderColor: "border-red-500/30",
//       icon: <Angry className="w-5 h-5" />,
//       label: "Angry",
//       displayText: "Feeling Angry!",
//     },
//     neutral: {
//       emoji: "😐",
//       bigEmoji: "😐",
//       color: "from-gray-400 to-slate-400",
//       bgColor: "bg-gray-500/10",
//       borderColor: "border-gray-500/30",
//       icon: <Meh className="w-5 h-5" />,
//       label: "Neutral",
//       displayText: "Neutral Mood",
//     },
//     surprised: {
//       emoji: "😮",
//       bigEmoji: "😮",
//       color: "from-purple-400 to-pink-400",
//       bgColor: "bg-purple-500/10",
//       borderColor: "border-purple-500/30",
//       icon: <PartyPopper className="w-5 h-5" />,
//       label: "Surprised",
//       displayText: "Surprised!",
//     },
//     fearful: {
//       emoji: "😨",
//       bigEmoji: "😨",
//       color: "from-indigo-400 to-purple-400",
//       bgColor: "bg-indigo-500/10",
//       borderColor: "border-indigo-500/30",
//       icon: <Heart className="w-5 h-5" />,
//       label: "Fearful",
//       displayText: "Feeling Anxious",
//     },
//     disgusted: {
//       emoji: "🤢",
//       bigEmoji: "🤢",
//       color: "from-green-400 to-emerald-400",
//       bgColor: "bg-green-500/10",
//       borderColor: "border-green-500/30",
//       icon: <Meh className="w-5 h-5" />,
//       label: "Disgusted",
//       displayText: "Feeling Disgusted",
//     },
//   };

//   const getCurrentPlaylist = () =>
//     emotionPlaylists[currentEmotion] || emotionPlaylists.neutral;
//   const currentSong = getCurrentPlaylist()[currentSongIndex] || {
//     title: "No song",
//     artist: "Unknown",
//     file: "",
//   };

//   const triggerEmojiDisplay = () => {
//     setShowEmojiDisplay(true);
//     if (emojiDisplayTimeoutRef.current)
//       clearTimeout(emojiDisplayTimeoutRef.current);
//     emojiDisplayTimeoutRef.current = setTimeout(
//       () => setShowEmojiDisplay(false),
//       3000
//     );
//   };

//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         const MODEL_URL = "/models";
//         await Promise.all([
//           faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//           faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
//           faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
//           faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
//         ]);
//         setModelsLoaded(true);
//       } catch (error) {
//         console.error("Error loading models:", error);
//       }
//     };
//     loadModels();
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const updateDuration = () => setDuration(audio.duration);
//     const handleEnded = () => playNext();
//     audio.addEventListener("timeupdate", updateTime);
//     audio.addEventListener("loadedmetadata", updateDuration);
//     audio.addEventListener("ended", handleEnded);
//     return () => {
//       audio.removeEventListener("timeupdate", updateTime);
//       audio.removeEventListener("loadedmetadata", updateDuration);
//       audio.removeEventListener("ended", handleEnded);
//     };
//   }, [currentSongIndex, currentEmotion]);

//   useEffect(() => {
//     if (audioRef.current && currentSong.file) {
//       audioRef.current.src = currentSong.file;
//       if (isPlaying && isCameraOn) audioRef.current.play().catch(() => {});
//     }
//   }, [currentSong.file]);

//   useEffect(() => {
//     if (audioRef.current) {
//       if (isPlaying && isCameraOn) audioRef.current.play().catch(() => {});
//       else audioRef.current.pause();
//     }
//   }, [isPlaying, isCameraOn]);

//   useEffect(() => {
//     if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume / 100;
//   }, [volume, isMuted]);

//   const startVideo = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user" },
//         audio: false,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         streamRef.current = stream;
//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current.play();
//           setIsDetecting(true);
//           startDetection();
//         };
//       }
//     } catch (err) {
//       alert("Camera access denied or unavailable.");
//     }
//   };

//   const stopVideo = () => {
//     if (streamRef.current)
//       streamRef.current.getTracks().forEach((t) => t.stop());
//     if (videoRef.current) videoRef.current.srcObject = null;
//     if (detectionIntervalRef.current)
//       clearInterval(detectionIntervalRef.current);
//     if (emojiDisplayTimeoutRef.current)
//       clearTimeout(emojiDisplayTimeoutRef.current);
//     setIsDetecting(false);
//     setFaceDetected(false);
//     setShowEmojiDisplay(false);
//   };

//   const detectEmotion = async () => {
//     if (!videoRef.current || !canvasRef.current || !modelsLoaded) return;

//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     // 1. Get current video dimensions
//     const displaySize = {
//       width: video.videoWidth,
//       height: video.videoHeight,
//     };

//     // 2. Match canvas dimensions to video
//     faceapi.matchDimensions(canvas, displaySize);

//     try {
//       // 3. Detect faces
//       const detections = await faceapi
//         .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//         .withFaceLandmarks()
//         .withFaceExpressions();

//       const ctx = canvas.getContext("2d");

//       // Clear the canvas for the new frame
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       if (detections.length > 0) {
//         setFaceDetected(true);

//         // 4. Resize detections to match display size (CRITICAL)
//         const resizedDetections = faceapi.resizeResults(
//           detections,
//           displaySize
//         );

//         // 5. Draw detections
//         // We do NOT flip the context here. We rely on CSS to flip the canvas.
//         faceapi.draw.drawDetections(canvas, resizedDetections);
//         faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

//         // --- Emotion Logic (Unchanged) ---
//         const expressions = detections[0].expressions;
//         let maxValue = 0;
//         let dominantEmotion = "neutral";

//         Object.entries(expressions).forEach(([emotion, value]) => {
//           if (value > maxValue) {
//             maxValue = value;
//             dominantEmotion = emotion;
//           }
//         });

//         if (maxValue > 0.5 && dominantEmotion !== currentEmotion) {
//           setCurrentEmotion(dominantEmotion);
//           setConfidence(maxValue);
//           setCurrentSongIndex(0);
//           triggerEmojiDisplay();

//           setEmotionHistory((prev) => [
//             {
//               emotion: dominantEmotion,
//               time: new Date().toLocaleTimeString(),
//               confidence: maxValue,
//             },
//             ...prev.slice(0, 9),
//           ]);
//         } else {
//           setConfidence(maxValue);
//         }
//       } else {
//         setFaceDetected(false);
//       }
//     } catch (error) {
//       console.error("Error during face detection:", error);
//     }
//   };

//   const startDetection = () => {
//     if (detectionIntervalRef.current)
//       clearInterval(detectionIntervalRef.current);
//     detectionIntervalRef.current = setInterval(detectEmotion, 100);
//   };

//   useEffect(() => () => stopVideo(), []);

//   const toggleCamera = async () => {
//     if (!modelsLoaded) return alert("Models loading...");
//     const newState = !isCameraOn;
//     setIsCameraOn(newState);
//     if (newState) {
//       await startVideo();
//       setIsPlaying(true);
//     } else {
//       stopVideo();
//       setIsPlaying(false);
//       setConfidence(0);
//       setEmotionHistory([]);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     }
//   };

//   const togglePlayPause = () => isCameraOn && setIsPlaying(!isPlaying);
//   const playNext = () =>
//     setCurrentSongIndex((i) => (i + 1) % getCurrentPlaylist().length);
//   const playPrevious = () =>
//     setCurrentSongIndex(
//       (i) => (i - 1 + getCurrentPlaylist().length) % getCurrentPlaylist().length
//     );

//   const formatTime = (s) =>
//     isNaN(s)
//       ? "0:00"
//       : `${Math.floor(s / 60)}:${Math.floor(s % 60)
//           .toString()
//           .padStart(2, "0")}`;
//   const handleSeek = (e) => {
//     if (audioRef.current) {
//       const time = (e.target.value / 100) * duration;
//       audioRef.current.currentTime = time;
//       setCurrentTime(time);
//     }
//   };
//   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

//   const emojiVariants = {
//     happy: {
//       initial: { scale: 0, rotate: -180 },
//       animate: {
//         scale: [1, 1.1, 1],
//         rotate: 0,
//         transition: { scale: { repeat: Infinity, duration: 1.5 } },
//       },
//     },
//     sad: {
//       initial: { y: -100, opacity: 0 },
//       animate: {
//         y: [0, -10, 0],
//         opacity: 1,
//         transition: { y: { repeat: Infinity, duration: 2 } },
//       },
//     },
//     angry: {
//       initial: { scale: 0 },
//       animate: {
//         scale: [1, 1.2, 1],
//         transition: { scale: { repeat: Infinity, duration: 0.5 } },
//       },
//     },
//     neutral: { initial: { opacity: 0 }, animate: { opacity: 1 } },
//     surprised: {
//       initial: { scale: 0 },
//       animate: { scale: [0, 1.3, 1], transition: { duration: 0.5 } },
//     },
//     fearful: {
//       initial: { x: 0 },
//       animate: {
//         x: [-8, 8, -8],
//         transition: { repeat: Infinity, duration: 0.2 },
//       },
//     },
//     disgusted: {
//       initial: { rotate: 0 },
//       animate: {
//         rotate: [-10, 10, -10],
//         transition: { repeat: Infinity, duration: 0.5 },
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white font-sans">
//       <audio ref={audioRef} />

//       {/* Background Ambience */}
//       <div className="fixed inset-0 -z-10 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       {/* Full Screen Emoji Overlay (When Emotion Changes) */}
//       <AnimatePresence>
//         {showEmojiDisplay && isCameraOn && faceDetected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
//           >
//             <div className="relative">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-3xl rounded-full"
//               />
//               <motion.div
//                 key={currentEmotion}
//                 variants={emojiVariants[currentEmotion]}
//                 initial="initial"
//                 animate="animate"
//                 className="text-center"
//               >
//                 <div className="text-[120px] sm:text-[200px] md:text-[280px] leading-none mb-4">
//                   {emotionConfig[currentEmotion].bigEmoji}
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
//                 >
//                   {emotionConfig[currentEmotion].displayText}
//                 </motion.div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="mt-4 text-base sm:text-lg text-slate-300 font-mono"
//                 >
//                   {(confidence * 100).toFixed(0)}% Confidence
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
//         {/* Top Bar Status */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <AnimatePresence mode="wait">
//             {isCameraOn && faceDetected && (
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 className={`flex items-center gap-3 px-4 py-2 rounded-full ${emotionConfig[currentEmotion].bgColor} border ${emotionConfig[currentEmotion].borderColor}`}
//               >
//                 <span className="text-2xl">
//                   {emotionConfig[currentEmotion].emoji}
//                 </span>
//                 <span
//                   className={`text-base font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
//                 >
//                   {emotionConfig[currentEmotion].label}
//                 </span>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* --- WEBCAM SECTION (UPDATED) --- */}
//           <div className="space-y-6 order-1">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl" />
//               <div className="relative bg-slate-900/70 backdrop-blur-md">
//                 {/* Video Container */}
//                 <div className="aspect-video relative bg-black overflow-hidden rounded-t-3xl">
//                   {!isCameraOn ? (
//                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
//                       {!modelsLoaded ? (
//                         <>
//                           <Loader className="w-16 h-16 text-purple-400 animate-spin mb-4" />
//                           <p className="text-lg">Loading AI Models...</p>
//                         </>
//                       ) : (
//                         <>
//                           <CameraOff className="w-20 h-20 text-slate-500 mb-4" />
//                           <p className="text-lg">Camera Off</p>
//                           <p className="text-sm text-slate-400 mt-2">
//                             Tap below to start
//                           </p>
//                         </>
//                       )}
//                     </div>
//                   ) : (
//                     <>
//                       {/* CRITICAL UPDATE:
//                          Both Video and Canvas must have `absolute inset-0`
//                          and the exact same scale/object-fit properties.
//                       */}
//                       <video
//                         ref={videoRef}
//                         autoPlay
//                         muted
//                         playsInline
//                         className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
//                       />
//                       <canvas
//                         ref={canvasRef}
//                         className="absolute inset-0 w-full h-full object-cover scale-x-[-1] pointer-events-none"
//                       />

//                       {/* No Face Detected Overlay */}
//                       {!faceDetected && isDetecting && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
//                           <p className="text-yellow-400 text-lg bg-black/70 px-6 py-3 rounded-lg backdrop-blur-sm border border-yellow-400/30">
//                             No face detected
//                           </p>
//                         </div>
//                       )}

//                       {/* Live Indicator */}
//                       <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 px-4 py-2 rounded-full z-10">
//                         <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
//                         <span className="text-sm font-bold">LIVE</span>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Controls Area */}
//                 <div className="p-5 bg-slate-900/80 border-t border-slate-800">
//                   <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                     <button
//                       onClick={toggleCamera}
//                       disabled={!modelsLoaded}
//                       className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold transition-all ${
//                         !modelsLoaded
//                           ? "bg-slate-700 opacity-60"
//                           : isCameraOn
//                           ? "bg-red-600 hover:bg-red-700"
//                           : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl hover:shadow-purple-600/50"
//                       }`}
//                     >
//                       {isCameraOn ? (
//                         <>
//                           <CameraOff className="w-6 h-6" /> Stop Camera
//                         </>
//                       ) : (
//                         <>
//                           <Camera className="w-6 h-6" /> Start Detection
//                         </>
//                       )}
//                     </button>
//                     {isCameraOn && faceDetected && (
//                       <div className="flex items-center gap-2 text-cyan-400">
//                         <Activity className="w-5 h-5" />
//                         <span className="font-mono">
//                           {(confidence * 100).toFixed(0)}% Confidence
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Emotion History */}
//             <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-5">
//               <div className="flex items-center gap-3 mb-4">
//                 <TrendingUp className="w-6 h-6 text-purple-400" />
//                 <h3 className="text-xl font-semibold">Recent Emotions</h3>
//               </div>
//               <div className="space-y-3">
//                 {emotionHistory.length === 0 ? (
//                   <p className="text-center text-slate-400 py-6">
//                     Start camera to track emotions
//                   </p>
//                 ) : (
//                   emotionHistory.slice(0, 5).map((item, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60"
//                     >
//                       <div className="flex items-center gap-4">
//                         <span className="text-2xl">
//                           {emotionConfig[item.emotion].emoji}
//                         </span>
//                         <div>
//                           <div className="font-medium capitalize">
//                             {emotionConfig[item.emotion].label}
//                           </div>
//                           <div className="text-xs text-slate-400">
//                             {item.time}
//                           </div>
//                         </div>
//                       </div>
//                       <span className="text-sm text-slate-300">
//                         {(item.confidence * 100).toFixed(0)}%
//                       </span>
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* --- MUSIC PLAYER SECTION (UNCHANGED) --- */}
//           <div className="space-y-6 order-2">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 blur-2xl" />
//               <div className="relative bg-slate-900/70 backdrop-blur-md p-6 sm:p-8">
//                 {/* Album Art */}
//                 <div className="flex justify-center mb-8">
//                   <div
//                     className={`w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br ${emotionConfig[currentEmotion].color} p-2 shadow-2xl`}
//                   >
//                     <div className="w-full h-full rounded-xl bg-slate-950/80 flex items-center justify-center relative overflow-hidden">
//                       {isPlaying && isCameraOn && (
//                         <div className="absolute inset-0 flex items-center justify-center opacity-40">
//                           <div className="w-32 h-32 rounded-full border-4 border-white/30 animate-ping" />
//                           <div className="absolute w-24 h-24 rounded-full border-4 border-white/30 animate-ping delay-200" />
//                         </div>
//                       )}
//                       <Disc
//                         className={`w-32 h-32 sm:w-40 sm:h-40 text-slate-600 ${
//                           isPlaying && isCameraOn ? "animate-spin-slow" : ""
//                         }`}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Song Info */}
//                 <div className="text-center mb-8">
//                   <h2 className="text-2xl sm:text-3xl font-bold mb-2">
//                     {currentSong.title}
//                   </h2>
//                   <p className="text-lg text-slate-400 uppercase tracking-wider">
//                     {currentSong.artist}
//                   </p>
//                 </div>

//                 {/* Progress */}
//                 <div className="mb-8">
//                   <input
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={progress}
//                     onChange={handleSeek}
//                     className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-800 accent-purple-500"
//                     style={{
//                       background: `linear-gradient(to right, #a855f7 0%, #22d3ee ${progress}%, #1e293b ${progress}%, #1e293b 100%)`,
//                     }}
//                   />
//                   <div className="flex justify-between text-sm text-slate-400 mt-3 font-mono">
//                     <span>{formatTime(currentTime)}</span>
//                     <span>{formatTime(duration)}</span>
//                   </div>
//                 </div>

//                 {/* Controls */}
//                 <div className="flex items-center justify-center gap-6 mb-8">
//                   <button className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
//                     <Shuffle className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={playPrevious}
//                     className="p-4 rounded-full hover:bg-slate-800"
//                   >
//                     <SkipBack className="w-8 h-8" />
//                   </button>
//                   <button
//                     onClick={togglePlayPause}
//                     disabled={!isCameraOn}
//                     className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 ${
//                       isCameraOn
//                         ? "bg-gradient-to-r from-purple-600 to-cyan-600"
//                         : "bg-slate-700 opacity-50"
//                     }`}
//                   >
//                     {isPlaying ? (
//                       <Pause className="w-10 h-10" />
//                     ) : (
//                       <Play className="w-10 h-10 ml-1" />
//                     )}
//                   </button>
//                   <button
//                     onClick={playNext}
//                     className="p-4 rounded-full hover:bg-slate-800"
//                   >
//                     <SkipForward className="w-8 h-8" />
//                   </button>
//                   <button className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
//                     <Repeat className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Volume + Queue */}
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800">
//                   <div className="flex items-center gap-4 w-full sm:w-auto">
//                     <button
//                       onClick={() => setIsMuted(!isMuted)}
//                       className="text-slate-300 hover:text-white"
//                     >
//                       {isMuted ? (
//                         <VolumeX className="w-7 h-7" />
//                       ) : (
//                         <Volume2 className="w-7 h-7" />
//                       )}
//                     </button>
//                     <input
//                       type="range"
//                       min="0"
//                       max="100"
//                       value={isMuted ? 0 : volume}
//                       onChange={(e) => setVolume(e.target.value)}
//                       className="flex-1 h-2 rounded-full bg-slate-700 accent-cyan-500"
//                     />
//                   </div>
//                   <button
//                     onClick={() => setShowQueue(!showQueue)}
//                     className={`p-4 rounded-xl ${
//                       showQueue
//                         ? "bg-slate-800 text-cyan-400"
//                         : "text-slate-400 hover:text-white"
//                     }`}
//                   >
//                     <List className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Queue */}
//                 <AnimatePresence>
//                   {showQueue && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       className="mt-6 bg-slate-950/70 rounded-2xl p-5 max-h-64 overflow-y-auto custom-scrollbar"
//                     >
//                       <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">
//                         Playlist — {currentEmotion}
//                       </h4>
//                       {getCurrentPlaylist().map((song, idx) => (
//                         <button
//                           key={song.id}
//                           onClick={() => setCurrentSongIndex(idx)}
//                           className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left transition-colors ${
//                             idx === currentSongIndex
//                               ? "bg-purple-900/50 text-cyan-300"
//                               : "hover:bg-slate-800/50"
//                           }`}
//                         >
//                           <span className="truncate pr-4">{song.title}</span>
//                           {idx === currentSongIndex && (
//                             <Activity className="w-5 h-5 text-cyan-400" />
//                           )}
//                         </button>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(30, 41, 59, 0.5);
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(148, 163, 184, 0.5);
//           border-radius: 3px;
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EmotionDetection;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as faceapi from "@vladmandic/face-api";
import {
  Camera,
  CameraOff,
  Music,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Smile,
  Frown,
  Meh,
  Angry,
  PartyPopper,
  Heart,
  Activity,
  TrendingUp,
  SkipBack,
  Shuffle,
  Repeat,
  List,
  Loader,
  Disc,
  Sparkles,
} from "lucide-react";

const EmotionDetection = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState("neutral");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [showQueue, setShowQueue] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [emotionHistory, setEmotionHistory] = useState([]);
  const [confidence, setConfidence] = useState(0);
  const [faceDetected, setFaceDetected] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showEmojiDisplay, setShowEmojiDisplay] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const emojiDisplayTimeoutRef = useRef(null);

  const emotionPlaylists = {
    happy: [
      {
        id: 1,
        title: "All of it X thumbi Penne",
        artist: "Gopisunder",
        file: "/audio/happy/all_of_it_all_x_thumbi_penne.mp3",
      },
      {
        id: 2,
        title: "Dheema Dheema",
        artist: "Anirudh_Ravichander",
        file: "/audio/happy/dheema_song.mp3",
      },
      {
        id: 3,
        title: "Uff X what makes you Beautiful",
        artist: "One Direction,Benny Dayal, Harshdeep Kaur",
        file: "/audio/happy/uff_x_what_makes_you_beautiful.mp3",
      },
    ],
    sad: [
      {
        id: 4,
        title: "Kabira",
        artist: "Pritam,Tochi Raina",
        file: "/audio/sad/kabira_lofi.mp3",
      },
      {
        id: 5,
        title: "Let her Go X Husn",
        artist: "anuv jain",
        file: "/audio/sad/let_her_go_x_husn.mp3",
      },
      {
        id: 6,
        title: "Marappathillai Nenje",
        artist: "Leon James,Sudharshan Ashok,Ko Sesha",
        file: "/audio/sad/marappathillai_nenje.mp3",
      },
    ],
    angry: [
      {
        id: 7,
        title: "Vaathi Comming",
        artist: "Anirudh_Ravichander, vijay",
        file: "/audio/angry/vaathi_coming.mp3",
      },
      {
        id: 8,
        title: "Oru Maalai",
        artist: "Karthik, Harris Jayaraj",
        file: "/audio/angry/oru_maalai.mp3",
      },
      {
        id: 9,
        title: "Ambersariya",
        artist: "Sona Mohapatra,Ram Sampath,Munna Bheeman",
        file: "/audio/angry/ambarsariya.mp3",
      },
    ],
    neutral: [
      {
        id: 10,
        title: "Oorum Blood",
        artist: "Sai Abhay shanker",
        file: "/audio/neutral/oorum_blood.mp3",
      },
      {
        id: 11,
        title: "Dooreyo x night changes",
        artist: "shaan rahman X One Direction",
        file: "/audio/neutral/dooreyo_x_night_changes.mp3",
      },
      {
        id: 12,
        title: "Ambarsariya",
        artist: "Sona Mohapatra ,Ram Sampath,Munna Bheeman",
        file: "/audio/neutral/ambarsariya.mp3",
      },
    ],
    surprised: [
      {
        id: 13,
        title: "Oru Maalai",
        artist: "Karthik X Harris Jayaraj",
        file: "/audio/emotion_surprise/oru_maalai.mp3",
      },
      {
        id: 14,
        title: "Uff_X_What_Makes_You_Beautiful",
        artist: "One_Direction,Benny_Dayal, Harshdeep_Kaur",
        file: "/audio/emotion_surprise/uff_x_what_makes_you_beautiful.mp3",
      },
      {
        id: 15,
        title: "Vaathi Comming",
        artist: "Anirudh_Ravichander X vijay",
        file: "/audio/emotion_surprise/vaathi_coming.mp3",
      },
    ],
    fearful: [
      {
        id: 16,
        title: "Dooreyo x night changes",
        artist: "shaan rahman X One Direction",
        file: "/audio/fearful/dooreyo_x_night_changes.mp3",
      },
      {
        id: 17,
        title: "Kabira",
        artist: "Pritam,Tochi Raina",
        file: "/audio/fearful/kabira_lofi.mp3",
      },
      {
        id: 18,
        title: "Let her Go X Husn",
        artist: "anuv jain,Passaner",
        file: "/audio/fearful/let_her_go_x_husn.mp3",
      },
    ],
    disgusted: [
      {
        id: 19,
        title: "Dheema Dheema",
        artist: "Anirudh_Ravichander",
        file: "/audio/disgusted/dheema_song.mp3",
      },
      {
        id: 20,
        title: "Oru Maalai",
        artist: "Karthik X Harris Jayaraj",
        file: "/audio/disgusted/oru_maalai.mp3",
      },
      {
        id: 21,
        title: "Vaathi Comming",
        artist: "Anirudh_Ravichander X vijay",
        file: "/audio/disgusted/vaathi_coming.mp3",
      },
    ],
  };

  const emotionConfig = {
    happy: {
      emoji: "😊",
      bigEmoji: "😊",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      icon: <Smile className="w-5 h-5" />,
      label: "Happy",
      displayText: "Feeling Happy!",
    },
    sad: {
      emoji: "😢",
      bigEmoji: "😢",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      icon: <Frown className="w-5 h-5" />,
      label: "Sad",
      displayText: "Feeling Sad...",
    },
    angry: {
      emoji: "😠",
      bigEmoji: "😠",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      icon: <Angry className="w-5 h-5" />,
      label: "Angry",
      displayText: "Feeling Angry!",
    },
    neutral: {
      emoji: "😐",
      bigEmoji: "😐",
      color: "from-gray-400 to-slate-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      icon: <Meh className="w-5 h-5" />,
      label: "Neutral",
      displayText: "Neutral Mood",
    },
    surprised: {
      emoji: "😮",
      bigEmoji: "😮",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      icon: <PartyPopper className="w-5 h-5" />,
      label: "Surprised",
      displayText: "Surprised!",
    },
    fearful: {
      emoji: "😨",
      bigEmoji: "😨",
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      icon: <Heart className="w-5 h-5" />,
      label: "Fearful",
      displayText: "Feeling Anxious",
    },
    disgusted: {
      emoji: "🤢",
      bigEmoji: "🤢",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      icon: <Meh className="w-5 h-5" />,
      label: "Disgusted",
      displayText: "Feeling Disgusted",
    },
  };

  const getCurrentPlaylist = () =>
    emotionPlaylists[currentEmotion] || emotionPlaylists.neutral;
  const currentSong = getCurrentPlaylist()[currentSongIndex] || {
    title: "No song",
    artist: "Unknown",
    file: "",
  };

  const triggerEmojiDisplay = () => {
    setShowEmojiDisplay(true);
    if (emojiDisplayTimeoutRef.current)
      clearTimeout(emojiDisplayTimeoutRef.current);
    emojiDisplayTimeoutRef.current = setTimeout(
      () => setShowEmojiDisplay(false),
      3000
    );
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = "/models";
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true);
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };
    loadModels();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => playNext();
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, currentEmotion]);

  useEffect(() => {
    if (audioRef.current && currentSong.file) {
      audioRef.current.src = currentSong.file;
      if (isPlaying && isCameraOn) audioRef.current.play().catch(() => {});
    }
  }, [currentSong.file]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && isCameraOn) audioRef.current.play().catch(() => {});
      else audioRef.current.pause();
    }
  }, [isPlaying, isCameraOn]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume / 100;
  }, [volume, isMuted]);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setIsDetecting(true);
          startDetection();
        };
      }
    } catch (err) {
      alert("Camera access denied or unavailable.");
    }
  };

  const stopVideo = () => {
    if (streamRef.current)
      streamRef.current.getTracks().forEach((t) => t.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    if (detectionIntervalRef.current)
      clearInterval(detectionIntervalRef.current);
    if (emojiDisplayTimeoutRef.current)
      clearTimeout(emojiDisplayTimeoutRef.current);
    setIsDetecting(false);
    setFaceDetected(false);
    setShowEmojiDisplay(false);
  };

  const detectEmotion = async () => {
    if (!videoRef.current || !canvasRef.current || !modelsLoaded) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // 1. Get current video dimensions
    const displaySize = {
      width: video.videoWidth,
      height: video.videoHeight,
    };

    // 2. Match canvas dimensions to video
    faceapi.matchDimensions(canvas, displaySize);

    try {
      // 3. Detect faces
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const ctx = canvas.getContext("2d");

      // Clear the canvas for the new frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (detections.length > 0) {
        setFaceDetected(true);

        // 4. Resize detections to match display size (CRITICAL)
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        // 5. Draw detections
        // We do NOT flip the context here. We rely on CSS to flip the canvas.
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

        // --- Emotion Logic (Unchanged) ---
        const expressions = detections[0].expressions;
        let maxValue = 0;
        let dominantEmotion = "neutral";

        Object.entries(expressions).forEach(([emotion, value]) => {
          if (value > maxValue) {
            maxValue = value;
            dominantEmotion = emotion;
          }
        });

        if (maxValue > 0.5 && dominantEmotion !== currentEmotion) {
          setCurrentEmotion(dominantEmotion);
          setConfidence(maxValue);
          setCurrentSongIndex(0);
          triggerEmojiDisplay();

          setEmotionHistory((prev) => [
            {
              emotion: dominantEmotion,
              time: new Date().toLocaleTimeString(),
              confidence: maxValue,
            },
            ...prev.slice(0, 9),
          ]);
        } else {
          setConfidence(maxValue);
        }
      } else {
        setFaceDetected(false);
      }
    } catch (error) {
      console.error("Error during face detection:", error);
    }
  };

  const startDetection = () => {
    if (detectionIntervalRef.current)
      clearInterval(detectionIntervalRef.current);
    detectionIntervalRef.current = setInterval(detectEmotion, 100);
  };

  useEffect(() => () => stopVideo(), []);

  const toggleCamera = async () => {
    if (!modelsLoaded) return alert("Models loading...");
    const newState = !isCameraOn;
    setIsCameraOn(newState);
    if (newState) {
      await startVideo();
      setIsPlaying(true);
    } else {
      stopVideo();
      setIsPlaying(false);
      setConfidence(0);
      setEmotionHistory([]);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const togglePlayPause = () => isCameraOn && setIsPlaying(!isPlaying);
  const playNext = () =>
    setCurrentSongIndex((i) => (i + 1) % getCurrentPlaylist().length);
  const playPrevious = () =>
    setCurrentSongIndex(
      (i) => (i - 1 + getCurrentPlaylist().length) % getCurrentPlaylist().length
    );

  const formatTime = (s) =>
    isNaN(s)
      ? "0:00"
      : `${Math.floor(s / 60)}:${Math.floor(s % 60)
          .toString()
          .padStart(2, "0")}`;
  const handleSeek = (e) => {
    if (audioRef.current) {
      const time = (e.target.value / 100) * duration;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const emojiVariants = {
    happy: {
      initial: { scale: 0, rotate: -180 },
      animate: {
        scale: [1, 1.1, 1],
        rotate: 0,
        transition: { scale: { repeat: Infinity, duration: 1.5 } },
      },
    },
    sad: {
      initial: { y: -100, opacity: 0 },
      animate: {
        y: [0, -10, 0],
        opacity: 1,
        transition: { y: { repeat: Infinity, duration: 2 } },
      },
    },
    angry: {
      initial: { scale: 0 },
      animate: {
        scale: [1, 1.2, 1],
        transition: { scale: { repeat: Infinity, duration: 0.5 } },
      },
    },
    neutral: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    surprised: {
      initial: { scale: 0 },
      animate: { scale: [0, 1.3, 1], transition: { duration: 0.5 } },
    },
    fearful: {
      initial: { x: 0 },
      animate: {
        x: [-8, 8, -8],
        transition: { repeat: Infinity, duration: 0.2 },
      },
    },
    disgusted: {
      initial: { rotate: 0 },
      animate: {
        rotate: [-10, 10, -10],
        transition: { repeat: Infinity, duration: 0.5 },
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white font-sans">
      <audio ref={audioRef} />

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Full Screen Emoji Overlay (When Emotion Changes) */}
      <AnimatePresence>
        {showEmojiDisplay && isCameraOn && faceDetected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-3xl rounded-full"
              />
              <motion.div
                key={currentEmotion}
                variants={emojiVariants[currentEmotion]}
                initial="initial"
                animate="animate"
                className="text-center"
              >
                <div className="text-[120px] sm:text-[200px] md:text-[280px] leading-none mb-4">
                  {emotionConfig[currentEmotion].bigEmoji}
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
                >
                  {emotionConfig[currentEmotion].displayText}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-base sm:text-lg text-slate-300 font-mono"
                >
                  {(confidence * 100).toFixed(0)}% Confidence
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Top Bar Status */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <AnimatePresence mode="wait">
            {isCameraOn && faceDetected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-full ${emotionConfig[currentEmotion].bgColor} border ${emotionConfig[currentEmotion].borderColor}`}
              >
                <span className="text-2xl">
                  {emotionConfig[currentEmotion].emoji}
                </span>
                <span
                  className={`text-base font-bold bg-gradient-to-r ${emotionConfig[currentEmotion].color} bg-clip-text text-transparent`}
                >
                  {emotionConfig[currentEmotion].label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- WEBCAM SECTION (UPDATED) --- */}
          <div className="space-y-6 order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl" />
              <div className="relative bg-slate-900/70 backdrop-blur-md">
                {/* Video Container */}
                <div className="aspect-video relative bg-black overflow-hidden rounded-t-3xl sm:rounded-t-3xl md:rounded-t-3xl">
                  {!isCameraOn ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      {!modelsLoaded ? (
                        <>
                          <Loader className="w-16 h-16 text-purple-400 animate-spin mb-4" />
                          <p className="text-lg">Loading AI Models...</p>
                        </>
                      ) : (
                        <>
                          <CameraOff className="w-20 h-20 text-slate-500 mb-4" />
                          <p className="text-lg">Camera Off</p>
                          <p className="text-sm text-slate-400 mt-2">
                            Tap below to start
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <>
                      {/* CRITICAL UPDATE: 
                         Both Video and Canvas must have `absolute inset-0` 
                         and the exact same scale/object-fit properties.
                      */}
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                      />
                      <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full object-cover scale-x-[-1] pointer-events-none"
                      />

                      {/* No Face Detected Overlay */}
                      {!faceDetected && isDetecting && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
                          <p className="text-yellow-400 text-lg bg-black/70 px-6 py-3 rounded-lg backdrop-blur-sm border border-yellow-400/30">
                            No face detected
                          </p>
                        </div>
                      )}

                      {/* Live Indicator */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 px-4 py-2 rounded-full z-10">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                        <span className="text-sm font-bold">LIVE</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Controls Area - UPDATED FOR MOBILE */}
                <div className="p-5 bg-slate-900/80 border-t border-slate-800">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Mobile: Round Button, Desktop: Rectangular */}
                    <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                      <button
                        onClick={toggleCamera}
                        disabled={!modelsLoaded}
                        className={`
                          ${
                            !modelsLoaded ? "opacity-60 cursor-not-allowed" : ""
                          }
                          ${
                            isCameraOn
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl hover:shadow-purple-600/50"
                          }
                          flex items-center justify-center gap-3
                          rounded-full sm:rounded-2xl
                          w-16 h-16 sm:w-auto sm:h-auto
                          sm:px-8 sm:py-4
                          transition-all
                          text-lg font-bold
                        `}
                      >
                        {isCameraOn ? (
                          <>
                            <CameraOff className="w-6 h-6" />
                            <span className="hidden sm:inline">
                              Stop Camera
                            </span>
                          </>
                        ) : (
                          <>
                            <Camera className="w-6 h-6" />
                            <span className="hidden sm:inline">
                              Start Detection
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    {isCameraOn && faceDetected && (
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Activity className="w-5 h-5" />
                        <span className="font-mono">
                          {(confidence * 100).toFixed(0)}% Confidence
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Emotion History */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-5">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Recent Emotions</h3>
              </div>
              <div className="space-y-3">
                {emotionHistory.length === 0 ? (
                  <p className="text-center text-slate-400 py-6">
                    Start camera to track emotions
                  </p>
                ) : (
                  emotionHistory.slice(0, 5).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">
                          {emotionConfig[item.emotion].emoji}
                        </span>
                        <div>
                          <div className="font-medium capitalize">
                            {emotionConfig[item.emotion].label}
                          </div>
                          <div className="text-xs text-slate-400">
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-slate-300">
                        {(item.confidence * 100).toFixed(0)}%
                      </span>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* --- MUSIC PLAYER SECTION (UNCHANGED) --- */}
          <div className="space-y-6 order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 blur-2xl" />
              <div className="relative bg-slate-900/70 backdrop-blur-md p-6 sm:p-8">
                {/* Album Art */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br ${emotionConfig[currentEmotion].color} p-2 shadow-2xl`}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-950/80 flex items-center justify-center relative overflow-hidden">
                      {isPlaying && isCameraOn && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                          <div className="w-32 h-32 rounded-full border-4 border-white/30 animate-ping" />
                          <div className="absolute w-24 h-24 rounded-full border-4 border-white/30 animate-ping delay-200" />
                        </div>
                      )}
                      <Disc
                        className={`w-32 h-32 sm:w-40 sm:h-40 text-slate-600 ${
                          isPlaying && isCameraOn ? "animate-spin-slow" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Song Info */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {currentSong.title}
                  </h2>
                  <p className="text-lg text-slate-400 uppercase tracking-wider">
                    {currentSong.artist}
                  </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-800 accent-purple-500"
                    style={{
                      background: `linear-gradient(to right, #a855f7 0%, #22d3ee ${progress}%, #1e293b ${progress}%, #1e293b 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-3 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <button className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
                    <Shuffle className="w-6 h-6" />
                  </button>
                  <button
                    onClick={playPrevious}
                    className="p-4 rounded-full hover:bg-slate-800"
                  >
                    <SkipBack className="w-8 h-8" />
                  </button>
                  <button
                    onClick={togglePlayPause}
                    disabled={!isCameraOn}
                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 ${
                      isCameraOn
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600"
                        : "bg-slate-700 opacity-50"
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10" />
                    ) : (
                      <Play className="w-10 h-10 ml-1" />
                    )}
                  </button>
                  <button
                    onClick={playNext}
                    className="p-4 rounded-full hover:bg-slate-800"
                  >
                    <SkipForward className="w-8 h-8" />
                  </button>
                  <button className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
                    <Repeat className="w-6 h-6" />
                  </button>
                </div>

                {/* Volume + Queue */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-slate-300 hover:text-white"
                    >
                      {isMuted ? (
                        <VolumeX className="w-7 h-7" />
                      ) : (
                        <Volume2 className="w-7 h-7" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="flex-1 h-2 rounded-full bg-slate-700 accent-cyan-500"
                    />
                  </div>
                  <button
                    onClick={() => setShowQueue(!showQueue)}
                    className={`p-4 rounded-xl ${
                      showQueue
                        ? "bg-slate-800 text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <List className="w-6 h-6" />
                  </button>
                </div>

                {/* Queue */}
                <AnimatePresence>
                  {showQueue && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 bg-slate-950/70 rounded-2xl p-5 max-h-64 overflow-y-auto custom-scrollbar"
                    >
                      <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">
                        Playlist — {currentEmotion}
                      </h4>
                      {getCurrentPlaylist().map((song, idx) => (
                        <button
                          key={song.id}
                          onClick={() => setCurrentSongIndex(idx)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left transition-colors ${
                            idx === currentSongIndex
                              ? "bg-purple-900/50 text-cyan-300"
                              : "hover:bg-slate-800/50"
                          }`}
                        >
                          <span className="truncate pr-4">{song.title}</span>
                          {idx === currentSongIndex && (
                            <Activity className="w-5 h-5 text-cyan-400" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.5);
          border-radius: 3px;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EmotionDetection;
