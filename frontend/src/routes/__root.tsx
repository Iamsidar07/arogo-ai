import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-lg text-gray-800 hover:text-gray-600 transition-colors font-bold flex items-center gap-2"
          >
            <img src="/icon.png" alt="logo" className="w-8 h-8" />
            Arogo AI
          </Link>
          <Link
            to="/posts/create"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg
              hover:bg-blue-700 transition-colors shadow-sm
              active:transform active:scale-95"
          >
            Add new post
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  ),
});

export default Route;
