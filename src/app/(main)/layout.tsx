import ChatWidget from "@/components/chat-widget";
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
      <Footer />
    </div>
  );
}
