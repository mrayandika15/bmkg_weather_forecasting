import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SnowflakeIcon, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shritems-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 z-10 bg-white">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="w-full mr-12 flex items-center justify-between gap-3 px-6 py-2 ">
          <div className="flex-1 flex justify-center">
            <Badge>
              <SnowflakeIcon />
              Snowflake View
            </Badge>
          </div>
          <Separator
            orientation="vertical"
            className="mx-10 data-[orientation=vertical]:h-4"
          />
          <div className="flex-1 flex justify-center">
            <Badge>
              <Sparkles />
              Starflake View
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
