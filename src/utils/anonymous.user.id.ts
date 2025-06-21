'use client'

import {v4 as uuidv4} from 'uuid';
import Cookies from 'js-cookie';

export function getAnonymousUserId(): string {
    if (typeof window === 'undefined') return '';
    return Cookies.get('anonymousUserId') || '';
}

export function createAnonymousUserId(): string {
    if (typeof window === 'undefined') return '';

    const userId = uuidv4();
    Cookies.set('anonymousUserId', userId, {
        path: '/'
    });

    return userId;
}

export function hasAnonymousUserId(): boolean {
    if (typeof window === 'undefined') return false;
    return !!Cookies.get('anonymousUserId');
}

export function clearAnonymousUserId(): void {
    if (typeof window === 'undefined') return;
    Cookies.remove('anonymousUserId');
}