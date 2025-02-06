import { Footer } from "../Components/Footer";
import { Headers } from "../Components/Headers";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#FF5E71] from-20% ">
        <Headers />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
