import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        <Link to="/" className="text-2xl font-black text-green-600 tracking-tighter">
          VEG<span className="text-gray-800">RECIPES</span>
        </Link>
      </div>
    </header>
  );
}