"use client";
import { HeaderMenuConfigType } from "@/types/entities";
import { MenuChildren } from "../../../../molecules";
import { HeaderNavLink } from "../atoms";
import MapMenu from "./MapMenu";
import ServicesMenu from "./ServicesMenu";

const DesktopMenu = ({ nav }: { nav: HeaderMenuConfigType[] }) => {
  return (
    <ul className="menu menu-horizontal p-0">
      {nav?.map((item: HeaderMenuConfigType) => {
        return (
          <li
            key={`desktop_menu_item_${item.id}`}
            className="mx-1 group static xl:px-1 py-2"
          >
            <HeaderNavLink name={item.name} href={item.link} />
            {item.children && (
              <MenuChildren type="desktop">{item.children}</MenuChildren>
            )}
          </li>
        );
      })}

      <ServicesMenu />

      <MapMenu />
    </ul>
  );
};

export default DesktopMenu;
