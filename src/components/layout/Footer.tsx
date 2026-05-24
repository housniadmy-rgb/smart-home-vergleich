import Link from "next/link";
import { Home, Mail, MapPin, Shield, FileText } from "lucide-react";

const kategorieLinks = [
  { name: "Saugroboter", href: "/kategorie/smart-home#saugroboter" },
  { name: "Luftreiniger", href: "/kategorie/smart-home#luftreiniger" },
  { name: "Thermostate", href: "/kategorie/smart-home#thermostat" },
  { name: "Smart Displays", href: "/kategorie/smart-home#smart-display" },
  { name: "Starter Sets", href: "/kategorie/smart-home#starter-set" },
];

const produktLinks = [
  { name: "iRobot Roomba j9+", href: "/smart-home/irobot-roomba-j9-plus" },
  { name: "Roborock S8 Pro Ultra", href: "/smart-home/roborock-s8-pro-ultra" },
  { name: "Philips Luftreiniger 3000i", href: "/smart-home/philips-luftreiniger-3000i" },
  { name: "tado° Smart Thermostat", href: "/smart-home/tado-smart-thermostat" },
  { name: "Amazon Echo Show 10", href: "/smart-home/amazon-echo-show-10" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-none block">Smart Home</span>
                <span className="text-green-400 text-xs leading-none">Vergleich 2025</span>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-6">
              Unabhängige Tests und Vergleiche für Smart Home Geräte. Wir helfen Ihnen, die besten Produkte für Ihr
              Zuhause zu finden.
            </p>
            <div className="flex flex-col gap-2 text-sm text-green-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Berlinstr. 37, 55411 Bingen am Rhein</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="mailto:housniadmy@yahoo.de" className="hover:text-white transition-colors">
                  housniadmy@yahoo.de
                </a>
              </div>
            </div>
          </div>

          {/* Kategorien */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kategorien</h3>
            <ul className="space-y-2.5">
              {kategorieLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-300 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Produkte */}
          <div>
            <h3 className="font-semibold text-white mb-4">Top Produkte</h3>
            <ul className="space-y-2.5">
              {produktLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vergleich" className="text-green-300 hover:text-white text-sm transition-colors">
                  Alle Produkte vergleichen
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-300 hover:text-white text-sm transition-colors">
                  Blog & Ratgeber
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-green-300 hover:text-white text-sm transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-green-300 hover:text-white text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-green-800 rounded-xl">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-green-300 leading-relaxed">
                  <strong className="text-green-200">Hinweis:</strong> Diese Seite enthält Affiliate-Links. Bei einem
                  Kauf erhalten wir eine Provision ohne Mehrkosten für Sie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-400 text-sm">© 2025 Smart Home Vergleich. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="text-green-400 hover:text-white text-sm transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> Impressum
            </Link>
            <Link href="/datenschutz" className="text-green-400 hover:text-white text-sm transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
