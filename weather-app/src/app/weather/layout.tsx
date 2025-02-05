import { Footer } from "../Components/Footer";
import { Headers } from "../Components/Headers";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex  flex-col min-h-screen">
        <Headers />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
