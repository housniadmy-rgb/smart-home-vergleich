"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/types";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-green-200 rounded-xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-green-50 transition-colors"
          >
            <span className="font-semibold text-green-900 pr-4">{faq.frage}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5">
              <p className="text-green-700 leading-relaxed">{faq.antwort}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
