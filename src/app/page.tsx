import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Wind,
  Thermometer,
  Monitor,
  Home,
  Star,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { produkte, getBestChoice } from "@/data/produkte";
import ProductCard from "@/components/ui/ProductCard";
import { formatPreis } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Smart Home Vergleich 2025 – Beste Geräte im Test & Vergleich",
  description:
    "Finden Sie die besten Smart Home Geräte 2025: Saugroboter, Luftreiniger, Thermostate und Smart Displays im unabhängigen Test & Vergleich. Aktuelle Preise & Testsieger.",
};

const kategorien = [
  {
    id: "saugroboter",
    name: "Saugroboter",
    icon: Bot,
    count: 3,
    description: "Vollautomatisches Saugen & Wischen",
    href: "/kategorie/smart-home#saugroboter",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "luftreiniger",
    name: "Luftreiniger",
    icon: Wind,
    count: 2,
    description: "Saubere Luft für zuhause",
    href: "/kategorie/smart-home#luftreiniger",
    color: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
  },
  {
    id: "thermostat",
    name: "Thermostate",
    icon: Thermometer,
    count: 1,
    description: "Smart heizen & sparen",
    href: "/kategorie/smart-home#thermostat",
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "smart-display",
    name: "Smart Displays",
    icon: Monitor,
    count: 1,
    description: "Ihre Smart Home Zentrale",
    href: "/kategorie/smart-home#smart-display",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "starter-set",
    name: "Starter Sets",
    icon: Home,
    count: 1,
    description: "Einstieg ins Smart Home",
    href: "/kategorie/smart-home#starter-set",
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
];

const vorteile = [
  {
    icon: Shield,
    title: "Unabhängige Tests",
    text: "Alle Produkte werden objektiv und unabhängig getestet. Keine Beeinflussung durch Hersteller.",
  },
  {
    icon: TrendingUp,
    title: "Aktuelle Preise",
    text: "Wir prüfen regelmäßig die Preise und aktualisieren unsere Empfehlungen für 2025.",
  },
  {
    icon: Zap,
    title: "Schneller Überblick",
    text: "Unsere übersichtlichen Vergleichstabellen helfen Ihnen, schnell die richtige Wahl zu treffen.",
  },
];

export default function HomePage() {
  const bestChoices = getBestChoice();
  const topProdukte = produkte.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-700/50 border border-green-600 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-green-100 text-sm font-medium">Testsieger 2025 ermittelt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Home Geräte
              <span className="block text-green-300">im Vergleich 2025</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
              Unabhängige Tests und Vergleiche für Saugroboter, Luftreiniger, Thermostate und Smart Displays. Finden
              Sie das beste Gerät für Ihr Zuhause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kategorie/smart-home"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-900 px-7 py-3.5 rounded-xl font-bold hover:bg-green-50 transition-colors text-lg"
              >
                Alle Geräte ansehen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/vergleich"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-400 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-700 transition-colors text-lg"
              >
                Produkte vergleichen
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-green-200 text-sm">
              {[
                { n: "8+", label: "Getestete Produkte" },
                { n: "5", label: "Kategorien" },
                { n: "100%", label: "Unabhängig" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong className="text-white">{stat.n}</strong> {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Alle Kategorien</h2>
          <p className="section-subtitle">Wählen Sie Ihre gewünschte Produktkategorie</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {kategorien.map((kat) => {
            const Icon = kat.icon;
            return (
              <Link
                key={kat.id}
                href={kat.href}
                className="card p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kat.color} flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className={`w-6 h-6 ${kat.iconColor}`} />
                </div>
                <h3 className="font-semibold text-green-900 text-sm mb-1">{kat.name}</h3>
                <p className="text-xs text-green-600">{kat.description}</p>
                <p className="text-xs text-green-400 mt-2">{kat.count} Produkte</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Beste Wahl Produkte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-1.5 mb-4">
              <Star className="w-4 h-4 text-green-700 fill-current" />
              <span className="text-green-700 text-sm font-semibold">Testsieger 2025</span>
            </div>
            <h2 className="section-title">Unsere Empfehlungen</h2>
            <p className="section-subtitle">Die besten Smart Home Geräte in ihrer Kategorie</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestChoices.map((produkt) => (
              <ProductCard key={produkt.id} produkt={produkt} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/kategorie/smart-home"
              className="inline-flex items-center gap-2 border-2 border-green-800 text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
            >
              Alle {produkte.length} Produkte ansehen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top 3 Saugroboter im Detail */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Top 3 Saugroboter 2025</h2>
          <p className="section-subtitle">Die leistungsstärksten Saugroboter im direkten Vergleich</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProdukte.map((produkt, i) => (
            <div key={produkt.id} className="relative">
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-green-800 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Platz #{i + 1} – Empfehlung
                  </span>
                </div>
              )}
              <ProductCard produkt={produkt} variant={i === 1 ? "featured" : "default"} />
            </div>
          ))}
        </div>
      </section>

      {/* Preisvergleich Tabelle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Alle Produkte auf einen Blick</h2>
            <p className="section-subtitle">Schnellübersicht aller getesteten Smart Home Geräte</p>
          </div>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-green-50 border-b-2 border-green-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-green-700">Produkt</th>
                    <th className="p-4 text-center font-semibold text-green-700">Kategorie</th>
                    <th className="p-4 text-center font-semibold text-green-700">Bewertung</th>
                    <th className="p-4 text-center font-semibold text-green-700">Preis</th>
                    <th className="p-4 text-center font-semibold text-green-700">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {produkte.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-green-100 hover:bg-green-50/50 transition-colors ${
                        i % 2 === 0 ? "" : "bg-green-50/30"
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-green-900">{p.name}</p>
                            {p.besteWahl && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                {p.besteWahl}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="badge-kategorie">{p.kategorieLabel}</span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="font-bold text-green-800">{p.bewertung}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-green-900">{formatPreis(p.preis)}</span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/smart-home/${p.slug}`}
                            className="text-xs text-green-600 hover:text-green-800 font-medium px-3 py-1.5 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
                          >
                            Test lesen
                          </Link>
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="text-xs bg-green-800 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
                          >
                            Kaufen
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Warum Smart Home Vergleich?</h2>
          <p className="section-subtitle">Ihre unabhängige Anlaufstelle für Smart Home Empfehlungen</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vorteile.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{v.title}</h3>
                <p className="text-green-600 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihr smartes Zuhause?</h2>
          <p className="text-green-200 text-lg mb-8">
            Vergleichen Sie alle 8 Produkte direkt miteinander und finden Sie das perfekte Gerät für Ihren Bedarf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vergleich"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-900 px-7 py-3.5 rounded-xl font-bold hover:bg-green-50 transition-colors"
            >
              Jetzt vergleichen <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-700 transition-colors"
            >
              Ratgeber lesen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
