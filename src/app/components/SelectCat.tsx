"use client";
import { useState } from "react";
import RecentProjects from "./RecentProject";
import Port from "./Port";

export default function SelectCat() {
    const [category, setCategory] = useState<"all" | "landing" | "webapp">("all");

    return (
        <div className="text-center my-10">
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
                {[
                    { label: "All", value: "all" },
                    { label: "Landing Page", value: "landing" },
                    { label: "Web-App", value: "webapp" },
                ].map(({ label, value }) => (
                    <button
                        key={value}
                        className={`px-4 py-2 rounded-full transition-colors duration-200 ${category === value
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setCategory(value as "all" | "landing" | "webapp")}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Display Section */}
            <div className="max-w-6xl mx-auto px-4">
                {category === "all" && (
                    <>
                        <RecentProjects />
                        <Port />
                    </>
                )}
                {category === "landing" && <RecentProjects />}
                {category === "webapp" && <Port />}
            </div>
        </div>
    );
}
