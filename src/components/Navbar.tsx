"use client";
import { ArrowLeftIcon, CommandIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavContent from "./NavContent";

export default function Navbar() {
  return (
    <div className=" scroll-area relative flex flex-col w-full">
      <header className="sticky-0 inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b  bg-white text-sm lg:hidden">
        <div className="flex size-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center gap-1">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" title="Toggle drawer">
                    <CommandIcon size={16} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-4/5">
                  <div className="overflow-y-auto p-4">
                    <NavContent />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
