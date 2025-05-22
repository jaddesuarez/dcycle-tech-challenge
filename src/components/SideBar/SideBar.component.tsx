import dcycleLogo from "@/assets/images/Dcycle_logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { URLS, USER } from "@/consts";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import covidIcon from "@/assets/svg/covid-icon.svg";
import nameIcon from "@/assets/svg/name-icon.svg";

const NAVIGATION_LINKS = [
  {
    label: "Name Stats",
    href: URLS.NAME_INFO,
    icon: nameIcon,
  },
  {
    label: "Covid Stats",
    href: URLS.COVID_INFO,
    icon: covidIcon,
  },
];

export const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen">
      <nav className="fixed left-0 flex h-full flex-col items-center gap-14 border-r rounded-r-2xl border-gunmetalGrey/40 px-5 py-10 w-30 md:w-65">
        <Link to={URLS.NAME_INFO}>
          <img src={dcycleLogo} alt="dcycle logo" className="w-20 md:w-20" />
        </Link>

        <div className="flex flex-col items-center gap-5">
          {NAVIGATION_LINKS.map(({ label, href, icon }, idx) => {
            const isActive = pathname === href;
            return (
              <Link
                key={idx}
                to={href}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={icon}
                  alt={label}
                  className={cn(
                    "rounded-xl w-20 h-20 px-5 py-1 text-richBlack transition-all duration-300 hover:bg-midnightBlue/10",
                    isActive && "bg-midnightBlue/10"
                  )}
                />
                <span className="hidden md:block">{label}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto w-full">
          <div className="flex items-center justify-center gap-3 p-3 md:rounded-xl md:bg-midnightBlue/5">
            <Avatar className="size-10 md:size-8">
              <AvatarImage src={USER.avatar} alt={USER.email} />
              <AvatarFallback>{USER.email.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col">
              <p className="text-xs font-bold text-gunmetalGrey">
                {USER.email}
              </p>
              <p className="text-xs text-gunmetalGrey/80">{USER.description}</p>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
