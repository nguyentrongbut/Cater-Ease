import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function getAnonymousUserIdServer(): Promise<string> {
    const cookieStore = await cookies();
    return cookieStore.get('anonymousUserId')?.value || '';
}

export async function createAnonymousUserIdServer(): Promise<string> {
    const cookieStore = await cookies();
    const userId = uuidv4();

    cookieStore.set('anonymousUserId', userId, {
        httpOnly: false,
        path: '/'
    });

    return userId;
}

export async function hasAnonymousUserIdServer(): Promise<boolean> {
    const cookieStore = await cookies();
    return !!cookieStore.get('anonymousUserId')?.value;
}

export async function clearAnonymousUserIdServer(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('anonymousUserId');
}