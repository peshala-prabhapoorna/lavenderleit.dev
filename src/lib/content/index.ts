export interface Post {
    metadata: {
        title: string;
        excerpt: string;
        date: string;
        tags: string[];
        badges: string[];
        imgSrc: string;
        imgAlt: string;
    };
    slug: string;
    component: any;
}

const rawContent = import.meta.glob(['./**/*.svx'], { eager: true });

export const content: Post[] = Object.entries(rawContent).map(([path, post]: [string, any]) => {
    return {
        metadata: post.metadata,
        slug: path.split('/').pop()?.replace(/\.(svx)$/, '').toLowerCase() || '',
        component: post.default
    };
});
