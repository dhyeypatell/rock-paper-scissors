import "../styles/globals.scss";
import "../styles/reset.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <title>Rock, Paper, Scissors</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
