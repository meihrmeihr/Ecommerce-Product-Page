import { createContext, useState } from "react";

export const Count = createContext({});
export default function Countcontext({ children }) {
  const [count, setCount] = useState(0);
  const [boughtProduct, setBoughtProduct] = useState(null);

  const val = {
    count,
    setCount,
    boughtProduct,
    setBoughtProduct,
  };
  return <Count.Provider value={val}>{children}</Count.Provider>;
}
