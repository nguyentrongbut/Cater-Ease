'use client'

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React, { useEffect, useState } from "react";

const SearchEventDishes = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const keyword = searchParams.get('keyword') || '';
        setSearchTerm(keyword);
    }, [searchParams]);

    // Debounced search handler
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('keyword', term);
        } else {
            params.delete('keyword');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    // Clear input
    const handleClearSearch = () => {
        setSearchTerm('');
        const params = new URLSearchParams(searchParams);
        params.delete('keyword');
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />

            {searchTerm && (
                <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    <X className="h-4 w-4" />
                </button>
            )}

            <Input
                placeholder="Search event menu..."
                className="pl-10 pr-10"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch(e.target.value);
                }}
            />
        </div>
    );
};

export default SearchEventDishes;
