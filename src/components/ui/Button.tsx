'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 
  | 'primary'       // Gradiente principal da marca (iGoodonto Cyan & Blue)
  | 'whatsapp'      // Gradiente verde esmeralda / teal para WhatsApp e alta conversão
  | 'secondary'     // Estilo claro e sutil para ações secundárias
  | 'outline'       // Contorno elegante com a cor da marca
  | 'outlineWhite'  // Contorno branco para seções escuras com blur
  | 'glass'         // Efeito de vidro escuro translúcido com borda suave
  | 'white'         // Fundo branco sólido com texto escuro para alto contraste
  | 'subtle'        // Botão cinza escuro para cards secundários
  | 'teal';         // Tom ciano/turquesa vibrante

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';
export type ButtonShape = 'default' | 'full' | '2xl' | 'lg' | 'pill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 
    'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-800 hover:to-brand-600 text-white shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md border-0',
  whatsapp: 
    'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:scale-[1.02] sm:hover:scale-105 active:scale-100 border-0 font-extrabold',
  secondary: 
    'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 active:bg-slate-300 font-semibold',
  outline: 
    'bg-transparent hover:bg-brand-50 text-brand-700 hover:text-brand-800 border border-brand-600/40 hover:border-brand-600 font-semibold active:bg-brand-100',
  outlineWhite: 
    'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm active:bg-white/30 font-medium',
  glass: 
    'bg-slate-900/80 hover:bg-slate-800/90 text-white border border-white/15 hover:border-cyan-400/40 backdrop-blur-md shadow-lg active:scale-[0.99] font-semibold',
  white: 
    'bg-white hover:bg-slate-100 text-brand-900 font-extrabold shadow-xl hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 active:scale-100 border-0',
  subtle: 
    'bg-slate-800/80 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-400/50 transition-all font-semibold',
  teal: 
    'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white border-0 shadow-lg hover:scale-[1.02] active:scale-100 font-bold',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-xs py-1.5 px-3 gap-1.5',
  sm: 'text-xs sm:text-sm py-2 px-3.5 gap-1.5 font-semibold',
  md: 'text-sm sm:text-[15px] py-2.5 sm:py-3 px-5 sm:px-6 gap-2 font-bold',
  lg: 'text-base sm:text-lg py-3.5 sm:py-4 px-7 sm:px-8 gap-2.5 font-extrabold',
  icon: 'p-2.5 sm:p-3 min-w-[40px] min-h-[40px] flex items-center justify-center',
};

const shapeStyles: Record<ButtonShape, string> = {
  default: 'rounded-xl',
  lg: 'rounded-xl',
  '2xl': 'rounded-2xl',
  pill: 'rounded-full',
  full: 'rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'default',
      fullWidth = false,
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      className = '',
      href,
      target,
      rel,
      onClick,
      type = 'button',
      ...restProps
    },
    ref
  ) => {
    const baseClasses = 
      'inline-flex items-center justify-center select-none text-center transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer';

    const combinedClasses = [
      baseClasses,
      variantStyles[variant],
      sizeStyles[size],
      shapeStyles[shape],
      fullWidth ? 'w-full' : '',
      loading ? 'opacity-80 cursor-wait' : '',
      className,
    ].filter(Boolean).join(' ');

    const content = (
      <>
        {loading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!loading && leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!loading && rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
      </>
    );

    // If an href is provided, render as link
    if (href) {
      const isInternal = href.startsWith('#') || href.startsWith('/');
      const isExternal = !isInternal || target === '_blank';
      const safeRel = isExternal && !rel ? 'noopener noreferrer' : rel;

      if (isInternal && !target && !href.startsWith('#')) {
        return (
          <Link
            href={href}
            className={combinedClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {content}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target={target}
          rel={safeRel}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className={combinedClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={combinedClasses}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
