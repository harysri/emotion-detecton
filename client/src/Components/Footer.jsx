// import React from "react";
// import { Link } from "react-router-dom";
// import { Music, Heart, Shield, Copyright } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-950 text-slate-400 py-8 md:py-12 border-t border-slate-800">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//           {/* Column 1: Brand & Description */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//             <Link to="/" className="flex items-center space-x-3 group mb-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
//                   <Music className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tight">
//                   Face
//                   <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
//                     Tunes
//                   </span>
//                 </span>
//                 <span className="text-xs text-slate-400 font-medium">
//                   Emotion-Powered Music
//                 </span>
//               </div>
//             </Link>

//             <p className="text-sm leading-relaxed text-slate-500 mt-3 mb-4">
//               AI-powered music that feels what you feel. Experience the next
//               generation of mood-based listening.
//             </p>

//             {/* Mobile-only copyright disclaimer */}
//             <div className="block lg:hidden mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
//               <div className="flex items-start gap-2 mb-2">
//                 <Shield className="w-4 h-4 text-purple-400 mt-0.5" />
//                 <p className="text-xs text-slate-400 leading-relaxed">
//                   All music tracks are AI-generated or royalty-free. We respect
//                   intellectual property rights and ensure all content is
//                   properly licensed or created for this platform.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-slate-100 font-semibold mb-4 tracking-wide uppercase text-sm">
//               Quick Links
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <Link
//                   to="/"
//                   className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/emotion-detection"
//                   className="hover:text-indigo-400 transition-colors flex items-center gap-2 group"
//                 >
//                   <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Try Face Detection
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Copyright Disclaimer */}
//           <div className="hidden lg:block">
//             <h3 className="text-slate-100 font-semibold mb-4 tracking-wide uppercase text-sm flex items-center gap-2">
//               <Copyright className="w-4 h-4" />
//               Copyright Notice
//             </h3>
//             <div className="p-4 bg-slate-900/30 rounded-lg border border-slate-800">
//               <div className="flex items-start gap-2 mb-3">
//                 <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
//                 <p className="text-xs text-slate-400 leading-relaxed">
//                   All audio content used in FaceTunes is either AI-generated,
//                   sourced from royalty-free libraries, or utilized under
//                   appropriate licenses. We deeply respect the intellectual
//                   property rights of musicians, composers, and creators.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
//           {/* Copyright Text - Mobile Layout */}
//           <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 space-y-2 text-center md:text-left">
//             <p className="text-slate-500">
//               &copy; {currentYear} FaceTunes AI. All rights reserved.
//             </p>
//             <p className="text-slate-600 text-[10px] leading-relaxed max-w-md">
//               All music is for demonstration purposes. This platform uses AI to
//               generate or curate royalty-free music. No copyright infringement
//               intended.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Music, Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center space-x-3 group mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Music className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Face
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Tunes
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 font-medium max-w-xs">
              Emotion-powered music listening experience.
            </p>
          </div>

          {/* Navigation Links - Pill Style */}
          <nav className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Home", path: "/" },
              { label: "Try Detection", path: "/emotion-detection" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6" />

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Minimal Copyright */}
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>&copy; {currentYear} FaceTunes AI.</span>
            <span className="text-[10px] text-slate-400 italic">— HrS</span>
          </div>

          {/* Collapsed Legal Disclaimer */}
          <div className="flex items-start justify-center gap-2 max-w-2xl px-4">
            <Shield className="w-3 h-3 text-slate-600 mt-0.5 flex-shrink-0" />
            <p className="text-[10px] leading-relaxed text-slate-600">
              Music is AI-generated or royalty-free. No copyright infringement
              intended. We respect intellectual property rights and ensure
              content is properly cited or licensed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
