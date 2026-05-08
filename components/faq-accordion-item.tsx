"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faqs";

interface FaqAccordionItemProps {
  item: FaqItem;
}

export default function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="faq-item">
      <button
        className="faq-item__question"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((o) => !o)}
      >
        {item.question}
        <svg
          className={`faq-item__icon${open ? " faq-item__icon--open" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      {open && (
        <div id={answerId} className="faq-item__answer" role="region" aria-label={item.question}>
          {item.answer}
        </div>
      )}
    </div>
  );
}
