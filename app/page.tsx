import Hero from "@/components/main/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full" >
      <div className="flex flex-col h-[850px]gap-20">
        <Hero />
        {/* <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm"/> 
        </video> */}
      </div>
      
    </main>
  );
}
