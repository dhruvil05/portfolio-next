import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    variant = "primary",
    size = "md",
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "border border-input bg-background hover:bg-muted hover:text-accent-foreground",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-sm",
        lg: "h-11 px-8 text-base",
    };

    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles} disabled={disabled}>
            {children}
        </button>
    );
}