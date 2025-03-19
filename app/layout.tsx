import './globals.css';
import { Inter } from 'next/font/google';
import { BookOpen, GraduationCap, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Skill Tests', href: '/skill-test', icon: BookOpen },
  { name: 'Internships', href: '/internships', icon: GraduationCap },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-card border-r">
            <div className="h-16 flex items-center px-6 border-b">
              <h1 className="text-xl font-bold">Learning Portal</h1>
            </div>
            <nav className="p-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}