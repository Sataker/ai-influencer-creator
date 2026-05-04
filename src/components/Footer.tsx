export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 px-5 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>AI Influencer &copy; {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-purple-light transition-colors py-2">Termos de Uso</a>
          <a href="#" className="hover:text-purple-light transition-colors py-2">Privacidade</a>
          <a href="#" className="hover:text-purple-light transition-colors py-2">Contato</a>
        </div>
      </div>
    </footer>
  );
}
