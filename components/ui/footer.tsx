import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="images/intro_logo.svg" alt="Intro" width={80} height={32} />
            </Link>
            <p className="text-gray-500 text-sm">2025 all rights reserved</p>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-600 hover:text-gray-900">Help desk & FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Kontakta oss</Link></li>
              <li><Link href="/opt_out" className="text-gray-600 hover:text-gray-900">För kandidater</Link></li>
              <li><Link href="/opt_out" className="text-gray-600 hover:text-gray-900">Opt-out</Link></li>
              <li><Link href="/data_protection" className="text-gray-600 hover:text-gray-900">Data protection</Link></li>
            </ul>
          </div>

          {/* Företag Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Företag</h3>
            <ul className="space-y-3">
              <li><a href="https://careers.intro.io/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Karriär</a></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Villkor</Link></li>
              <li><Link href="/privacy_policy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
            </ul>
          </div>

          {/* Resurser Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resurser</h3>
            <ul className="space-y-3">
              <li><Link href="/data_protection" className="text-gray-600 hover:text-gray-900">Rekrytering & GDPR</Link></li>
              <li><a href="https://search.intro.io/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Testa ett sök</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
