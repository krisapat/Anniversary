"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // นำเข้า Button จาก ShadCN UI

const holes = 6;
const GAME_TIME = 10000; // เวลาเกมทั้งหมด 10 วินาที

export default function WhackACat() {
    const [active, setActive] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(GAME_TIME / 1000); // เวลาเริ่มต้นคือ GAME_TIME

    // โหลดคะแนนสูงสุดจาก localStorage
    useEffect(() => {
        if (!isPlaying && score > maxScore) {
          setMaxScore(score);
          localStorage.setItem("whackMaxScore", score.toString());
        }
      }, [isPlaying, score, maxScore]);
    useEffect(() => {
        let timer: NodeJS.Timeout;
        let gameEnd: NodeJS.Timeout;
        let countdown: NodeJS.Timeout;

        if (isPlaying) {
            // ทำให้แมวโผล่ขึ้นมาเป็นระยะ
            timer = setInterval(() => {
                setActive(Math.floor(Math.random() * holes));
            }, 800);

            // เริ่ม countdown เวลาถอยหลัง
            countdown = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(countdown); // หยุดการนับเวลาเมื่อเวลาหมด
                        setIsPlaying(false); // จบเกม
                        setActive(null); // ปิดแมว
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            // ตั้งเวลาจบเกม
            gameEnd = setTimeout(() => {
                if (score > maxScore) {
                    setMaxScore(score);
                    localStorage.setItem("whackMaxScore", score.toString());
                }
            }, GAME_TIME); // กำหนดเวลาให้จบหลังจากครบ GAME_TIME

        }

        return () => {
            clearInterval(timer);
            clearTimeout(gameEnd);
            clearInterval(countdown); // หยุดการนับเวลาหลังจากเกมจบ
        };
    }, [isPlaying, score, maxScore]);

    const hit = (index: number) => {
        if (index === active) {
            setScore((prev) => prev + 1);
            setActive(null);
        }
    };

    return (
        <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">🐱 Whack-a-Cat!</h1>
            <p className="text-lg">Score: {score}</p>
            <p className="text-md">🏆 Max score: {maxScore}</p>

            {/* แสดงเวลาถอยหลัง */}
            <p className="text-xl">{`เวลาที่เหลือ: ${timeLeft} วินาที`}</p>

            {!isPlaying ? (
                <div className="flex flex-col items-center gap-2">
                    <Button
                        onClick={() => {
                            setScore(0);
                            setTimeLeft(GAME_TIME / 1000); // รีเซ็ตเวลา
                            setIsPlaying(true);
                        }}
                    >
                        Start Game
                    </Button>

                    {/* ปุ่มรีเซ็ตคะแนนสูงสุด */}
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                            localStorage.removeItem("whackMaxScore");
                            setMaxScore(0);
                        }}
                    >
                        Reset max score
                    </Button>
                </div>
            ) : (
                <p className="text-sm text-gray-500">Hurry up! Tap the cat quickly!</p>
            )}

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-6">
                {[...Array(holes)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-28 bg-black/40 dark:bg-white/40 rounded-xl relative cursor-pointer"
                        onClick={() => hit(i)}
                    >
                        {active === i && (
                            <Image
                                src="/img/cat.png"
                                alt="cat"
                                width={80}
                                height={80}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
