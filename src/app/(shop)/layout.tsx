import { TopMenu } from "@/components/ui/top-menu/TopMenu";
export default function ShopLayout({ children }: { children }) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
}
