import type { Metadata } from "next";
import { MapPin, Mail, Building, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum – Smart Home Vergleich",
  description: "Impressum und rechtliche Informationen des Smart Home Vergleich Portals.",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-green-700" />
          </div>
          <h1 className="text-3xl font-bold text-green-900">Impressum</h1>
        </div>
        <p className="text-green-600">Angaben gemäß § 5 TMG</p>
      </div>

      <div className="space-y-8">
        {/* Betreiber */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
            <Building className="w-5 h-5 text-green-600" />
            Betreiber dieser Website
          </h2>
          <div className="space-y-3 text-green-700">
            <p className="font-semibold text-green-900 text-lg">Smart Home Vergleich</p>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p>Berlinstr. 37</p>
                <p>55411 Bingen am Rhein</p>
                <p>Deutschland</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
              <a href="mailto:housniadmy@yahoo.de" className="text-green-700 hover:text-green-900 transition-colors">
                housniadmy@yahoo.de
              </a>
            </div>
          </div>
        </div>

        {/* Inhaltlich Verantwortlicher */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Inhaltlich Verantwortlicher</h2>
          <p className="text-green-700">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </p>
          <p className="text-green-900 font-semibold mt-2">Smart Home Vergleich</p>
          <p className="text-green-700">Berlinstr. 37, 55411 Bingen am Rhein</p>
        </div>

        {/* Affiliate-Hinweis */}
        <div className="card p-8 border-l-4 border-green-600">
          <h2 className="text-xl font-bold text-green-900 mb-4">Affiliate-Hinweis</h2>
          <p className="text-green-700 leading-relaxed mb-3">
            Diese Website enthält Affiliate-Links, insbesondere Links zum Amazon-Partnerprogramm. Das bedeutet: Wenn
            Sie über einen Link auf dieser Seite ein Produkt kaufen, erhalten wir eine Provision – ohne dass für Sie
            Mehrkosten entstehen.
          </p>
          <p className="text-green-700 leading-relaxed mb-3">
            Die mit „*" oder dem Hinweis „Affiliate-Link" bzw. „gesponsert" gekennzeichneten Links sind
            Affiliate-Links. Alle Empfehlungen und Bewertungen basieren auf unseren eigenen Erfahrungen und sind
            unabhängig von Provisionen.
          </p>
          <p className="text-green-700 leading-relaxed">
            <strong>Amazon-Partnerprogramm:</strong> Smart Home Vergleich ist Teilnehmer des Partnerprogramms von
            Amazon EU, einem Affiliate-Werbeprogramm, das für Websites konzipiert wurde, mit dessen Hilfe durch die
            Platzierung von Werbeanzeigen und Links zu amazon.de Werbegebühren verdient werden können.
          </p>
        </div>

        {/* Haftungsausschluss */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Haftungsausschluss</h2>

          <h3 className="font-semibold text-green-800 mb-2">Haftung für Inhalte</h3>
          <p className="text-green-700 leading-relaxed mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
            und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
            § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="font-semibold text-green-800 mb-2">Haftung für Links</h3>
          <p className="text-green-700 leading-relaxed mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="font-semibold text-green-800 mb-2">Urheberrecht</h3>
          <p className="text-green-700 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>

        {/* Streitschlichtung */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Streitschlichtung</h2>
          <p className="text-green-700 leading-relaxed mb-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-green-700 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>

      <p className="text-green-500 text-sm mt-8 text-center">Stand: Mai 2025</p>
    </div>
  );
}
