import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 flex items-center gap-4 border-b">
        <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto" />
        <Link href="/" className="text-lg">Home</Link>
        <Link href="/" className="text-lg">About</Link>
        <Link href="/" className="text-lg">Contact</Link>
    </header>
  );
}