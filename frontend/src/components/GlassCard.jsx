import React from 'react';
import clsx from 'clsx';

const GlassCard = ({ children, className, hoverEffect = false }) => {
    return (
        <div className={clsx(
            "glass-card p-6",
            hoverEffect && "hover:bg-white/10 transition-colors duration-300",
            className
        )}>
            {children}
        </div>
    );
};

export default GlassCard;
