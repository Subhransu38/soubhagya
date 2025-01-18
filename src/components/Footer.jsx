import LOGO from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="py-6 bg-light-background text-light-textPrimary dark:bg-dark-background shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        {/* Logo */}
        <a href="#top" className="flex items-center space-x-2">
          <img src={LOGO} alt="Logo" className="h-12" />
        </a>

        {/* Copyright Text */}
        <p className="text-sm text-dark-secondary dark:text-light-secondary">
          © {new Date().getFullYear()} Soubhagya Laxmi Ray. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
