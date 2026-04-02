import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          <Link href="/">My Company</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
