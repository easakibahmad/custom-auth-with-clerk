import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="flex justify-between items-center">
            <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
              Custom Auth
            </h4>
            <SignedOut>
              <div className="px-4 py-2 border border-purple-400 rounded-md pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <div className="px-4 py-2 border border-purple-400 rounded-md pointer">
                <UserButton />
              </div>
            </SignedIn>
          </div>
          <div>{children}</div>
          <footer className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
            developed by: sakib ahmad
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
