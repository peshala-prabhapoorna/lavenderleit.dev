import { content } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const post = content.find(p => p.slug === params.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }

    return {
        post: {
            metadata: post.metadata,
            slug: post.slug
        }
    };
};
