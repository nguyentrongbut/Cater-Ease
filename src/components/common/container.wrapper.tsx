import React from "react";
import {cn} from "@/lib/utils";

const ContainerWrapper = ({ children, className }: { children: React.ReactNode, className?:string }) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-0", className)}>
      {children}
    </div>
  );
}

export default ContainerWrapper;