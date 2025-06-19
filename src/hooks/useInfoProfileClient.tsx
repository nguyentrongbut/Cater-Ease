'use client'

import {useCallback, useEffect, useState} from "react";
import {getProfile} from "@/lib/actions/account";

const useInfoProfileClient = () => {
    const [infoProfile, setInfoProfile] = useState<TUserInfo | null>(null);

    const fetchProfile = useCallback(async () => {
        try {
            const profile = await getProfile();
            setInfoProfile(profile);
        } catch (err) {
            console.error("Failed to fetch profile:", err);
        }
    }, []);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return { infoProfile };
}

export default useInfoProfileClient;