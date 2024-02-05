import React, { ButtonHTMLAttributes } from 'react';

type VariantType = 'full' | 'normal';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantType;
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={`${variant === 'full' ? 'bg-default' : 'bg-white'}  ${
        variant === 'full' ? 'text-white' : 'text-black'
      } flex items-center justify-center gap-8 px-6 py-3 rounded-full font-semibold text-lg cursor-pointer transition-all duration-250 ease-in-out w-full`}
      {...props}
    >
      {children}
    </button>
  );
};
