import TimelineSection from "./TimelineSection.jsx";
import { fallbackPortfolio } from "../api/portfolioApi.js";

export default function Education({ data = fallbackPortfolio.education }) {
  return (
    <TimelineSection
      id="education"
      title={data.title}
      eyebrow="Study"
      description={data.description}
      items={data.items}
      variant="education"
      dark
    />
  );
}
