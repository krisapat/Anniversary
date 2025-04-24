
import FadeUpWhenVisible from "@/components/firework/FadeUpWhenVisible";
import Silder from "@/components/ui/Slider";
import "../public/style/style.css"
import TypingHeader from "@/components/้home/TypingHeader";
import { quicksand } from "@/utils/fonts";
import SliderRight from "@/components/ui/SliderRight";
import FireworkButton from "@/components/FireworkButton";
import CountdownTimer from "@/components/firework/CountdownTimer";
import Image from "next/image";
import WhackACat from "@/components/minigame/WhackACat";

export default function Home() {
  return (
    <main className={`${quicksand.className} bg-blue-200 dark:bg-blue-950`}>
      <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute w-[90%] h-[90%] bg-cover bg-center brightness-50 rounded-2xl"
          style={{
            backgroundImage: "url('/img/home.png')",
            padding: "20px",
            boxSizing: "border-box",
          }}
        />
        {/* Overlay */}
        <div className="absolute w-[90%] h-[90%] bg-black/40 z-10 rounded-2xl" />
        {/* Content Centered */}
        <div className="relative z-10 flex items-center justify-center h-[90%] w-[90%] rounded-2xl shadow-xl overflow-hidden">
          <div className="text-center px-4 space-y-5">
            <FadeUpWhenVisible>
              <TypingHeader
                className="text-4xl font-bold md:text-6xl mb-4 text-white"
                words={['Happy Anniversary', 'Together is my favorite place to be', 'Grateful for every moment with you']}
              />
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <p className="text-xl md:text-2xl text-white">
                Happy 18th month anniversary
                <br />Love you my love
              </p>
            </FadeUpWhenVisible>
          </div>
        </div>
      </div>

      {/* page2 */}
      <div className="p-8 space-y-4">
        <FadeUpWhenVisible>
          <Silder />
        </FadeUpWhenVisible>
        <FadeUpWhenVisible>
          <SliderRight />
        </FadeUpWhenVisible>
      </div>
      {/* page3 */}
      <FadeUpWhenVisible>
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-xl md:text-2xl text-center mb-4">We have been together for 18 months now</h1>
          <div className="mb-4">
            <CountdownTimer />
          </div>
          <FireworkButton />
        </div>
      </FadeUpWhenVisible>
      {/* page4 */}
      <div className="w-full max-w-3xl p-8 space-y-5 m-auto text-white">
        <div className="w-full grid grid-cols-8 gap-5 ">
          <div className="col-span-5 aspect-[4/3] rounded-lg relative overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/img/grid1.png"
              alt="My image"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 rounded-lg p-5 text-md sm:text-2xl md:text-4xl font-bold  bg-gradient-to-r from-[#7367F0] to-[#43CBFF] hover:scale-105 transition-transform duration-300">
            Love my girlfriend
          </div>
        </div>
        <div className=" aspect-[4/3] w-full rounded-lg relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/img/grid2.png"
            alt="My image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full grid grid-cols-8 gap-5">
          <div className="col-span-3 rounded-lg p-5 text-md sm:text-2xl md:text-4xl font-bold  bg-gradient-to-r from-[#43CBFF] to-[#7367F0] hover:scale-105 transition-transform duration-300">
            The most
          </div>
          <div className="col-span-5 aspect-[4/3] rounded-lg relative overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/img/grid3.png"
              alt="My image"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
      {/* page4 */}
      <div className="p-10">
        <WhackACat />
      </div>
    </main>
  );
}
