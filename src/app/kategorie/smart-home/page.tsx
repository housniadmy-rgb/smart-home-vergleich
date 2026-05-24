import type { Metadata } from "next";
import { produkte } from "@/data/produkte";
import ProductCard from "@/components/ui/ProductCard";
import { Bot, Wind, Thermometer, Monitor, Home, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Alle Smart Home Geräte 2025 – Saugroboter, Luftreiniger & mehr",
  description:
    "Alle Smart Home Geräte und Haushaltsgeräte im Überblick: Saugroboter, Luftreiniger, Thermostate und Smart Displays. Testsieger 2025 mit Preisen und Bewertungen.",
};

const kategorien = [
  { id: "alle", name: "Alle Geräte", icon: Home },
  { id: "saugroboter", name: "Saugroboter", icon: Bot },
  { id: "luftreiniger", name: "Luftreiniger", icon: Wind },
  { id: "thermostat", name: "Thermostate", icon: Thermometer },
  { id: "smart-display", name: "Smart Displays", icon: Monitor },
  { id: "starter-set", name: "Starter Sets", icon: Home },
];

export default function SmartHomePage() {
  const gruppiertProdukte = {
    saugroboter: produkte.filter((p) => p.kategorie === "saugroboter"),
    luftreiniger: produkte.filter((p) => p.kategorie === "luftreiniger"),
    thermostat: produkte.filter((p) => p.kategorie === "thermostat"),
    "smart-display": produkte.filter((p) => p.kategorie === "smart-display"),
    "starter-set": produkte.filter((p) => p.kategorie === "starter-set"),
  };

  const kategorieInfo = {
    saugroboter: {
      name: "Saugroboter",
      icon: "🤖",
      beschreibung:
        "Automatisches Saugen und Wischen – die smarten Helfer halten Ihre Böden sauber, während Sie sich um Wichtigeres kümmern.",
    },
    luftreiniger: {
      name: "Luftreiniger",
      icon: "💨",
      beschreibung:
        "Saubere Luft für zuhause – besonders wichtig für Allergiker, Haustierbesitzer und Menschen in städtischen Gebieten.",
    },
    thermostat: {
      name: "Thermostate",
      icon: "🌡️",
      beschreibung:
        "Smart heizen und sparen – intelligente Thermostate lernen Ihre Gewohnheiten und reduzieren den Energieverbrauch automatisch.",
    },
    "smart-display": {
      name: "Smart Displays",
      icon: "📱",
      beschreibung:
        "Die Schaltzentrale Ihres Smart Home – steuern Sie alle vernetzten Geräte über ein intuitives Touchdisplay.",
    },
    "starter-set": {
      name: "Starter Sets",
      icon: "🏠",
      beschreibung: "Der perfekte Einstieg ins Smart Home – alles was Sie für den Start brauchen, in einem Paket.",
    },
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <Home className="w-4 h-4" />
            <span>Startseite</span>
            <span>/</span>
            <span>Kategorien</span>
            <span>/</span>
            <span className="text-white">Smart Home</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Smart Home Geräte 2025</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Alle {produkte.length} getesteten Produkte im Überblick. Von Saugrobotern bis Smart Displays – finden Sie
            das beste Gerät für Ihr Zuhause.
          </p>
        </div>
      </section>

      {/* Schnellfilter */}
      <section className="bg-white border-b border-green-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-green-600 flex-shrink-0" />
            {kategorien.map((kat) => {
              const Icon = kat.icon;
              return (
                <a
                  key={kat.id}
                  href={kat.id === "alle" ? "#" : `#${kat.id}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-green-200 text-green-700 hover:bg-green-50 hover:border-green-400 transition-colors flex-shrink-0"
                >
                  <Icon className="w-4 h-4" />
                  {kat.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Produkte nach Kategorie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {(Object.entries(gruppiertProdukte) as [keyof typeof gruppiertProdukte, typeof produkte][]).map(
          ([kategorie, prods]) => {
            if (prods.length === 0) return null;
            const info = kategorieInfo[kategorie];
            return (
              <section key={kategorie} id={kategorie} className="mb-16 scroll-mt-28">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {info.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-1">{info.name}</h2>
                    <p className="text-green-600 max-w-2xl">{info.beschreibung}</p>
                    <p className="text-sm text-green-500 mt-1">{prods.length} Produkte im Test</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {prods.map((produkt) => (
                    <ProductCard key={produkt.id} produkt={produkt} />
                  ))}
                </div>
              </section>
            );
          }
        )}
      </div>
    </>
  );
}
