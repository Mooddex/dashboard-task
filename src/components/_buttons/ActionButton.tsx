import {  LucideIcon } from "lucide-react";
import Link from "next/link";
 interface ActionButtonProps{
  actionName:string,
  description?:string,
  link?:string,
  icon:LucideIcon,
  style:string,
 };

export default function ActionButton({
  actionName, 
  description,
  link="#", 
  icon:Icon, 
  style
}
  :ActionButtonProps) {
  return (
    <Link href={link}>
      <button className={style}>
        <Icon />
       <div className="flex flex-col items-start ml-2">
  <span className="font-bold text-lg leading-tight">{actionName}</span>
  {description && (
    <span className="text-xs text-gray-400 mt-1">{description}</span>
  )}
</div>
      </button>
    </Link>    
  );
}
