<script lang="ts">
    import EmailIcon from '$lib/components/icons/EmailIcon.svelte';
    import DiscordIcon from '$lib/components/icons/DiscordIcon.svelte';
    import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
    import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';

    const socials = [
        { icon: EmailIcon, href: 'mailto:lavenderleit+contact@gmail.com' },
        {
            icon: DiscordIcon,
            href: 'https://discord.com/channels/1429826901353955483/1429826902608187567'
        },
        { icon: GitHubIcon, href: 'https://github.com/peshala-prabhapoorna' },
        {
            icon: LinkedInIcon,
            href: 'https://www.linkedin.com/in/peshala-prabhapoorna/'
        }
    ];
</script>

<div class="my-2 grid grid-flow-col justify-start gap-4">
    {#each socials as { icon, href }}
        <a {href} target="_blank" rel="noreferrer">
            <svelte:component this={icon} />
        </a>
    {/each}
</div>
