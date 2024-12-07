import { createContext, useEffect, useState } from "react";
import contextFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await contextFlagDataServiceCall();
      setEnableFlags(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
