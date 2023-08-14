"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import Avatar from "@/components/ui/Avatar";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
  const session = useSession();
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div>
      <Avatar image={session.data?.user?.image} />
      RootPage
    </div>
  );
}
