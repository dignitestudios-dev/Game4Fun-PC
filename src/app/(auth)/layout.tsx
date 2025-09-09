import Footer from "@/components/ui/footer";
import AuthNavbar from "./_components/auth-navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative" >

<AuthNavbar/>
  {children}
  <Footer/>
  </div>;
}
