import { createContext, useState, useContext, useEffect } from 'react';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");

    const updateDeviceType = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    // Initial check
    updateDeviceType();

    // Add listeners
    mobileQuery.addEventListener("change", updateDeviceType);
    tabletQuery.addEventListener("change", updateDeviceType);

    return () => {
      mobileQuery.removeEventListener("change", updateDeviceType);
      tabletQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};

export default DeviceContext; 