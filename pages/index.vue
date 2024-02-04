<script lang="ts" setup>
import indexJson from '../data/indexByArtist.json'

type Song = any

const songs: Song[] = indexJson
</script>

<template>
  <div>
    <h1>Fifi Juke Box</h1>
    <ul>
      <li v-for="(section, index) in songs" :key="index">
        {{ section.artist }}
        <ul>
          <li v-for="(song, index2) in section.items" :key="index2">
            <nuxt-link :href="`/songs/${song.id}?name=${song.name.replaceAll(' ', '_')}`">{{ song.name }}</nuxt-link>
          </li>
        </ul>
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