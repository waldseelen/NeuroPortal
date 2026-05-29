import React from 'react';

interface InfoBoxProps {
  children: React.ReactNode;
  type: 'tip' | 'warn';
  className?: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ children, type, className = '' }) => {
  if (type === 'tip') {
    return (
      <div
        className={`bg-bg-info text-text-info text-[13px] border border-border-tertiary rounded-md p-3.5 mb-3.5 leading-relaxed transition-all animate-fadeIn ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`bg-[#FAEEDA] text-[#633806] dark:bg-[#412402] dark:text-[#FAC775] dark:border-[#633806] text-[13px] border border-border-tertiary rounded-md p-3.5 mb-3.5 leading-relaxed transition-all animate-fadeIn ${className}`}
    >
      {children}
    </div>
  );
};
