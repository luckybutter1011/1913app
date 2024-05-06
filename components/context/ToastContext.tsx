
'use client'
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Spinner from "@/components/UI/Spinner";

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextType {
  toast: any;
}

export const ToastContext = createContext<DataContextType | null>(null);

const ToastProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [isLoading, SetLoading] = useState<any>(false);
  useEffect(()=>{
    setTimeout(() => {SetLoading(true)}, 500)
  },[])
  return (
    <ToastContext.Provider value={{ toast }}>
      {isLoading?<>{children}</> :<Spinner />}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
