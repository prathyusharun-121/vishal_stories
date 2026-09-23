import './globals.css';

export const metadata = {
  title: "Vishal's Stories",
  description: "A home for Vishal's stories."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
