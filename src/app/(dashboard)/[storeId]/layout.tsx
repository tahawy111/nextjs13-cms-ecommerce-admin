import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { storeId: string };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/auth");
  }

  const store = await db.store.findFirst({
    where: { id: params.storeId, userId: session.user.id },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This will be a navbar</div>
      {children}
    </>
  );
}
