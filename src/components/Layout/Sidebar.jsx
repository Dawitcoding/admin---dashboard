import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import user from "../../assets/user.png";

const Sidebar = () => {
  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: "true",
      badge: "New",
    },
    {
      id: "analaytics",
      icon: BarChart3,
      label: "Analaytics",
      submenu: [
        { id: "overview", label: "overview" },
        { id: "reports", label: "Reports" },
        { id: "insights", label: "Insights" },
      ],
    },
    {
      id: "users",
      icon: Users,
      label: "Users",
      count: "2.4k",
      submenu: [
        { id: "all-users", label: "All users" },
        { id: "roles", label: "Roles & Permissions" },
        { id: "activity", label: "User Activity" },
      ],
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      label: "Ecommerce",
      submenu: [
        { id: "products", label: "Products" },
        { id: "orders", label: "Orders" },
        { id: "customers", label: "Customers" },
      ],
    },
    {
      id: "inventory",
      icon: Package,
      label: "Inventory",
      count: "847",
    },
    {
      id: "transactions",
      icon: CreditCard,
      label: "Transactions",
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "messages",
      badge: "12",
    },
    {
      id: "calendar",
      icon: Calendar,
      label: "Calendar",
    },
    {
      id: "reports",
      icon: FileText,
      label: "Reports",
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
    },
  ];
  return (
    <div className="w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              David
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5`} />
                {/* conditional rendering */}
                <>
                  <span className="font-medium ml-2">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs text-white rounded-full bg-red-500">
                      {item.badge}
                    </span>
                  )}
                  {item.count && (
                    <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {item.count}
                    </span>
                  )}
                </>
              </div>
              {item.submenu && (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>

            {/* submenu
            <div>
              {item.submenu.map((subitem) => (
                <button key={subitem.id}>{subitem.label}</button>
              ))}
            </div> */}
          </div>
        ))}
      </nav>

      {/* user profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src={user}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-400"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white trancate">
              David Coding
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 trancate">
              Adminstarator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
