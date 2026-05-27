export default function Footer() {
  return (
    <footer className="py-10 text-center bg-[var(--bg-color)] border-t border-black/70" >
      <p className="text-black/80 font-sans-serif text-lg font-light">
        &copy; {new Date().getFullYear()} Juana Copello
      </p>
    </footer>
  );
}