<script lang="ts" setup>
import indexJson from '../data/index.json'

type Song = any

const songs: Song[] = indexJson.sort(compare)

function regularFirstLetter(str: string) {
  let txt = str;
  if (txt.startsWith('ç') || txt.startsWith('Ç')) {
    txt = `C${txt.substring(1)}`;
  }
  return txt;
}

function compare(a: Song, b: Song) {
  // Use toUpperCase() to ignore character casing
  const songA = regularFirstLetter(a.name.toUpperCase());
  const songB = regularFirstLetter(b.name.toUpperCase());

  let comparison = 0;
  if (songA > songB) {
    comparison = 1;
  } else if (songA < songB) {
    comparison = -1;
  }
  return comparison;
}
</script>

<template>
  <div class="py-10 px-5">
    <h1 class="mb-2 font-bold text-xl"><span class="text-3xl font-extrabold block">Peaz</span> <span class="text-md font-thin">MUSIC</span></h1>
    <div class="text-[2.5em] mb-3">🎸🎤</div>
    <div class="text-sm pt-3">Répertoire (clic pour paroles) :</div>
  </div>

  <div class="p-5">
    <ul>
      <!-- <li v-for="(section, index) in songs" :key="index" class="mb-4">
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
      </li> -->
      <li v-for="(song, index) in songs" :key="index" class="mb-4">
        <nuxt-link :href="`/songs/${song.id}?name=${song.name.replaceAll(' ', '_')}`" class="flex justify-between items-center block border border-gray-400 py-3 pl-4 pr-2 rounded-md mb-2">
          <div>
            <span class="block font-semibold">{{ song.name }}</span>
            <span>{{ song.artist }}</span>
          </div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
            <path d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z" />
          </svg>
        </nuxt-link>
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