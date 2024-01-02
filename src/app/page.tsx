// import Image from 'next/image'
import Headerbar from "@/lib/components/Headerbar";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-3 bg-neutral">
      <Headerbar />
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mt-3 text-6xl font-bold">Welcome to my Portfolio</h1>
        <p className="mt-3 text-2xl">scroll through this page</p>
      </div>
    </main>
  );
}
