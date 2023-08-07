"use client";

import { useState, useEffect } from "react";

import StoreModal from "@/components/modals/store-modal";

interface ModalProviderProps {}

export default function ModalProvider({}: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
}
