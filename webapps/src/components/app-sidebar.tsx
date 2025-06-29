"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { Table, BarChart, HardDrive, Settings2, Gauge } from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Muhammad Rayandika",
    email: "mrayandika15@mhs.itenas.ac.id",
    avatar: "/avatars/shadcn.jpg",
  },
};

const dashboardItems = [
  {
    title: "Table Count",
    icon: Table,
    url: "#table-count",
    sectionId: "table-count",
  },
  {
    title: "Data Track",
    icon: BarChart,
    url: "#data-track",
    sectionId: "data-track",
  },
  {
    title: "Storage Usage",
    icon: HardDrive,
    url: "#storage-usage",
    sectionId: "storage-usage",
  },
  {
    title: "Query Complexity",
    icon: Settings2,
    url: "#query-complexity",
    sectionId: "query-complexity",
  },
  {
    title: "Query Performance",
    icon: Gauge,
    url: "#query-performance",
    sectionId: "query-performance",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeSection, setActiveSection] = React.useState<string>(
    dashboardItems[0].sectionId
  );

  React.useEffect(() => {
    const sectionIds = dashboardItems.map((item) => item.sectionId);
    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col items-center justify-center py-2">
              <img
                src="https://www.itenas.ac.id/wp-content/uploads/2021/01/Varian-Logo-Itenas-FULL-03-1024x260.png"
                alt="Project Logo"
                className="w-fit h-fit max-w-[180px] max-h-[80px] mb-2 object-contain"
              />
              <span className="text-sm font-semibold text-center">
                Snowflake And Starflake Schema
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeSection === item.sectionId}
                  >
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
