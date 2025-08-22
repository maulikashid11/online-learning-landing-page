import Navbar from "@/components/Navbar";
import "./globals.css";
// import Footer from "@/components/Footer";

export const metadata = {
  title: "SkillWise ",
  description: "Learn Skills That Matter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=""
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
