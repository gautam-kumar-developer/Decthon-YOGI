import React from 'react';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

const NeonButton = ({
    children,
    variant = 'cyan', // cyan, pink, green
    isLoading = false,
    className,
    ...props
}) => {
    const baseStyles = "neon-button relative overflow-hidden flex items-center justify-center gap-2";

    const variants = {
        cyan: "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan shadow-glow-cyan hover:bg-neon-cyan hover:text-black",
        pink: "bg-neon-pink/10 text-neon-pink border border-neon-pink shadow-glow-pink hover:bg-neon-pink hover:text-white",
        green: "bg-neon-green/10 text-neon-green border border-neon-green shadow-glow-green hover:bg-neon-green hover:text-black",
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], isLoading && "opacity-70 cursor-not-allowed", className)}
            disabled={isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {children}
        </button>
    );
};

export default NeonButton;
