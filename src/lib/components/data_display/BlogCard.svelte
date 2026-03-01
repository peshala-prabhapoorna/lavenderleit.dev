<script lang="ts">
    let { imgSrc, imgAlt, title, badges, excerpt, tags } = $props();
</script>

<div class="card bg-base-200 w-full shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group overflow-hidden">
  <figure class="aspect-video overflow-hidden bg-base-300">
    <img 
        src={imgSrc} 
        alt={imgAlt} 
        class="w-full h-full object-cover transition-transform duration-500 ease-out scale-105 group-hover:scale-100 transform-gpu" 
    />
        <!-- class="w-full h-full object-cover transition-transform duration-150 scale-105 group-hover:scale-100"  -->
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      {#each badges as badge}
          <div class="badge badge-secondary">{badge}</div>
      {/each}
    </h2>
    <p class="line-clamp-2 text-base-content/70">{excerpt}</p>
    <div class="card-actions justify-end mt-4">
      {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>
  </div>
</div>
