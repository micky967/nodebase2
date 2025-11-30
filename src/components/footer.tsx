import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full mt-26 sm:mt-26 mb-4 sm:mb-4">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-1 md:px-2 lg:px-4">
        {/* Top horizontal line */}
        <div className="pb-4 mb-4 border-t border-gray-300 w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-1rem)]"></div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-start sm:items-start justify-center w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-1rem)]">
          {/* Brand */}
          <div className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] max-w-[260px] flex flex-col">
            <div className="flex items-center gap-2 mb-6 h-[28px]">
              <div className="p-2">
                <Image src="/logos/logo.svg" alt="Nodebase" width={30} height={30} />
              </div>
              <span className="font-bold text-lg text-black leading-none">
                Nodebase
              </span>
            </div>
            <p className="text-black text-sm leading-relaxed">
              AI-powered podcast processing that transforms your content into
              engagement gold.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] max-w-[260px] flex flex-col">
            <h3 className="font-bold mb-6 text-black h-[28px] flex items-center">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="h-[20px] flex items-center">
                <a
                  href="/"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Home
                </a>
              </li>
              <li className="h-[20px] flex items-center">
                <a
                  href="/dashboard/projects"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Projects
                </a>
              </li>
              <li className="h-[20px] flex items-center">
                <a
                  href="/dashboard/upload"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Upload
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] max-w-[260px] flex flex-col">
            <h3 className="font-bold mb-6 text-black h-[28px] flex items-center">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="h-[20px] flex items-center">
                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Documentation
                </a>
              </li>
              <li className="h-[20px] flex items-center">
                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Contact Us
                </a>
              </li>
              <li className="h-[20px] flex items-center">
                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition-colors text-medium"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-6 border-t border-gray-300 w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-1rem)]">
          <p className="text-center text-medium text-black mt-8">
            © {new Date().getFullYear()} Nodebase. This is a full project by
            Manjit.
          </p>
        </div>
      </div>
    </footer>
  );
}
