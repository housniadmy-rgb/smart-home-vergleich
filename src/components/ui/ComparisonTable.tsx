import Link from "next/link";
import { Check, X, ShoppingCart, Star } from "lucide-react";
import { Produkt } from "@/types";
import { formatPreis } from "@/lib/utils";

interface ComparisonTableProps {
  produkte: Produkt[];
}

export default function ComparisonTable({ produkte }: ComparisonTableProps) {
  const allFeatures = Array.from(new Set(produkte.flatMap((p) => p.features)));

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-green-200">
            <th className="text-left p-4 font-semibold text-green-700 min-w-[200px] bg-green-50 rounded-tl-xl">
              Merkmal
            </th>
            {produkte.map((p) => (
              <th key={p.id} className="p-4 text-center min-w-[180px] bg-green-50 last:rounded-tr-xl">
                <div className="space-y-2">
                  {p.besteWahl && (
                    <span className="inline-block bg-green-800 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {p.besteWahl}
                    </span>
                  )}
                  <p className="font-bold text-green-900 leading-tight">{p.name}</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span className="font-semibold text-green-800">{p.bewertung}</span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Preis */}
          <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
            <td className="p-4 font-semibold text-green-800">Preis</td>
            {produkte.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <span className="font-bold text-green-900 text-base">{formatPreis(p.preis)}</span>
              </td>
            ))}
          </tr>

          {/* Kategorie */}
          <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
            <td className="p-4 font-semibold text-green-800">Kategorie</td>
            {produkte.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <span className="badge-kategorie">{p.kategorieLabel}</span>
              </td>
            ))}
          </tr>

          {/* Technische Daten */}
          {produkte[0]?.technischeDaten.map((daten) => {
            const label = daten.label;
            return (
              <tr key={label} className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                <td className="p-4 text-green-700">{label}</td>
                {produkte.map((p) => {
                  const match = p.technischeDaten.find((d) => d.label === label);
                  return (
                    <td key={p.id} className="p-4 text-center text-green-800">
                      {match ? match.wert : <span className="text-gray-300">–</span>}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {/* Features */}
          {allFeatures.slice(0, 6).map((feature) => (
            <tr key={feature} className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
              <td className="p-4 text-green-700 text-xs leading-relaxed">{feature}</td>
              {produkte.map((p) => (
                <td key={p.id} className="p-4 text-center">
                  {p.features.includes(feature) ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-300 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* CTA Row */}
          <tr className="bg-green-50">
            <td className="p-4 font-semibold text-green-800">Kaufen</td>
            {produkte.map((p) => (
              <td key={p.id} className="p-4 text-center space-y-2">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Bei Amazon
                </a>
                <Link
                  href={`/smart-home/${p.slug}`}
                  className="block text-xs text-green-600 hover:text-green-800 transition-colors"
                >
                  Zum Test →
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
