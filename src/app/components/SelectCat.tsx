// components/SelectCat.tsx
"use client";
import { useState } from "react";
import RecentProjects from "./RecentProject";
import Port from "./Port";

export default function SelectCat() {
    const [category, setCategory] = useState<"recent" | "port">("recent");

    return (
        <div className="text-center my-10">
            <div className="flex justify-center gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-full ${category === "recent" ? "bg-blue-800 text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setCategory("recent")}
                >
                    Recent Projects
                </button>
                <button
                    className={`px-4 py-2 rounded-full ${category === "port" ? "bg-blue-800 text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setCategory("port")}
                >
                    Portfolio
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {category === "recent" ? <RecentProjects /> : <Port />}
            </div>
        </div>
    );
}
