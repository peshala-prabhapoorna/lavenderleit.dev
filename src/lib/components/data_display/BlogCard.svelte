<script lang="ts">
    let { imgSrc, imgAlt, title, badges, excerpt, tags } = $props();
</script>

<div class="card bg-base-200 w-96 shadow-sm">
  <figure>
    <img src={imgSrc} alt={imgAlt} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      {#each badges as badge}
          <div class="badge badge-secondary">{badge}</div>
      {/each}
    </h2>
    <p>{excerpt}</p>
    <div class="card-actions justify-end">
      {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>
  </div>
</div>
