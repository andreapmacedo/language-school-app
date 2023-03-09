import { createContext, useState, useMemo, ReactNode } from 'react';

// const GlobalContext = createContext();


interface ContextProps {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const GlobalContext = createContext<ContextProps>({
  cart: [],
  setCart: () => {},
  products: [],
  setProducts: () => {},
});

interface Props {
  children: ReactNode;
}

function GlobalProvider({ children }: Props) {
  const [cart, setCart] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
    
  const value = useMemo(() => ({
    cart,
    setCart,
    products,
    setProducts
  }), [cart, products]);

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalProvider, GlobalContext };