"use client";
import { HeaderModeType } from "@/types/entities";
import classNames from "classnames";
import { useState } from "react";
import { MenuChildren } from "../../../../molecules";
import { HeaderNavLink } from "../atoms";

type MenuItemType = {
  name: string;
  href: string;
};

interface Props {
  type: HeaderModeType;
  id: number;
  menuName: string;
  menuHref: string;
  childrenItems?: MenuItemType[];
  loading?: boolean;
}

const DropdownMenu = ({
  type = "desktop",
  id,
  childrenItems,
  menuName,
  menuHref,
  loading = false,
}: Props) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <li
      key={`${type}_menu_item_${menuName.toLowerCase().replace(" ", "_")}`}
      onClick={() => childrenItems && toggleItem(id)}
      className={classNames({
        "mx-1 group static xl:px-1 py-2": type === "desktop",
        "mx-1 w-3/4": type === "mobile",
      })}
    >
      <HeaderNavLink name={menuName} href={menuHref} type={type} />
      {type === "desktop" ? (
        <MenuChildren loading={loading} type="desktop">
          {childrenItems}
        </MenuChildren>
      ) : (
        <MenuChildren loading={loading} type="mobile" id={id} active={activeId}>
          {childrenItems}
        </MenuChildren>
      )}
    </li>
  );
};

export default DropdownMenu;
