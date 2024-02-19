
import "./globals.css";



export const metadata = {
  title: "Art gallery website",
  description: "Online gallery for art lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body>{children}</body>
    </html>
  );
}
