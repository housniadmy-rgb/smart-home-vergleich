import { Produkt } from "@/types";

export const produkte: Produkt[] = [
  {
    id: "1",
    slug: "irobot-roomba-j9-plus",
    name: "iRobot Roomba j9+",
    kategorie: "saugroboter",
    kategorieLabel: "Saugroboter",
    preis: 899,
    bewertung: 4.7,
    besteWahl: "Beste Wahl Saugroboter",
    kurzBeschreibung: "Intelligenter Saugroboter mit automatischer Entleerung und PrecisionVision Navigation",
    beschreibung:
      "Der iRobot Roomba j9+ ist der Spitzenreiter unter den Saugrobotern. Mit seiner revolutionären PrecisionVision-Kamera erkennt er Hindernisse wie Kabel, Schuhe oder Haustiernapfe und umfährt sie souverän. Die automatische Entleerungsstation fasst bis zu 60 Tage Schmutz, sodass Sie sich kaum um den Saugroboter kümmern müssen. Die intelligente Kartierung lernt Ihre Wohnung kennen und optimiert die Reinigungsrouten kontinuierlich.",
    bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/dp/B0BJ16BPZN?tag=bestvpnvergle-21",
    features: [
      "PrecisionVision Navigation",
      "Automatische Entleerung (60 Tage)",
      "Hinderniserkennung mit KI",
      "Alexa & Google Home kompatibel",
      "Teppich-Boost-Technologie",
      "WLAN-Verbindung & App-Steuerung",
    ],
    pros: [
      "Hervorragende Hinderniserkennung",
      "Lange Laufzeit von 75 Minuten",
      "Sehr leise im Betrieb",
      "Einfache Einrichtung per App",
      "Automatische Entleerung spart Zeit",
    ],
    cons: [
      "Hoher Anschaffungspreis",
      "Staubbox der Station vergleichsweise klein",
      "App benötigt Internetverbindung",
    ],
    technischeDaten: [
      { label: "Laufzeit", wert: "bis zu 75 Minuten" },
      { label: "Ladezeit", wert: "ca. 3 Stunden" },
      { label: "Saugleistung", wert: "2.500 Pa" },
      { label: "Geräuschpegel", wert: "58 dB" },
      { label: "Gewicht", wert: "3,5 kg" },
      { label: "Filtertyp", wert: "HEPA-Filter" },
      { label: "Konnektivität", wert: "WLAN 2,4 GHz" },
      { label: "Kompatibilität", wert: "Alexa, Google Home, Siri" },
    ],
    faqs: [
      {
        frage: "Kann der Roomba j9+ auch Tierhaare saugen?",
        antwort:
          "Ja, der Roomba j9+ ist speziell für Haushalte mit Haustieren entwickelt worden. Die gummibeschichteten Doppelbürsten verheddern keine Tierhaare und saugen selbst feine Haare effizient auf.",
      },
      {
        frage: "Wie oft muss ich die Entleerungsstation leeren?",
        antwort:
          "Die automatische Entleerungsstation fasst bis zu 60 Tage Schmutz bei normalem Haushaltsbetrieb. Das ist natürlich von der Wohnungsgröße und dem Verschmutzungsgrad abhängig.",
      },
      {
        frage: "Funktioniert der Roomba j9+ auch auf dunklen Teppichen?",
        antwort:
          "Ja, die PrecisionVision Kamera funktioniert auf allen Bodenbelägen, inklusive dunkler Teppiche. Die Klipper-Erkennung funktioniert allerdings nicht auf tiefschwarzen Böden.",
      },
    ],
  },
  {
    id: "2",
    slug: "roborock-s8-pro-ultra",
    name: "Roborock S8 Pro Ultra",
    kategorie: "saugroboter",
    kategorieLabel: "Saugroboter",
    preis: 1199,
    bewertung: 4.8,
    besteWahl: "Beste Wahl Premium",
    kurzBeschreibung: "Premium-Saugroboter mit Saug- und Wischfunktion sowie vollautomatischer Reinigungsstation",
    beschreibung:
      "Der Roborock S8 Pro Ultra setzt neue Maßstäbe im Bereich der Premium-Saugroboter. Als Alleskönner vereint er kraftvolles Saugen mit bis zu 6.000 Pa und präzises Wischen in einem Gerät. Die vollautomatische Dock-Station entleert den Staubbehälter, wäscht und trocknet den Wischmopp und befüllt den Wassertank automatisch – ein nahezu vollständig autonomes Reinigungserlebnis.",
    bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/dp/B0BXGMQKM4?tag=bestvpnvergle-21",
    features: [
      "6.000 Pa Saugleistung",
      "Aktive Wischfunktion mit Mopp-Heben",
      "Vollautomatische 5-in-1 Dock-Station",
      "ReactiveAI 2.0 Hinderniserkennung",
      "3D-Mapping und Raumkartierung",
      "Multi-Floor-Mapping (4 Etagen)",
    ],
    pros: [
      "Höchste Saugleistung im Test",
      "Vollautomatische Reinigungsstation",
      "Wischmopp hebt sich auf Teppich automatisch",
      "Exzellente Navigationspräzision",
      "Sehr leise trotz hoher Leistung",
    ],
    cons: [
      "Sehr hoher Preis",
      "Dock-Station benötigt viel Platz",
      "App kann anfangs überwältigend sein",
    ],
    technischeDaten: [
      { label: "Laufzeit", wert: "bis zu 180 Minuten" },
      { label: "Ladezeit", wert: "ca. 4 Stunden" },
      { label: "Saugleistung", wert: "6.000 Pa" },
      { label: "Geräuschpegel", wert: "66 dB (max)" },
      { label: "Gewicht", wert: "4,2 kg" },
      { label: "Filtertyp", wert: "E11 HEPA-Filter" },
      { label: "Konnektivität", wert: "WLAN 2,4/5 GHz" },
      { label: "Kompatibilität", wert: "Alexa, Google Home, Siri" },
    ],
    faqs: [
      {
        frage: "Kann der Roborock S8 Pro Ultra Treppen erkennen?",
        antwort:
          "Ja, der Roborock S8 Pro Ultra ist mit fortschrittlichen Sturzsensoren ausgestattet, die Treppen und Kanten zuverlässig erkennen. Er stoppt sicher, bevor er fällt.",
      },
      {
        frage: "Wie lange hält der Wischmopp zwischen den Reinigungen?",
        antwort:
          "Der Wischmopp wird von der Dock-Station nach jeder Reinigung automatisch gewaschen und warmluftgetrocknet. Sie müssen ihn normalerweise nur alle 1–2 Wochen manuell überprüfen.",
      },
      {
        frage: "Funktioniert der Roborock ohne Internetverbindung?",
        antwort:
          "Grundlegende Funktionen wie Starten und Stoppen können über die physischen Tasten bedient werden. Für die vollständige App-Steuerung, Kartierung und Sprachbefehle ist jedoch eine Internetverbindung erforderlich.",
      },
    ],
  },
  {
    id: "3",
    slug: "dreame-l20-ultra",
    name: "Dreame L20 Ultra",
    kategorie: "saugroboter",
    kategorieLabel: "Saugroboter",
    preis: 999,
    bewertung: 4.6,
    kurzBeschreibung: "Leistungsstarker Saugroboter mit Turbo-Saugkraft und intelligentem Hindernis-Avoidance",
    beschreibung:
      "Der Dreame L20 Ultra bietet professionelle Reinigungsleistung zu einem attraktiven Preis-Leistungs-Verhältnis. Mit 7.000 Pa Saugleistung – der stärksten in unserer Vergleichsliste – und einer vollautomatischen Dock-Station inklusive Selbstreinigung des Wischmopps ist er ein echter Konkurrent für teurere Modelle. Die RGB-3D-Hinderniserkennung identifiziert Objekte zuverlässig auch bei schlechten Lichtverhältnissen.",
    bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/s?k=Dreame+L20+Ultra&tag=bestvpnvergle-21",
    features: [
      "7.000 Pa Saugleistung",
      "RGB-3D Hinderniserkennung",
      "Automatische Wischmopp-Reinigung",
      "Warmluft-Trocknung des Mopps",
      "Präzise Laserkartierung",
      "Zeitplanung und Zonenreinigung",
    ],
    pros: [
      "Stärkste Saugleistung im Vergleich",
      "Sehr gutes Preis-Leistungs-Verhältnis",
      "Zuverlässige Hinderniserkennung",
      "Einfache App-Bedienung",
      "Automatische Mopp-Reinigung",
    ],
    cons: [
      "Lauter als die Konkurrenz bei Maximalleistung",
      "Wischleistung unter dem Roborock-Niveau",
      "Kartierung anfangs ungenau",
    ],
    technischeDaten: [
      { label: "Laufzeit", wert: "bis zu 210 Minuten" },
      { label: "Ladezeit", wert: "ca. 3,5 Stunden" },
      { label: "Saugleistung", wert: "7.000 Pa" },
      { label: "Geräuschpegel", wert: "68 dB (max)" },
      { label: "Gewicht", wert: "4,0 kg" },
      { label: "Filtertyp", wert: "HEPA-Filter H13" },
      { label: "Konnektivität", wert: "WLAN 2,4 GHz" },
      { label: "Kompatibilität", wert: "Alexa, Google Home" },
    ],
    faqs: [
      {
        frage: "Wie groß ist der Staubbehälter des Dreame L20 Ultra?",
        antwort:
          "Der Staubbehälter des Dreame L20 Ultra fasst 350 ml. Die Dock-Station übernimmt die automatische Entleerung und verfügt über einen Sammelbeutel mit 3,2 Liter Fassungsvermögen.",
      },
      {
        frage: "Kann der Dreame L20 Ultra mit Google Home gesteuert werden?",
        antwort:
          "Ja, der Dreame L20 Ultra ist vollständig mit Google Home und Amazon Alexa kompatibel. Sie können den Roboter per Sprachbefehl starten, stoppen und in bestimmte Räume schicken.",
      },
      {
        frage: "Wie oft muss der Wassertank der Dock-Station befüllt werden?",
        antwort:
          "Der Frisch- und Schmutzwassertank der Dock-Station fasst je 4 Liter. Bei normaler Nutzung müssen Sie ihn alle 1–2 Wochen befüllen beziehungsweise leeren.",
      },
    ],
  },
  {
    id: "4",
    slug: "philips-luftreiniger-3000i",
    name: "Philips Luftreiniger 3000i",
    kategorie: "luftreiniger",
    kategorieLabel: "Luftreiniger",
    preis: 499,
    bewertung: 4.5,
    besteWahl: "Beste Wahl Luftreiniger",
    kurzBeschreibung: "Leistungsstarker Luftreiniger mit HEPA- und Aktivkohlefilter für Räume bis 130 m²",
    beschreibung:
      "Der Philips Luftreiniger 3000i ist die ideale Wahl für alle, die saubere Luft in ihrem Zuhause sicherstellen möchten. Mit dem mehrschichtigen Filtersystem bestehend aus Vorfilter, True HEPA-Filter und Aktivkohlefilter entfernt er 99,97 % aller Partikel bis zu 0,003 Mikrometer – darunter Staub, Pollen, Tierhaare und sogar Viren. Das integrierte AeraSense-Sensorsystem misst kontinuierlich die Luftqualität und zeigt sie in Echtzeit auf dem Farbdisplay an.",
    bild: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/dp/B07Y68Q3FB?tag=bestvpnvergle-21",
    features: [
      "True HEPA-Filter (99,97% Filterleistung)",
      "Aktivkohlefilter gegen Gerüche",
      "AeraSense Luftqualitätssensor",
      "CADR 400 m³/h",
      "Nachtmodus (14 dB)",
      "App-Steuerung via CleanHome+",
    ],
    pros: [
      "Exzellente Filterleistung",
      "Sehr leiser Nachtmodus",
      "Einfache App-Bedienung",
      "Großer Wirkungsbereich bis 130 m²",
      "Echtzeit-Luftqualitätsanzeige",
    ],
    cons: [
      "Filterersatz relativ teuer",
      "Design etwas klobig",
      "App benötigt Registrierung",
    ],
    technischeDaten: [
      { label: "Wirkungsbereich", wert: "bis zu 130 m²" },
      { label: "CADR", wert: "400 m³/h" },
      { label: "Filtertyp", wert: "True HEPA + Aktivkohle" },
      { label: "Geräuschpegel", wert: "14–65 dB" },
      { label: "Energieverbrauch", wert: "max. 61 W" },
      { label: "Filterwechsel", wert: "alle 12 Monate" },
      { label: "Konnektivität", wert: "WLAN 2,4 GHz" },
      { label: "Maße (H×B×T)", wert: "60 × 33 × 33 cm" },
    ],
    faqs: [
      {
        frage: "Hilft der Philips 3000i gegen Allergien?",
        antwort:
          "Ja, der Philips 3000i ist ideal für Allergiker. Der True HEPA-Filter entfernt 99,97 % aller Allergene wie Pollen, Hausstaubmilben und Tierhaare aus der Luft.",
      },
      {
        frage: "Wie oft muss der Filter gewechselt werden?",
        antwort:
          "Der Filter sollte bei normaler Nutzung (8–12 Stunden täglich) etwa alle 12 Monate gewechselt werden. Die App erinnert Sie rechtzeitig daran.",
      },
      {
        frage: "Kann der Luftreiniger im Schlafzimmer betrieben werden?",
        antwort:
          "Absolut. Im Nachtmodus arbeitet der Philips 3000i mit nur 14 dB – leiser als ein flüsterndes Gespräch. Das Display dimmt automatisch.",
      },
    ],
  },
  {
    id: "5",
    slug: "xiaomi-air-purifier-4",
    name: "Xiaomi Air Purifier 4",
    kategorie: "luftreiniger",
    kategorieLabel: "Luftreiniger",
    preis: 299,
    bewertung: 4.4,
    kurzBeschreibung: "Kompakter Luftreiniger mit OLED-Display und 360°-Filterung für mittelgroße Räume",
    beschreibung:
      "Der Xiaomi Air Purifier 4 bietet ausgezeichnete Reinigungsleistung zu einem sehr attraktiven Preis. Mit seinem zylindrischen 360°-Design und dem dreischichtigen Filtersystem reinigt er die Luft in Räumen bis 48 m² effizient und schnell. Das OLED-Display zeigt Echtzeit-Luftqualitätsdaten, PM2.5-Werte und CO2-Messungen an. Die vollständige Integration in das Xiaomi-Ökosystem und Mi Home App macht ihn besonders für bestehende Smart-Home-Nutzer attraktiv.",
    bild: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/s?k=Xiaomi+Air+Purifier+4&tag=bestvpnvergle-21",
    features: [
      "OLED-Display mit PM2.5 & CO2 Anzeige",
      "360°-Luftansaugung",
      "HEPA H13 Filter",
      "CADR 400 m³/h",
      "Mi Home App Steuerung",
      "Automatik-Modus mit KI-Sensoren",
    ],
    pros: [
      "Sehr gutes Preis-Leistungs-Verhältnis",
      "Günstige Ersatzfilter",
      "Einfache Mi Home Integration",
      "Kompaktes Design",
      "Schnelle Luftreinigung",
    ],
    cons: [
      "Kleinerer Wirkungsbereich als Philips",
      "Kein Aktivkohlefilter im Standard",
      "App nur auf Chinesisch/Englisch optimiert",
    ],
    technischeDaten: [
      { label: "Wirkungsbereich", wert: "bis zu 48 m²" },
      { label: "CADR", wert: "400 m³/h" },
      { label: "Filtertyp", wert: "HEPA H13" },
      { label: "Geräuschpegel", wert: "32–64 dB" },
      { label: "Energieverbrauch", wert: "max. 38 W" },
      { label: "Filterwechsel", wert: "alle 6–12 Monate" },
      { label: "Konnektivität", wert: "WLAN 2,4 GHz" },
      { label: "Maße (H×Ø)", wert: "52 × 24 cm" },
    ],
    faqs: [
      {
        frage: "Ist der Xiaomi Air Purifier 4 für kleine Wohnungen geeignet?",
        antwort:
          "Ja, für Räume bis 48 m² ist der Xiaomi Air Purifier 4 ideal. Er reinigt die Luft eines 20 m² Zimmers in etwa 10 Minuten vollständig.",
      },
      {
        frage: "Funktioniert der Xiaomi mit Google Home?",
        antwort:
          "Ja, der Xiaomi Air Purifier 4 kann über die Mi Home App mit Google Assistant und Amazon Alexa verbunden werden. Die Einrichtung erfolgt in wenigen Schritten.",
      },
      {
        frage: "Wie laut ist das Gerät im Schlafzimmer?",
        antwort:
          "Im Nachtmodus arbeitet der Xiaomi Air Purifier 4 mit ca. 32 dB, was einem sehr leisen Surren entspricht. Die meisten Nutzer empfinden dies als angenehmes Hintergrundgeräusch.",
      },
    ],
  },
  {
    id: "6",
    slug: "tado-smart-thermostat",
    name: "tado° Smart Thermostat",
    kategorie: "thermostat",
    kategorieLabel: "Thermostat",
    preis: 249,
    bewertung: 4.6,
    besteWahl: "Beste Wahl Thermostat",
    kurzBeschreibung: "Intelligentes Thermostat mit Geolokalisierung und Wettervorausschau für maximale Energieeinsparung",
    beschreibung:
      "Das tado° Smart Thermostat ist die klügste Art, Ihre Heizung zu steuern. Durch die Geolokalisierungsfunktion erkennt es, wann Sie das Haus verlassen und senkt die Temperatur automatisch ab – wenn Sie auf dem Heimweg sind, heizt es rechtzeitig wieder auf. Die Wetteranpassung berücksichtigt aktuelle und kommende Wetterdaten, um die Heizung optimal einzustellen. Laut tado° sparen Nutzer durchschnittlich 31 % ihrer Heizkosten.",
    bild: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/dp/B07GYRFGB8?tag=bestvpnvergle-21",
    features: [
      "Geolokalisierung (Auto-Away)",
      "Wettervorausschau-Anpassung",
      "Energiebericht & Einsparanalyse",
      "Kompatibel mit 95% aller Heizsysteme",
      "Alexa, Google Home, HomeKit",
      "Open Window Detection",
    ],
    pros: [
      "Erhebliche Energieeinsparung (bis 31%)",
      "Einfache Installation (kein Elektriker nötig)",
      "Exzellente Smart Home Integration",
      "Intuitive App-Bedienung",
      "Fenster-offen-Erkennung",
    ],
    cons: [
      "Optionale Auto-Assist Funktion kostenpflichtig",
      "Benötigt Internet für volle Funktionalität",
      "Nur für Zentralheizung geeignet",
    ],
    technischeDaten: [
      { label: "Kompatibilität", wert: "95% aller Heizsysteme" },
      { label: "Temperaturbereich", wert: "5–25°C" },
      { label: "Display", wert: "LCD-Display" },
      { label: "Konnektivität", wert: "WLAN 2,4 GHz" },
      { label: "Spannungsversorgung", wert: "Batterie (AA) oder Kabel" },
      { label: "Maße", wert: "86 × 86 × 21 mm" },
      { label: "Smart Home", wert: "Alexa, Google, HomeKit" },
      { label: "Zertifizierungen", wert: "CE, TÜV" },
    ],
    faqs: [
      {
        frage: "Brauche ich einen Elektriker für die Installation?",
        antwort:
          "Nein, das tado° Smart Thermostat können Sie in den meisten Fällen selbst installieren. Die tado° App führt Sie Schritt für Schritt durch die Installation und enthält Anleitungen für über 30.000 Heizungsmodelle.",
      },
      {
        frage: "Was ist die Auto-Assist Funktion?",
        antwort:
          "Auto-Assist ist eine optionale kostenpflichtige Erweiterung (2,99€/Monat), die automatisch auf offene Fenster reagiert und die Geolokalisierung für alle Haushaltsmitglieder aktiviert. Ohne sie müssen manche Funktionen manuell ausgelöst werden.",
      },
      {
        frage: "Wie viel Energie kann ich wirklich sparen?",
        antwort:
          "Laut einer unabhängigen Studie sparen tado° Nutzer durchschnittlich 31 % ihrer Heizkosten. Die tatsächliche Einsparung hängt von Ihrem bisherigen Heizverhalten, der Wohnungsgröße und dem Heizsystem ab.",
      },
    ],
  },
  {
    id: "7",
    slug: "bosch-smart-home-starter-set",
    name: "Bosch Smart Home Starter Set",
    kategorie: "starter-set",
    kategorieLabel: "Starter Set",
    preis: 199,
    bewertung: 4.4,
    kurzBeschreibung: "Komplettes Einsteiger-Paket für ein vernetztes Zuhause von der deutschen Qualitätsmarke",
    beschreibung:
      "Das Bosch Smart Home Starter Set ist der ideale Einstieg in die Welt des Smart Home. Das Set enthält den Bosch Smart Home Controller, zwei smarte Zwischenstecker und einen Tür/Fensterkontakt. Das deutsche Qualitätsprodukt überzeugt durch einfache Installation, eine intuitive App und hohe Datenschutzstandards – alle Daten werden auf europäischen Servern gespeichert. Das offene System lässt sich mit über 200 kompatiblen Geräten anderer Hersteller erweitern.",
    bild: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/s?k=Bosch+Smart+Home+Starter+Set&tag=bestvpnvergle-21",
    features: [
      "Smart Home Controller (Hub)",
      "2× Smarte Zwischenstecker",
      "Tür/Fensterkontakt inklusive",
      "Kompatibel mit 200+ Geräten",
      "Europäische Datenspeicherung (DSGVO)",
      "Alexa & Google Home Integration",
    ],
    pros: [
      "Deutsche Qualität und Zuverlässigkeit",
      "Hohe Datenschutzstandards",
      "Einfache Erweiterung des Systems",
      "Kein Abonnement nötig",
      "Gute Offline-Funktionalität",
    ],
    cons: [
      "Teurer als chinesische Alternativen",
      "Weniger Drittanbieter-Geräte als bei Amazon",
      "App weniger intuitiv als tado°",
    ],
    technischeDaten: [
      { label: "Im Lieferumfang", wert: "Controller + 2 Stecker + Sensor" },
      { label: "Konnektivität", wert: "WLAN, Zigbee, Z-Wave" },
      { label: "Max. Geräte", wert: "bis zu 100 Geräte" },
      { label: "Datenspeicherung", wert: "EU-Server (DSGVO-konform)" },
      { label: "Spannungsversorgung", wert: "230V AC" },
      { label: "Smart Home", wert: "Alexa, Google Home" },
      { label: "App", wert: "iOS & Android" },
      { label: "Garantie", wert: "2 Jahre" },
    ],
    faqs: [
      {
        frage: "Kann ich das Bosch Smart Home System mit anderen Herstellern kombinieren?",
        antwort:
          "Ja, das Bosch Smart Home System ist ein offenes System, das mit über 200 Geräten anderer Hersteller kompatibel ist, darunter Philips Hue, Rademacher, Devolo und viele mehr.",
      },
      {
        frage: "Funktioniert Bosch Smart Home auch ohne Internet?",
        antwort:
          "Ja, das ist einer der großen Vorteile. Der lokale Smart Home Controller ermöglicht die Steuerung vieler Funktionen auch ohne Internetverbindung – Ihre Automatisierungen laufen weiter.",
      },
      {
        frage: "Ist das Bosch Smart Home System DSGVO-konform?",
        antwort:
          "Ja, alle Daten werden auf europäischen Servern in Frankfurt gespeichert und verarbeitet. Bosch hält sich strikt an die europäischen Datenschutzrichtlinien.",
      },
    ],
  },
  {
    id: "8",
    slug: "amazon-echo-show-10",
    name: "Amazon Echo Show 10",
    kategorie: "smart-display",
    kategorieLabel: "Smart Display",
    preis: 259,
    bewertung: 4.5,
    besteWahl: "Beste Wahl Smart Display",
    kurzBeschreibung: "Smart Display mit 10-Zoll-HD-Touchscreen und automatischer Drehfunktion zum Nutzer",
    beschreibung:
      "Der Amazon Echo Show 10 ist das bisher ausgefeilteste Smart Display von Amazon. Das 10,1 Zoll große HD-Display dreht sich motorisiert immer zu Ihnen, egal wo Sie sich im Raum befinden – dank eingebauter Kamera und Bewegungsverfolgung. Er ist der perfekte Kommandocentral für Ihr Smart Home: Steuern Sie Alexa-kompatible Geräte per Sprachbefehl oder Touchscreen, führen Sie Videoanrufe, kochen Sie nach Rezepten und genießen Sie Musik, Videos und mehr.",
    bild: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&q=80",
    affiliateUrl: "https://www.amazon.de/dp/B07VHZ41L8?tag=bestvpnvergle-21",
    features: [
      "10,1 Zoll Full HD Touchscreen",
      "Motorisierte 360°-Drehung",
      "13 MP Kamera mit Bewegungsverfolgung",
      "Alexa Smart Home Hub",
      "Zigbee-Hub integriert",
      "Amazon Music, Netflix, Prime Video",
    ],
    pros: [
      "Innovatives rotierendes Display",
      "Exzellenter Alexa-Assistent",
      "Integrierter Zigbee-Hub spart Kosten",
      "Gute Lautsprecherqualität",
      "Viele kompatible Dienste und Geräte",
    ],
    cons: [
      "Datenschutzbedenken bei Amazon",
      "Kamera nur für Amazon-Ökosystem optimiert",
      "Google Home Kompatibilität eingeschränkt",
    ],
    technischeDaten: [
      { label: "Display", wert: "10,1 Zoll Full HD (1280×800)" },
      { label: "Kamera", wert: "13 MP mit Motorisierung" },
      { label: "Lautsprecher", wert: "Stereo (2× 1 Zoll + Woofer)" },
      { label: "Konnektivität", wert: "WLAN, Bluetooth, Zigbee" },
      { label: "Prozessor", wert: "Octa-Core (2,0 GHz)" },
      { label: "Spannungsversorgung", wert: "30W Netzteil" },
      { label: "Maße", wert: "25 × 17 × 17 cm" },
      { label: "Smart Home", wert: "Alexa, Zigbee-Hub integriert" },
    ],
    faqs: [
      {
        frage: "Kann ich die Kamera des Echo Show 10 deaktivieren?",
        antwort:
          "Ja, der Echo Show 10 hat einen physischen Kamera/Mikrofon-Deaktivierungsschalter. Wenn er aktiviert ist, sind Kamera und Mikrofon vollständig ausgeschaltet und können nicht per Software reaktiviert werden.",
      },
      {
        frage: "Funktioniert das Echo Show 10 als Überwachungskamera?",
        antwort:
          "Ja, mit der Alexa Guard Plus oder Home Monitoring-Funktion (Amazon-Abonnement erforderlich) können Sie den Echo Show 10 als Überwachungskamera nutzen und Live-Bilder auf Ihrem Smartphone ansehen.",
      },
      {
        frage: "Welche Streaming-Dienste sind verfügbar?",
        antwort:
          "Der Echo Show 10 unterstützt Amazon Prime Video, Netflix und viele andere Dienste. YouTube ist über den Browser zugänglich. Für Musik stehen Spotify, Amazon Music und Apple Music zur Verfügung.",
      },
    ],
  },
];

export function getProdukteByKategorie(kategorie: string): Produkt[] {
  return produkte.filter((p) => p.kategorie === kategorie);
}

export function getProduktBySlug(slug: string): Produkt | undefined {
  return produkte.find((p) => p.slug === slug);
}

export function getBestChoice(): Produkt[] {
  return produkte.filter((p) => p.besteWahl);
}
