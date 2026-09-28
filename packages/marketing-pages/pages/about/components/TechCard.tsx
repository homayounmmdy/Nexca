import type { TechItem } from "../types";

export const TechCard = ({
  name,
  description,
  Icon,
  iconClassName,
}: TechItem) => (
  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
    <Icon className={`h-8 w-8 mb-4 ${iconClassName ?? ""}`} aria-hidden />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="mt-2">{description}</p>
  </div>
);
