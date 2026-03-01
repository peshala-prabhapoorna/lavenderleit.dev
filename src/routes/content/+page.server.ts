import { content } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        posts: content.map(post => ({
            metadata: post.metadata,
            slug: post.slug
        }))
    };
};
