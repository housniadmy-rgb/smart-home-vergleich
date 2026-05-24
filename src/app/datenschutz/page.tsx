import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Smart Home Vergleich",
  description: "Datenschutzerklärung des Smart Home Vergleich Portals gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-700" />
          </div>
          <h1 className="text-3xl font-bold text-green-900">Datenschutzerklärung</h1>
        </div>
        <p className="text-green-600">Gemäß Art. 13 DSGVO | Stand: Mai 2025</p>
      </div>

      <div className="space-y-8 text-green-700 leading-relaxed">

        {/* 1. Verantwortlicher */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">1. Verantwortlicher</h2>
          <p className="mb-3">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung und anderer nationaler
            Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-semibold text-green-900">Smart Home Vergleich</p>
            <p>Berlinstr. 37</p>
            <p>55411 Bingen am Rhein</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:housniadmy@yahoo.de" className="text-green-600 hover:text-green-800">
                housniadmy@yahoo.de
              </a>
            </p>
          </div>
        </div>

        {/* 2. Erhebung und Verarbeitung */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <h3 className="font-semibold text-green-800 mb-2">a) Beim Besuch unserer Website</h3>
          <p className="mb-4">
            Wenn Sie unsere Website besuchen, werden automatisch Informationen allgemeiner Natur erfasst. Diese
            Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
            Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es
            sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
          </p>
          <p className="mb-4">
            Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten
            korrekt auszuliefern, und fallen bei Nutzung des Internets zwingend an. Sie werden insbesondere
            zu folgenden Zwecken verarbeitet:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
            <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
            <li>Auswertung der Systemsicherheit und -stabilität</li>
            <li>weiteren administrativen Zwecken</li>
          </ul>
          <p>
            Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
            Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
          </p>
        </div>

        {/* 3. Cookies */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">3. Cookies</h2>
          <p className="mb-4">
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr
            Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere
            Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren,
            Trojaner oder sonstige Schadsoftware.
          </p>
          <p className="mb-4">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
            der Website erforderlich sind. Auf Marketing- und Tracking-Cookies verzichten wir.
          </p>
          <p>
            Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        {/* 4. Affiliate-Links */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">4. Affiliate-Links und Amazon-Partnerprogramm</h2>
          <p className="mb-4">
            Diese Website nimmt am Amazon EU-Partnerprogramm teil. Dabei handelt es sich um ein
            Affiliate-Programm, das für Websites konzipiert wurde, mit dessen Hilfe Werbegebühren
            verdient werden können.
          </p>
          <p className="mb-4">
            Wenn Sie über einen Affiliate-Link auf dieser Website bei Amazon einkaufen, wird eine Verbindung
            zu den Servern von Amazon hergestellt. Amazon kann dabei erkennen, dass Sie über unsere Website
            weitergeleitet wurden. Amazon verarbeitet dabei personenbezogene Daten gemäß seiner eigenen
            Datenschutzerklärung:
          </p>
          <a
            href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 underline break-all"
          >
            https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
          </a>
          <p className="mt-4">
            Rechtsgrundlage für die Einbindung von Amazon-Links ist Art. 6 Abs. 1 lit. f DSGVO (berechtigte
            Interessen des Verantwortlichen).
          </p>
        </div>

        {/* 5. Ihre Rechte */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">5. Ihre Rechte als betroffene Person</h2>
          <p className="mb-4">
            Soweit wir personenbezogene Daten von Ihnen verarbeiten, stehen Ihnen als Betroffener folgende
            Rechte zu:
          </p>
          <div className="space-y-3">
            {[
              { titel: "Auskunftsrecht", text: "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden (Art. 15 DSGVO)." },
              { titel: "Berichtigungsrecht", text: "Sie haben das Recht, die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen (Art. 16 DSGVO)." },
              { titel: "Löschungsrecht", text: "Sie haben das Recht, die Löschung Sie betreffender personenbezogener Daten zu verlangen, soweit gesetzlich zulässig (Art. 17 DSGVO)." },
              { titel: "Widerspruchsrecht", text: "Sie haben das Recht, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen (Art. 21 DSGVO)." },
              { titel: "Beschwerderecht", text: "Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt." },
            ].map((right) => (
              <div key={right.titel} className="flex items-start gap-3 bg-green-50 rounded-xl p-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">{right.titel}</p>
                  <p className="text-sm">{right.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:housniadmy@yahoo.de" className="text-green-600 hover:text-green-800">
              housniadmy@yahoo.de
            </a>
          </p>
        </div>

        {/* 6. Datensicherheit */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">6. Datensicherheit</h2>
          <p className="mb-4">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
            in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung.
          </p>
          <p>
            Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre
            Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust,
            Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
          </p>
        </div>

        {/* 7. Aktualität */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die
            Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher
            beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
            ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter{" "}
            <strong>„Datenschutz"</strong> von Ihnen abgerufen und ausgedruckt werden.
          </p>
        </div>
      </div>
    </div>
  );
}
