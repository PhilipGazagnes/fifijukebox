<script type="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['youtubekey']);
</script>

<template>
  <div class="youtube">
    <iframe
      class="youtubeIframe"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${youtubekey}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />
    </div>
</template>

<style>
.youtube {
  position: relative;
  padding: 0 0 56.25% 0;
}
.youtubeIframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>