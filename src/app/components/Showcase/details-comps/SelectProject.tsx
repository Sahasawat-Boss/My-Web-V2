"use client";

import { useState } from "react";
import RecentProjects from "./RecentProject";
import LandingPage from "./LandingPage";
import WebAppProjects from "./WebAppProjects";

export default function SelectProject() {
    const [category, setCategory] = useState<"all" | "landing" | "web-app">("all");

    return (
        <div className="text-center">
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
                {[
                    { label: "All", value: "all" },
                    { label: "Landing Page", value: "landing" },
                    { label: "Web-App", value: "web-app" },
                ].map(({ label, value }) => (
                    <button
                        key={value}
                        className={`px-4.5 py-1.5 rounded-full duration-200  lg:text-lg hover border border-gray-500 shadow-md hover:shadow-purple-400  bg-gradient-to-r from-purple-500  to-indigo-500 transition-all  ${category === value
                            ? " text-white"
                            : "bg-none text-white/50"
                            }`}
                        onClick={() => setCategory(value as "all" | "landing" | "web-app")}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Display Section */}
            <div className="max-w-6xl mx-auto px-4">
                {category === "all" && <RecentProjects />}
                {category === "landing" && <LandingPage />}
                {category === "web-app" && <WebAppProjects />}
            </div>
        </div>
    );
}
