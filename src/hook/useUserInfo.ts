// hook/useUserInfo.ts
'use client';

import { useEffect, useState } from 'react';

export default function useUserInfo() {
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        const loadUserInfo = () => {
            const stored = localStorage.getItem('userInfo');
            setUserInfo(stored ? JSON.parse(stored) : null);
        };

        // Call when component mount
        loadUserInfo();

        // Listen event userInfoChanged (trigger when login/logout)
        window.addEventListener('userInfoChanged', loadUserInfo);

        return () => {
            window.removeEventListener('userInfoChanged', loadUserInfo);
        };
    }, []);

    return userInfo;
}