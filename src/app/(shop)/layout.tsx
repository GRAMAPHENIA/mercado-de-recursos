import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { SideBar } from "@/components/ui/sidebar/SideBar";
export default function ShopLayout({ children }: { children }) {
  return (
    <main className="min-h-screen max-w-[1560px] m-auto">
      <TopMenu />
      <SideBar />
      <div className="px:0 sm:px-10">{children}</div>
    </main>
  );
}
