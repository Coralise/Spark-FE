import { ReactElement } from 'react';

interface CardProps {
    readonly title: string;
    readonly description: string;
    readonly icon: ReactElement;
    readonly className?: string;
}

export default function Card({ title, description, icon, className }: CardProps) {
    return (
        <div 
            className={`border border-neutral-700 aspect-[9/12] p-4 rounded-lg shadow-md ${className}`}
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl">{icon}</div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <p className="mt-2 line-clamp-8 overflow-hidden text-ellipsis">{description}</p>
        </div>
    );
}