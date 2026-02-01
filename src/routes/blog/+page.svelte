<script lang="ts">
    import BlogCard from '$lib/components/data_display/BlogCard.svelte';
</script>

<div class="grid grid-cols-2 gap-12">
    <BlogCard
        imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        imgAlt="shoe"
        title="Card Title"
        badges={["NEW"]}
        excerpt="A card component has a figure, a body part, and inside body there are title and actions parts"
        tags={["Fashion", "Products"]}
    />
</div>
