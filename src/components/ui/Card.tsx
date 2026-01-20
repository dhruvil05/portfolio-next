interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div
            className={`bg-card text-card-foreground rounded-xl border border-border p-6 ${hover ? "hover:border-primary/50 hover:shadow-lg transition-all duration-300" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}