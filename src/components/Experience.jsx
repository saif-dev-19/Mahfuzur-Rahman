import TimelineSection from "./TimelineSection.jsx";
import { fallbackPortfolio } from "../api/portfolioApi.js";

export default function Experience({ data = fallbackPortfolio.experience }) {
  return (
    <TimelineSection
      id="experience"
      title={data.title}
      eyebrow="Work"
      description={data.description}
      items={data.items}
    />
  );
}
