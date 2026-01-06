import logo from "../assets/logo_NTTU.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-indigo-800 dark:to-slate-900 animate-gradient-slow"></div>

      {/* Main card */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-6 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl dark:bg-slate-900/80 transition-all duration-500">
        {/* Logo */}
        <div className="relative inline-block">
          <div className="relative w-40 h-40 mx-auto">
            <img
              className="w-full h-full object-contain animate-bounce-slow drop-shadow-lg"
              src={logo}
              alt="NTTU Logo"
            />
          </div>
          {/* Enhanced glow effect */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-blue-300/20 via-indigo-300/20 to-blue-300/20 blur-2xl animate-pulse-slow"></span>
          {/* Inner ring */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-blue-200/30 animate-spin-slow"></span>
        </div>

        {/* Introduction */}
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Xin chào! Mình là
        </h2>
        <h1 className="text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 animate-text-gradient">
          NTTU Chatbot
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
          Trợ lý đắc lực giúp bạn giải đáp thắc mắc, tra cứu thông tin nhanh chóng và chính xác nhất.
        </p>

        {/* CTA button */}
        <div>
          <Link to="/chat">
            <button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 text-white rounded-xl shadow-lg shadow-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              CHAT NGAY
            </button>
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 15s ease infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% 200%;
          animation: text-gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
