'use server';

import axios from "axios";
import {unstable_cache} from "next/cache";


const cachedAxiosGet = (url: string, tags: string[], revalidate?: number)=> {
    const cachedFn = unstable_cache(
        async () => {
            const response = await axios.get(url);
            return response.data;
        },
        [url],
        { tags, revalidate }
    );

    return cachedFn();
}

export default cachedAxiosGet