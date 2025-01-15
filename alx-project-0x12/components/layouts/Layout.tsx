import { ReactComponentProps } from "@/interfaces";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<ReactComponentProps> = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;
