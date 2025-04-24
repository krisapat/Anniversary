"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react" // เพิ่ม Monitor ไอคอน
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Darkmode() {
    const { setTheme, resolvedTheme, theme } = useTheme()
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    const toggleTheme = () => {
        const nextTheme =
            theme === "light" ? "dark" :
                theme === "dark" ? "system" :
                    "light"
        setTheme(nextTheme)
    }

    if (!isMounted) return null

    const renderIcon = () => {
        if (theme === "system") {
            return <Monitor className="h-6 w-6 text-gray-500 transition-all" />
        }

        return resolvedTheme === "dark" ? (
            <Moon className="h-6 w-6 text-blue-400 transition-all" />
        ) : (
            <Sun className="h-6 w-6 text-yellow-500 transition-all" />
        )
    }

    return (
        <div className="overflow-hideden fixed bottom-4 right-4 z-50">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className={cn(
                    "rounded-full shadow-md w-12 h-12 flex items-center justify-center",
                    "bg-[#fff6f6] hover:bg-[#ffecec]",
                    "dark:bg-[#131212] dark:hover:bg-[#1e1e1e]"
                )}
            >
                {renderIcon()}
                <span className="sr-only">Toggle theme</span>
            </Button>

        </div>
    )
}
