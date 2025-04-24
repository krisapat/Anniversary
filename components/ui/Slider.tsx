"use client";

import Image from "next/image";

const Silder = () => {
  const imageCount = 6;
  const width = 200;
  const height = 200;

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[90vw] max-w-[1000px] flex justify-center items-center">
          <div
            className="slider h-[200px] mx-auto overflow-hidden rounded-2xl"
            style={{
              "--width": `${width}px`,
              "--height": `${height}px`,
              "--quantity": imageCount,
            } as React.CSSProperties}
          >
            <div
              className="list flex relative gap-4"
              style={{
                minWidth: `calc(${width}px * ${imageCount})`,
              }}
            >
              {Array.from({ length: imageCount }, (_, i) => (
                <div
                  key={i}
                  className="item w-[var(--width)] h-[var(--height)]"
                  style={{ "--position": i + 1 } as React.CSSProperties}
                >
                  <Image
                    src={`/img/slider/${i + 1}.png`}
                    alt={`Image ${i + 1}`}
                    width={width}
                    height={height}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Silder;
