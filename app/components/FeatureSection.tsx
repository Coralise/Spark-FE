import { ReactElement } from 'react';

interface FeatureSectionProps {
    readonly title: string;
    readonly description: string;
    readonly icon: ReactElement;
}

export default function FeatureSection({ title, description, icon }: FeatureSectionProps) {
  return (
    <div className="p-4 rounded-lg border border-neutral-500 mx-8">
        <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl">{icon}</div>
            <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <p>{description}</p>
    </div>
  );
}