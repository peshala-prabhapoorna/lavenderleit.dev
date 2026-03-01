<script lang="ts">
    import { content } from '$lib/content';

    let { data } = $props();

    const post = content.find(p => p.slug === data.post.slug);
    const Content = post?.component;
</script>

<article class="prose prose-slate lg:prose-xl mx-auto p-8">
    {#if Content}
        <Content />
    {:else}
        <p>Post content not found.</p>
    {/if}
</article>
