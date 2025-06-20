'use client';

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    // clear search input
    const clearSearch = () => {
        setSearchQuery("");
    };

    // handle search
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            router.push(`/event-dishes?keyword=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto relative"
        >
            <div className="flex-1 flex items-center relative">
                <Input
                    placeholder="Search dishes ..."
                    className="border-0 focus-visible:ring-0 text-gray-900 dark:bg-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <span className="mr-1 p-2 cursor-pointer" onClick={clearSearch}>
                        <X className="h-4 w-4 text-gray-400" />
                    </span>
                )}
            </div>
            <Button size="lg" type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search Dishes
            </Button>
        </form>
    );
};

export default SearchBar;
