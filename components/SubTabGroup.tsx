import React from 'react';
import { TabItem } from './TabGroup';

interface SubTabGroupProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const SubTabGroup: React.FC<SubTabGroupProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-1.5 mb-5 ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-3 py-1.5 rounded-full border transition-all duration-150 text-[12px] font-medium cursor-pointer ${
              isActive
                ? 'bg-text-info text-white border-transparent font-semibold shadow-sm'
                : 'bg-bg-secondary text-text-secondary border-border-tertiary hover:bg-bg-primary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
