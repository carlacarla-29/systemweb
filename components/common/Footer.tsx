import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-4 mt-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} My Company. All rights reserved.
                </p>
                <div className="mt-2">
                    <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        Privacy Policy
                    </Link>
                    <span className="mx-2">|</span>
                    <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        Terms of Service 
                    </Link>
                </div>
            </div>
        </footer>
    );
}