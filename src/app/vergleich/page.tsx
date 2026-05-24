import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, ArrowRight } from "lucide-react";
import { produkte } from "@/data/produkte";
import ComparisonTable from "@/components/ui/ComparisonTable";

export const metadata: Metadata = {
  title: "Smart Home Geräte Vergleich 2025 – Alle Produkte im Überblick",
  description:
    "Vergleichen Sie alle Smart Home Geräte auf einen Blick: Saugroboter, Luftreiniger, Thermostate und Smart Displays. Preise, Features und Bewertungen im direkten Vergleich.",
};

const kategorieVergleiche = [
  {
    id: "saugroboter",
    titel: "Saugroboter Vergleich",
    beschreibung: "Alle Saugroboter im direkten Vergleich – Saugleistung, Akkulaufzeit und Intelligenz",
    produkte: produkte.filter((p) => p.kategorie === "saugroboter"),
  },
  {
    id: "luftreiniger",
    titel: "Luftreiniger Vergleich",
    beschreibung: "Filterleistung, CADR und Wirkungsbereich der besten Luftreiniger verglichen",
    produkte: produkte.filter((p) => p.kategorie === "luftreiniger"),
  },
];

export default function VergleichPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart2 className="w-8 h-8 text-green-300" />
            <span className="text-green-300 font-medium">Produktvergleich</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Smart Home Geräte Vergleich 2025</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Vergleichen Sie alle {produkte.length} getesteten Smart Home Geräte auf einen Blick. Features,
            technische Daten und Preise im direkten Gegenüberstellung.
          </p>
        </div>
      </section>

      {/* Gesamtübersicht */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-green-900 mb-2">Alle Produkte im Überblick</h2>
        <p className="text-green-600 mb-8">Schnellvergleich aller {produkte.length} getesteten Smart Home Geräte</p>
        <div className="card overflow-hidden">
          <ComparisonTable produkte={produkte.slice(0, 4)} />
        </div>
        <p className="text-sm text-green-500 mt-3 text-center">
          Hinweis: Tabelle zeigt die ersten 4 Produkte. Nutzen Sie die Kategorie-Vergleiche unten für alle Produkte.
        </p>
      </section>

      {/* Kategorieweise Vergleiche */}
      {kategorieVergleiche.map((kat) => (
        <section key={kat.id} id={kat.id} className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-green-900 mb-2">{kat.titel}</h2>
            <p className="text-green-600 mb-8">{kat.beschreibung}</p>
            <div className="card overflow-hidden">
              <ComparisonTable produkte={kat.produkte} />
            </div>
          </div>
        </section>
      ))}

      {/* Kaufberatung */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-6">Welches Gerät ist das Richtige für Sie?</h2>
            <div className="space-y-4">
              {[
                {
                  frage: "Ich möchte weniger Zeit mit Staubsaugen verbringen",
                  antwort: "Saugroboter",
                  href: "/smart-home/roborock-s8-pro-ultra",
                  tipp: "→ Roborock S8 Pro Ultra (Testsieger)",
                },
                {
                  frage: "Ich oder mein Kind leidet unter Allergien",
                  antwort: "Luftreiniger",
                  href: "/smart-home/philips-luftreiniger-3000i",
                  tipp: "→ Philips Luftreiniger 3000i",
                },
                {
                  frage: "Ich möchte Heizkosten sparen",
                  antwort: "Smart Thermostat",
                  href: "/smart-home/tado-smart-thermostat",
                  tipp: "→ tado° Smart Thermostat",
                },
                {
                  frage: "Ich suche einen Einstieg ins Smart Home",
                  antwort: "Starter Set",
                  href: "/smart-home/bosch-smart-home-starter-set",
                  tipp: "→ Bosch Smart Home Starter Set",
                },
                {
                  frage: "Ich möchte alle Smart Home Geräte zentral steuern",
                  antwort: "Smart Display",
                  href: "/smart-home/amazon-echo-show-10",
                  tipp: "→ Amazon Echo Show 10",
                },
              ].map((item) => (
                <div key={item.frage} className="card p-5 hover:shadow-md transition-shadow">
                  <p className="text-green-700 mb-2 font-medium">"{item.frage}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-green-900">Empfehlung: {item.antwort}</span>
                      <p className="text-sm text-green-600">{item.tipp}</p>
                    </div>
                    <Link
                      href={item.href}
                      className="text-green-600 hover:text-green-800 flex items-center gap-1 text-sm font-medium flex-shrink-0"
                    >
                      Zum Test <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-6">Unsere Top-Empfehlungen</h2>
            <div className="space-y-4">
              {produkte
                .filter((p) => p.besteWahl)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/smart-home/${p.slug}`}
                    className="card p-5 hover:shadow-md transition-shadow block group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="badge-best text-xs">{p.besteWahl}</span>
                      <span className="font-bold text-green-900">{p.preis}€</span>
                    </div>
                    <h3 className="font-bold text-green-900 group-hover:text-green-700 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-green-600 mt-1">{p.kurzBeschreibung}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3.5 h-3.5 rounded-sm ${
                              i < Math.round(p.bewertung) ? "bg-amber-400" : "bg-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-sm font-semibold text-green-700 ml-1">{p.bewertung}</span>
                      </div>
                      <span className="text-xs text-green-600 group-hover:text-green-800 flex items-center gap-1">
                        Zum Test <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
