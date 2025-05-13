import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseProvider";

export const usePurchase = () => {
    const context = useContext(PurchaseContext);
    
    if (!context) {
        throw new Error("usePurchase must be used within a PurchaseProvider");
    }
    
    return context;
};
