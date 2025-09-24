
import ChatWidget from "@/components/chat-widget";
import ScrollToTopButton from "@/components/scroll-to-top-btn";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <ChatWidget />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
}
