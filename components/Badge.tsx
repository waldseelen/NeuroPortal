import React from 'react';

export type BadgeVariant = 'purple' | 'teal' | 'green' | 'amber' | 'red' | 'blue';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'purple', className = '' }) => {
  const styles: Record<BadgeVariant, string> = {
    purple: 'bg-[#EEEDFE] text-[#3C3489] dark:bg-[#26215C] dark:text-[#CECBF6]',
    teal: 'bg-[#E1F5EE] text-[#085041] dark:bg-[#04342C] dark:text-[#9FE1CB]',
    green: 'bg-[#EAF3DE] text-[#27500A] dark:bg-[#173404] dark:text-[#C0DD97]',
    amber: 'bg-[#FAEEDA] text-[#633806] dark:bg-[#412402] dark:text-[#FAC775]',
    red: 'bg-[#FCEBEB] text-[#791F1F] dark:bg-[#501313] dark:text-[#F7C1C1]',
    blue: 'bg-[#E6F1FB] text-[#0C447C] dark:bg-[#042C53] dark:text-[#B5D4F4]',
  };

  return (
    <span
      className={`inline-block text-[11px] px-2 py-0.5 rounded-full font-medium tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
