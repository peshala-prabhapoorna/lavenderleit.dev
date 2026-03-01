<script lang="ts">
    import BlogCard from '$lib/components/data_display/BlogCard.svelte';

    let { data } = $props();
</script>

<div class="grid grid-cols-2 gap-12 p-8">
    {#each data.posts as post}
        <a href="/blog/{post.slug}">
            <BlogCard
                imgSrc={post.metadata.imgSrc}
                imgAlt={post.metadata.imgAlt}
                title={post.metadata.title}
                badges={post.metadata.badges}
                excerpt={post.metadata.excerpt}
                tags={post.metadata.tags}
            />
        </a>
    {/each}
</div>
