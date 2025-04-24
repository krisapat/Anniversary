"use client";

import { useEffect, useState } from "react";
import { quicksand } from "@/utils/fonts";

const CountdownTimer = () => {
    const getTargetDate = () => {
        const now = new Date();
        const targetDate = new Date(now.getFullYear(), now.getMonth(), 24); // ตั้งวันที่ 24 ของเดือนนี้

        // ถ้าผ่านวันที่ 24 ของเดือนแล้ว ให้เปลี่ยนไปที่ 24 ของเดือนถัดไป
        if (now.getDate() > 24) {
            targetDate.setMonth(now.getMonth() + 1);
        }

        return targetDate.getTime();
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date().getTime();
        const distance = getTargetDate() - now;

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((distance / (1000 * 60)) % 60),
            seconds: Math.floor((distance / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-center text-2xl">
            <div className="flex flex-col justify-center text-xl space-y-4">
                <h1 className={`${quicksand.className}`}>Next 24th</h1>
                <div className="flex gap-1">
                    <div><span className={`${quicksand.className} p-2 bg-white/40 dark:bg-black/40 rounded-lg`}>{timeLeft.days}</span>D</div>
                    <div><span className={`${quicksand.className} p-2 bg-white/40 dark:bg-black/40 rounded-lg`}>{timeLeft.hours}</span>H</div>
                    <div><span className={`${quicksand.className} p-2 bg-white/40 dark:bg-black/40 rounded-lg`}>{timeLeft.minutes}</span>M</div>
                    <div><span className={`${quicksand.className} p-2 bg-white/40 dark:bg-black/40 rounded-lg`}>{timeLeft.seconds}</span>S</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
