'use client'
import { NavbarProvider } from "@/context/NavbarContext";
import { Nabvar } from "./Nabvar";

export function Header() {
    return (
        <header className="sticky top-0">
            <NavbarProvider>
                <Nabvar />
                <div className="min-h-screen w-full fixed inset-0 opacity-70"></div>
            </NavbarProvider>
        </header>
    )
}
