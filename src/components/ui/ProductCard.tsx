import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, ShoppingCart } from "lucide-react";
import { Produkt } from "@/types";
import { formatPreis } from "@/lib/utils";
import StarRating from "./StarRating";

interface ProductCardProps {
  produkt: Produkt;
  variant?: "default" | "featured" | "compact";
}

export default function ProductCard({ produkt, variant = "default" }: ProductCardProps) {
  if (variant === "compact") {
    return (
      <div className="card p-5 hover:shadow-md transition-shadow duration-200 group">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🤖</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-green-900 text-sm truncate">{produkt.name}</h3>
              {produkt.besteWahl && (
                <span className="badge-best flex-shrink-0 text-xs">{produkt.besteWahl}</span>
              )}
            </div>
            <StarRating rating={produkt.bewertung} size="sm" className="mb-2" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-green-800">{formatPreis(produkt.preis)}</span>
              <Link
                href={`/smart-home/${produkt.slug}`}
                className="text-xs text-green-600 hover:text-green-800 font-medium flex items-center gap-1"
              >
                Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const emojiMap: Record<string, string> = {
    saugroboter: "🤖",
    luftreiniger: "💨",
    thermostat: "🌡️",
    "smart-display": "📱",
    "starter-set": "🏠",
  };

  const emoji = emojiMap[produkt.kategorie] || "🏠";

  return (
    <div
      className={`card hover:shadow-lg transition-all duration-300 group ${
        variant === "featured" ? "ring-2 ring-green-600" : ""
      }`}
    >
      {/* Image/Visual Header */}
      <div className="relative bg-gradient-to-br from-green-50 to-green-100 p-8 flex items-center justify-center h-48">
        <span className="text-6xl">{emoji}</span>
        {produkt.besteWahl && (
          <div className="absolute top-3 left-3">
            <span className="badge-best text-xs">{produkt.besteWahl}</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="badge-kategorie">{produkt.kategorieLabel}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
          {produkt.name}
        </h3>
        <StarRating rating={produkt.bewertung} size="md" className="mb-3" />
        <p className="text-green-700 text-sm mb-4 line-clamp-2">{produkt.kurzBeschreibung}</p>

        {/* Top Features */}
        <ul className="space-y-1.5 mb-5">
          {produkt.pros.slice(0, 3).map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-green-700">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
          {produkt.cons.slice(0, 1).map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-600">
              <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-green-100">
          <div>
            <p className="text-xs text-green-600 mb-0.5">Preis ab</p>
            <p className="text-2xl font-bold text-green-900">{formatPreis(produkt.preis)}</p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={produkt.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Kaufen
            </a>
            <Link
              href={`/smart-home/${produkt.slug}`}
              className="text-center border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition-colors flex items-center gap-2 justify-center"
            >
              Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
