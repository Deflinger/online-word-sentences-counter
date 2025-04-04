import { createContext, ReactNode, useContext, useState } from "react";

interface AppContext {
    text: string | null;
    setText: (text: string | null) => void;
  }
  
  
  const AppContext = createContext<AppContext | undefined>(undefined);
  
  
  export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState<string | null>(null);
  
    return (
      <AppContext.Provider value={{ text, setText }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
  };