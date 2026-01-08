import React from 'react';
import clsx from 'clsx';

const NeonTextarea = ({
    label,
    error,
    className,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>}
            <textarea
                className={clsx(
                    "glass-input px-4 py-3 rounded-lg w-full min-h-[100px]",
                    error && "border-red-500 focus:border-red-500",
                    className
                )}
                {...props}
            />
            {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
        </div>
    );
};

export default NeonTextarea;
