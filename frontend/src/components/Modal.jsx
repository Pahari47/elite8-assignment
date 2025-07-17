export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-200">
      <div className="relative w-full max-w-md mx-4 sm:mx-0 animate-fadeInAndScale">
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-8 relative">
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes fadeInAndScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInAndScale {
          animation: fadeInAndScale 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
} 