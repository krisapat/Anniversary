// components/FireworkButton.tsx
"use client";

import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

const FireworkButton = () => {
    const launchFireworks = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    return (
        <Button
            onClick={launchFireworks}
            className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition-transform duration-300"
        >
            🎉
        </Button>
    );
};

export default FireworkButton;
