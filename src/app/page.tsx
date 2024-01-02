// import Image from 'next/image'
import Headerbar from "@/lib/components/Headerbar";

export default function Home() {
  return (
    <main className="bg-base flex w-full flex-col items-center justify-center gap-3">
      <Headerbar />
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mt-3 text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.js
          </code>
        </p>
      </div>
    </main>
  );
}
