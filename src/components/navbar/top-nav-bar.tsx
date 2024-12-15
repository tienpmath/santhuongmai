"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClientLink from "@/components/ui/client-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CircleUser, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
export default function TopNavBar() {
  return (
    <header className="z-50 sticky inset-x-0 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />

          <span className="sr-only">Rao vặt Lâm Đồng</span>
        </Link>

        <Link
          href="/about"
          className="w-24 text-foreground transition-colors hover:text-foreground"
        >
          Giới thiệu
        </Link>
        <Link
          href="/contact"
          className="w-24 text-foreground transition-colors hover:text-foreground"
        >
          Liên hệ
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              target="_blank"
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Mua Bán Rao Vặt Đà Lạt - Lâm Đồng</span>
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-foreground"
            >
              Giới thiệu
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-foreground"
            >
              Liên hệ
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Logo />
        <form className="ml-auto flex-1 sm:flex-initial"></form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href="/admin" className="cursor-pointer">
              <DropdownMenuItem>Admin</DropdownMenuItem>
            </Link>
            <Link href="/admin/profile" className="cursor-pointer">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href="/admin/settings" className="cursor-pointer">
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <ClientLink
              href="/auth/logout"
              variant={"link"}
              size={"sm"}
              className="cursor-pointer"
            >
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </ClientLink>
          </DropdownMenuContent>
        </DropdownMenu>
        <ClientLink href="/auth/login">Đăng nhập</ClientLink>
      </div>
    </header>
  );
}
