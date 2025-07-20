export default function Header() {
  return (
    <header className="p-4 flex items-center gap-4 border-b">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <a href="/" className="text-lg">Home</a>
        <a href="/" className="text-lg">About</a>
        <a href="/" className="text-lg">Contact</a>
    </header>
  );
}