import type { IconType } from "react-icons";

interface SectionHeaderProps {
  icon: IconType;
  title: string;
  className?: string;
}

export const SectionHeader = ({
  icon: Icon,
  title,
  className,
}: SectionHeaderProps) => (
  <div className={`flex items-center gap-4 mb-6 ${className ?? ""}`}>
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
      <Icon className="h-6 w-6 text-indigo-700" aria-hidden />
    </div>
    <h2 className="text-3xl font-bold">{title}</h2>
  </div>
);
