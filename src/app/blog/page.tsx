import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Home Blog & Ratgeber 2025 – Tipps und Kaufberatung",
  description:
    "Smart Home Ratgeber, Tipps und Kaufberatung: Welcher Saugroboter lohnt sich? Wie spare ich Heizkosten? Welcher Luftreiniger ist der beste für Allergiker? Jetzt lesen.",
};

const artikel = [
  {
    slug: "saugroboter-kaufberatung",
    titel: "Saugroboter Kaufberatung 2025: Worauf Sie achten müssen",
    zusammenfassung:
      "Bevor Sie einen Saugroboter kaufen, gibt es einige wichtige Faktoren zu beachten: Saugleistung, Akkulaufzeit, Kartierungstechnologie und Wischfunktion. Wir erklären alle wichtigen Kriterien.",
    kategorie: "Kaufberatung",
    datum: "15. Mai 2025",
    lesezeit: "8 Min.",
    emoji: "🤖",
  },
  {
    slug: "luftreiniger-allergiker",
    titel: "Der beste Luftreiniger für Allergiker 2025",
    zusammenfassung:
      "Wenn Sie unter Heuschnupfen, Hausstauballergie oder Tierhaarallergie leiden, kann ein Luftreiniger mit HEPA-Filter Ihre Lebensqualität erheblich verbessern. Wir erklären was wichtig ist.",
    kategorie: "Gesundheit",
    datum: "10. Mai 2025",
    lesezeit: "6 Min.",
    emoji: "💨",
  },
  {
    slug: "smart-thermostat-heizkosten-sparen",
    titel: "Mit einem Smart Thermostat bis zu 31% Heizkosten sparen",
    zusammenfassung:
      "Intelligente Thermostate wie das tado° Smart Thermostat können Ihre Heizrechnung erheblich reduzieren. Wir erklären wie die Technologie funktioniert und was Sie wirklich sparen können.",
    kategorie: "Energie",
    datum: "5. Mai 2025",
    lesezeit: "5 Min.",
    emoji: "🌡️",
  },
  {
    slug: "smart-home-einstieg",
    titel: "Smart Home Einstieg 2025: Was brauche ich wirklich?",
    zusammenfassung:
      "Viele Menschen wollen mit Smart Home anfangen, wissen aber nicht womit. Wir zeigen Ihnen die sinnvollsten ersten Geräte und worauf Sie achten sollten.",
    kategorie: "Ratgeber",
    datum: "1. Mai 2025",
    lesezeit: "10 Min.",
    emoji: "🏠",
  },
  {
    slug: "roborock-vs-irobot",
    titel: "Roborock S8 Pro Ultra vs. iRobot Roomba j9+: Direktvergleich",
    zusammenfassung:
      "Die beiden besten Premium-Saugroboter 2025 im direkten Duell: Wir vergleichen Reinigungsleistung, Navigation, Wischfunktion und Preis-Leistungs-Verhältnis.",
    kategorie: "Vergleich",
    datum: "25. April 2025",
    lesezeit: "12 Min.",
    emoji: "⚔️",
  },
  {
    slug: "zigbee-vs-wlan",
    titel: "Zigbee vs. WLAN: Welches Smart Home Protokoll ist besser?",
    zusammenfassung:
      "Zigbee, Z-Wave oder WLAN? Wir erklären die Unterschiede der wichtigsten Smart Home Protokolle und helfen Ihnen bei der Wahl des richtigen Systems für Ihr Zuhause.",
    kategorie: "Technik",
    datum: "20. April 2025",
    lesezeit: "7 Min.",
    emoji: "📡",
  },
];

const kategorieColors: Record<string, string> = {
  Kaufberatung: "bg-blue-100 text-blue-700",
  Gesundheit: "bg-green-100 text-green-700",
  Energie: "bg-orange-100 text-orange-700",
  Ratgeber: "bg-purple-100 text-purple-700",
  Vergleich: "bg-red-100 text-red-700",
  Technik: "bg-gray-100 text-gray-700",
};

export default function BlogPage() {
  const featuredArtikel = artikel[0];
  const restArtikel = artikel.slice(1);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-green-300" />
            <span className="text-green-300 font-medium">Blog & Ratgeber</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Smart Home Ratgeber & Tipps</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Fundierte Kaufberatung, Vergleiche und Tipps rund um Smart Home und Haushaltsgeräte.
            Unabhängig und verständlich erklärt.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Artikel */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-green-700 mb-6 flex items-center gap-2">
            <Tag className="w-4 h-4" /> Aktueller Ratgeber
          </h2>
          <div className="card p-8 hover:shadow-lg transition-shadow group">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 text-8xl">
                {featuredArtikel.emoji}
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      kategorieColors[featuredArtikel.kategorie]
                    }`}
                  >
                    {featuredArtikel.kategorie}
                  </span>
                  <span className="flex items-center gap-1 text-green-500 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArtikel.lesezeit} Lesezeit
                  </span>
                  <span className="text-green-400 text-sm">{featuredArtikel.datum}</span>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors">
                  {featuredArtikel.titel}
                </h3>
                <p className="text-green-600 leading-relaxed mb-6">{featuredArtikel.zusammenfassung}</p>
                <Link
                  href={`/blog/${featuredArtikel.slug}`}
                  className="inline-flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Jetzt lesen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Alle Artikel */}
        <h2 className="text-lg font-semibold text-green-700 mb-6 flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Alle Ratgeber & Artikel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restArtikel.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-200 group block"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${kategorieColors[art.kategorie]}`}
                >
                  {art.kategorie}
                </span>
                <span className="text-4xl">{art.emoji}</span>
              </div>
              <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors leading-tight">
                {art.titel}
              </h3>
              <p className="text-sm text-green-600 leading-relaxed mb-4 line-clamp-3">{art.zusammenfassung}</p>
              <div className="flex items-center justify-between text-xs text-green-500 pt-3 border-t border-green-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {art.lesezeit}
                </span>
                <span>{art.datum}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-green-800 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Kein Ratgeber verpassen</h3>
          <p className="text-green-200 mb-6 max-w-lg mx-auto">
            Besuchen Sie unsere Vergleichsseite regelmäßig für die neuesten Tests und Empfehlungen.
          </p>
          <Link
            href="/kategorie/smart-home"
            className="inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors"
          >
            Alle Produkte ansehen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
