interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success";
    className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
    const variants = {
        primary: "bg-primary-100 text-primary-700",
        secondary: "bg-gray-100 text-gray-700",
        success: "bg-green-100 text-green-700",
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}