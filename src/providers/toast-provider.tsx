"use client";

import { Toaster } from "react-hot-toast";

interface ToastProviderProps {}

export default function ToastProvider({}: ToastProviderProps) {
  return (
    <>
      <Toaster />
    </>
  );
}
