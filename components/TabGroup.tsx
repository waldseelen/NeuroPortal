import React from 'react';

export interface TabItem {
  id: string;
  label: string;
}

interface TabGroupProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 m-0 p-0 ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ease-in-out text-[13px] font-medium cursor-pointer ${
              isActive
                ? 'bg-bg-info text-text-info border-transparent font-semibold shadow-sm scale-[1.02]'
                : 'bg-transparent text-text-secondary border-border-secondary hover:bg-bg-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
