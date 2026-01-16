import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    href,
    variant = "primary",
    size = "md",
    onClick,
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary-600 text-primary hover:bg-primary-700 focus:ring-primary-500 shadow-lg shadow-primary-500/30",
        secondary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
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
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
}