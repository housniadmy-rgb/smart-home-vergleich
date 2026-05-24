"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, BarChart2, BookOpen, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Startseite", href: "/", icon: Home },
  {
    name: "Kategorien",
    href: "/kategorie/smart-home",
    icon: ChevronDown,
    children: [
      { name: "Alle Smart Home Geräte", href: "/kategorie/smart-home" },
      { name: "Saugroboter", href: "/kategorie/smart-home#saugroboter" },
      { name: "Luftreiniger", href: "/kategorie/smart-home#luftreiniger" },
      { name: "Thermostate", href: "/kategorie/smart-home#thermostat" },
      { name: "Smart Displays", href: "/kategorie/smart-home#smart-display" },
    ],
  },
  { name: "Vergleich", href: "/vergleich", icon: BarChart2 },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-800 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-green-900 text-lg leading-none block">Smart Home</span>
              <span className="text-green-600 text-xs leading-none">Vergleich 2025</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                    className="flex items-center gap-1 px-4 py-2 text-green-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium text-sm"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-green-100 py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-green-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium text-sm"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/vergleich"
              className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Jetzt vergleichen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-green-800 hover:bg-green-50 rounded-lg transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 text-green-800 hover:bg-green-50 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 mt-2 border-t border-green-100">
              <Link
                href="/vergleich"
                className="block text-center bg-green-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Jetzt vergleichen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
