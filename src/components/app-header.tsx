import { SidebarTrigger } from "@/components/ui/sidebar";


export const AppHeader = () => {
    return (
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-sidebar sticky top-0 z-50">
            <SidebarTrigger />
            Nodebase
        </header>
    );
};