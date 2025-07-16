import Link from 'next/link';
import NavUnified from './nav-unified';

export default function Header() {
  return (
    <header className="container max-w-xl py-4">
      <div className="flex items-center justify-between">
        <Link className="font-semibold text-lg" href="/">
          Chad Fernandez
        </Link>

        <div>
          <NavUnified />
        </div>
      </div>
    </header>
  );
}
