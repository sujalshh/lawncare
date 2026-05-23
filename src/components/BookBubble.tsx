"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BookBubble() {
  const pathname = usePathname();
  if (pathname === "/book") return null;

  return (
    <Link
      href="/book"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-700"
      aria-label="Request a visit"
    >
      <Calendar className="h-4 w-4" />
      Request a visit
    </Link>
  );
}
