import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, ShoppingCart, ArrowLeft, Star, ChevronRight } from "lucide-react";
import { produkte, getProduktBySlug } from "@/data/produkte";
import { formatPreis } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ProductCard from "@/components/ui/ProductCard";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return produkte.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) return { title: "Produkt nicht gefunden" };

  return {
    title: `${produkt.name} Test & Erfahrungen 2025 – Lohnt es sich?`,
    description: `${produkt.name} im Test: ${produkt.kurzBeschreibung}. Bewertung: ${produkt.bewertung}/5 Sterne. Preis: ab ${formatPreis(produkt.preis)}. Pro, Contra & FAQ.`,
  };
}

export default function ProduktDetailPage({ params }: PageProps) {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) notFound();

  const aehnlicheProdukte = produkte
    .filter((p) => p.kategorie === produkt.kategorie && p.id !== produkt.id)
    .slice(0, 3);

  const ratingPercent = (produkt.bewertung / 5) * 100;

  const emojiMap: Record<string, string> = {
    saugroboter: "🤖",
    luftreiniger: "💨",
    thermostat: "🌡️",
    "smart-display": "📱",
    "starter-set": "🏠",
  };
  const emoji = emojiMap[produkt.kategorie] || "🏠";

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-green-600">
            <Link href="/" className="hover:text-green-800 transition-colors">
              Startseite
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/kategorie/smart-home" className="hover:text-green-800 transition-colors">
              Smart Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/kategorie/smart-home#${produkt.kategorie}`}
              className="hover:text-green-800 transition-colors"
            >
              {produkt.kategorieLabel}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-900 font-medium truncate">{produkt.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Link */}
        <Link
          href="/kategorie/smart-home"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Übersicht
        </Link>

        {/* Produkt Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Bild/Visual */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center p-16 min-h-[300px] relative">
            <span className="text-9xl">{emoji}</span>
            {produkt.besteWahl && (
              <div className="absolute top-4 left-4">
                <span className="badge-best">{produkt.besteWahl}</span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className="badge-kategorie">{produkt.kategorieLabel}</span>
            </div>
          </div>

          {/* Produktinfo */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">{produkt.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={produkt.bewertung} size="lg" />
              <span className="text-green-600 text-sm">({produkt.bewertung} / 5 Sterne)</span>
            </div>

            {/* Rating Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-green-700 font-medium">Gesamtbewertung</span>
                <span className="font-bold text-green-900">{produkt.bewertung}/5</span>
              </div>
              <div className="h-3 bg-green-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full transition-all duration-700"
                  style={{ width: `${ratingPercent}%` }}
                />
              </div>
            </div>

            <p className="text-green-700 text-lg leading-relaxed mb-6">{produkt.kurzBeschreibung}</p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {produkt.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* Preis & CTA */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-sm text-green-600 mb-1">Aktueller Preis</p>
                  <p className="text-4xl font-bold text-green-900">{formatPreis(produkt.preis)}</p>
                  <p className="text-xs text-green-500 mt-1">Preis kann variieren</p>
                </div>
              </div>
              <a
                href={produkt.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-3 w-full bg-green-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors text-lg mb-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Bei Amazon kaufen
              </a>
              <p className="text-xs text-center text-green-500">
                * Affiliate-Link – wir erhalten eine Provision ohne Mehrkosten für Sie
              </p>
            </div>
          </div>
        </div>

        {/* Beschreibung */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            {produkt.name} im Test – Ausführliche Bewertung 2025
          </h2>
          <p className="text-green-700 leading-relaxed text-lg">{produkt.beschreibung}</p>
        </section>

        {/* Pro & Contra */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Pro & Contra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Vorteile
              </h3>
              <ul className="space-y-3">
                {produkt.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3 text-green-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="font-bold text-red-700 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                Nachteile
              </h3>
              <ul className="space-y-3">
                {produkt.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3 text-red-600">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technische Daten */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Technische Daten</h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {produkt.technischeDaten.map((daten, i) => (
                  <tr
                    key={daten.label}
                    className={`border-b border-green-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-green-50/50"}`}
                  >
                    <td className="p-4 font-semibold text-green-700 w-1/3">{daten.label}</td>
                    <td className="p-4 text-green-900">{daten.wert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Alle Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Alle Funktionen & Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {produkt.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
                <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-700" />
                </div>
                <span className="text-green-800 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Häufig gestellte Fragen zum {produkt.name}
          </h2>
          <p className="text-green-600 mb-6">Die wichtigsten Antworten auf einen Blick</p>
          <FAQAccordion faqs={produkt.faqs} />
        </section>

        {/* CTA Box */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.round(produkt.bewertung) ? "text-amber-400 fill-current" : "text-green-500"}`}
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {produkt.name} – Unser Urteil: {produkt.bewertung}/5 Sterne
            </h3>
            <p className="text-green-200 mb-6 max-w-lg mx-auto">
              {produkt.besteWahl ? `Als "${produkt.besteWahl}" empfehlen wir dieses Produkt wärmstens.` : "Ein solides Produkt in seiner Kategorie."} Jetzt bei Amazon kaufen und von schnellem Versand profitieren.
            </p>
            <a
              href={produkt.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-3 bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors text-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              {formatPreis(produkt.preis)} – Jetzt bei Amazon
            </a>
          </div>
        </section>

        {/* Ähnliche Produkte */}
        {aehnlicheProdukte.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Ähnliche {produkt.kategorieLabel} im Vergleich
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aehnlicheProdukte.map((p) => (
                <ProductCard key={p.id} produkt={p} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/vergleich"
                className="inline-flex items-center gap-2 border-2 border-green-800 text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                Alle Produkte vergleichen <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
