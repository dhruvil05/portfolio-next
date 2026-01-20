interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "outline";
    className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
    const variants = {
        primary: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-muted text-muted-foreground border border-transparent",
        success: "bg-green-500/10 text-green-600 border border-green-500/20 dark:text-green-400",
        outline: "bg-transparent text-foreground border border-border",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}