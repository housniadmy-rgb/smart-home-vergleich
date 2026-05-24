export interface TechnischeDaten {
  label: string;
  wert: string;
}

export interface FAQ {
  frage: string;
  antwort: string;
}

export interface Produkt {
  id: string;
  slug: string;
  name: string;
  kategorie: KategorieId;
  kategorieLabel: string;
  preis: number;
  bewertung: number;
  besteWahl?: string;
  kurzBeschreibung: string;
  beschreibung: string;
  bild: string;
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  technischeDaten: TechnischeDaten[];
  faqs: FAQ[];
}

export type KategorieId = "saugroboter" | "luftreiniger" | "thermostat" | "smart-display" | "starter-set";

export interface Kategorie {
  id: KategorieId;
  label: string;
  beschreibung: string;
  icon: string;
}
