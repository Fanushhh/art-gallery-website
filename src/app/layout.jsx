
import "./globals.css";



export const metadata = {
  title: "Art gallery website",
  description: "Online gallery for art lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
