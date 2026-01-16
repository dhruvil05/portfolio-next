interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div
            className={`bg-white rounded-xl border border-gray-200 p-6 ${hover ? "hover:shadow-xl transition-shadow duration-300" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}