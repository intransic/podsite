import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { siteCopy } from "@/content/site-copy";
import FaqAccordionItem from "@/components/faq-accordion-item";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteCopy.siteName}.`,
};

const sortedFaqs = [...faqs].sort((a, b) => a.displayOrder - b.displayOrder);

export default function FaqPage() {
  return (
    <div className="container faq-page">
      <header>
        <h1 className="page-header__heading">Frequently Asked Questions</h1>
        <p className="page-header__subheading" style={{ marginTop: "0.75rem" }}>
          Everything you want to know about {siteCopy.siteName}.
        </p>
      </header>
      <ol className="faq-list" aria-label="Frequently asked questions">
        {sortedFaqs.map((item) => (
          <li key={item.id}>
            <FaqAccordionItem item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}
