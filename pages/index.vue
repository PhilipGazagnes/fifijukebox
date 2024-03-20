<script lang="ts" setup>
import indexJson from '../data/indexByArtist.json'

type Song = any

const songs: Song[] = indexJson
</script>

<template>
  <div class="text-center py-10 bg-orange-100 mb-5">
    <h1 class="mb-2 font-bold text-xl text-orange-800">Fifi Juke Box</h1>
    <div class="text-[2.5em] mb-3">🎸🎤</div>
    <div class="text-sm text-slate-600 mb-1">News / vidéos :</div>
    <nuxt-link to="https://www.facebook.com/fifimusicnews" target="_blank" class="text-[#0866ff] inline-flex justify-start items-center font-bold mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="fill-[#0866ff] w-6 h-6 inline-block mr-1">
        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
      </svg>
      Fifi
    </nuxt-link>
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
      Contact: Fifi - 06.73.51.74.46
    </div>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>