<script lang="ts" setup>
import indexJson from '../data/indexByArtist.json'

type Song = any

const artists: Song[] = indexJson
</script>

<template>
  <ul>
    <li v-for="(artist, index) in artists" :key="index">
      <h4 class="font-bold">{{ artist.artist }}</h4>
      <ul>
        <li v-for="(song, index2) in artist.items" :key="index2">
          {{ song.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>