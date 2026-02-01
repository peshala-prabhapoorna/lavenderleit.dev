<script lang="ts">
    import heroImage from '$lib/assets/tux-fedora.webp';

    import SocialMedia from '$lib/components/actions/SocialMedia.svelte';
</script>

<svelte:head>
    <title>LavenderLeit</title>
</svelte:head>

<div class="flex flex-1 flex-col justify-center">
    <div class="flex flex-initial gap-12 px-20">
        <img
            src={heroImage}
            alt="Tux the penguin wearing a blue fedora"
            class="h-auto w-64"
        />

        <div class="flex flex-col">
            <h1 class="text-3xl font-bold">LavenderLeit</h1>
            <p class="text-lg">
                Software Engineer, Software Developer, FOSS Enthusiast
            </p>
            <SocialMedia />
            <p>
                I love computers and the internet. I also read a bit of fiction
                and philosophy. Here, I will write about things that interest
                me, share projects I’ve worked on, and document problems I’ve
                solved.
            </p>
            <p class="my-2">
                <a class="link link-primary link-hover" href="/about"
                    >Learn more</a
                >
                , or send me an
                <a
                    class="link link-primary link-hover"
                    href="mailto:lavenderleit+contact@gmail.com">email</a
                >
                to get in touch.
            </p>
        </div>
    </div>
</div>
