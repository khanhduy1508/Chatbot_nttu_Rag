import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <NavBar />
      <main className="w-full mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
