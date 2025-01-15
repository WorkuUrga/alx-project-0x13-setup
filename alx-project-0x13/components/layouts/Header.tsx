import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">ImageGen</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
