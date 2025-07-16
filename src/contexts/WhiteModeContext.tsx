import React, { createContext, useContext, useState } from 'react';

interface WhiteModeContextType {
  isWhiteMode: boolean;
  toggleWhiteMode: () => void;
  getBackgroundClass: () => string;
}

const WhiteModeContext = createContext<WhiteModeContextType | undefined>(undefined);

export const WhiteModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);

  const toggleWhiteMode = () => {
    setIsWhiteMode(!isWhiteMode);
  };

  const getBackgroundClass = () => {
    return isWhiteMode ? 'bg-white' : 'bg-[#FFDEE2]';
  };

  return (
    <WhiteModeContext.Provider value={{ isWhiteMode, toggleWhiteMode, getBackgroundClass }}>
      {children}
    </WhiteModeContext.Provider>
  );
};

export const useWhiteMode = () => {
  const context = useContext(WhiteModeContext);
  if (context === undefined) {
    throw new Error('useWhiteMode must be used within a WhiteModeProvider');
  }
  return context;
}; 