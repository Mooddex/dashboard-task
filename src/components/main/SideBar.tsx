import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Settings, ShoppingCart, Mail, ShoppingBasket, Bell, Info, Users } from "lucide-react";

    const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "/dashboard/product",
    icon: ShoppingBasket,
  },
 
  
  {
    title: "Clients",
    url: "/dashboard/client",
    icon: Users,
  },

  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
    {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
  },
    {
    title: "Help",
    url: "/dashboard/help",
    icon: Info,
  },

]
export default function SideBar(){
  return ( 
    <div>
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
 
    </div>
   );
}
 
