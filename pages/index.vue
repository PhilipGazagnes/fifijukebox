<script lang="ts" setup>
import indexJson from '../data/index.json'

type Song = any

const songs: Song[] = indexJson
</script>

<template>
  <div>
    <h1>Fifi Juke Box</h1>
    <ul>
      <li v-for="(song, index) in songs" :key="index">
        <a :href="`/songs/${song.id}`">{{ song.name }} ({{ song.artist }})</a>
      </li>
    </ul>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>