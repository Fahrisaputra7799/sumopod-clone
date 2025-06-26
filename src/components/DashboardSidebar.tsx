import { Link } from "react-router-dom";

export function DashboardSidebar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex-1  bg-white text-black border-r shadow-sm">
        <div className="p-4 pb-2 ">
          <h1 className="text-2xl font-bold">Sumopod</h1>
        </div>
        <ul className="flex flex-col py-10 gap-5 px-3">
          <li className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-blue-50 text-blue-700 font-medium">
            <Link to={"/service"}>
                Service
            </Link>
          </li>
          <li className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-gray-100">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span>Templates</span>
          </li>
          <li className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-gray-100">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span>Deployments</span>
          </li>
          <li className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-gray-100">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span>Billing</span>
          </li>
        </ul>
        <div className="p-3">
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
            Upgrade to Pro
          </button>
        </div>
      </nav>
    </aside>
  );
}
