import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";

const states = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "$8,546",
    change: "+8.5%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indego-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "$2,845",
    change: "+17.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "$45,781",
    change: "-4.3%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];
const StatusGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {states.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {stat.value}
              </p>
              <div className="flex items-center space-x-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs Last month
                </span>
              </div>
            </div>
            <div
              className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-200`}
            >
              {<stat.icon className={`w-6 h-6 ${stat.textColor}`} />}
            </div>
          </div>
          {/* progress bar */}
          <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-100`}
              style={{ width: stat.trend === "up" ? "75%" : "45%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusGrid;
