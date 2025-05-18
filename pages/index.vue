<script lang="ts" setup>
import indexJson from '../data/indexByArtist.json'

type Song = any

const songs: Song[] = indexJson
</script>

<template>
  <div class="text-center py-10 bg-orange-100 mb-5">
    <h1 class="mb-2 font-bold text-xl text-orange-800">Peaz music</h1>
    <div class="text-[2.5em] mb-3">🎸🎤</div>
  </div>

  <div class="text-center text-sm text-slate-600 pt-3 mb-5">Répertoire (click pour paroles) :</div>

  <div class="p-2">
    <ul>
      <li v-for="(section, index) in songs" :key="index" class="mb-4">
        <span class="font-bold mb-2 block">{{ section.artist }}</span>
        <ul>
          <li v-for="(song, index2) in section.items" :key="index2">
            <nuxt-link :href="`/songs/${song.id}?name=${song.name.replaceAll(' ', '_')}`" class="flex justify-between items-center text-blue-600 font-bold block bg-blue-50 border border-blue-100 py-3 pl-4 pr-2 rounded-md mb-2">
              <span>{{ song.name }}</span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-blue-500 w-8 h-8">
                <path d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z" />
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="py-8 italic">
      Contact: Philip - 06.73.51.74.46
    </div>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>