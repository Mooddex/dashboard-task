import {  LucideIcon } from "lucide-react";
import Link from "next/link";
 interface ActionButtonProps{
  actionName:string,
  link?:string,
  icon:LucideIcon,
  style:string,
 };

export default function ActionButton({
  actionName, 
  link="#", 
  icon:Icon, 
  style
}
  :ActionButtonProps) {
  return (
    <Link href={link}>
      <button className={style}>
        <Icon />
        {actionName}
      </button>
    </Link>    
  );
}
