<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Youtube from '../components/Youtube.vue'

const route = useRoute()

const songName = ref('')

const importData = () => {
  const jsonData = ref(null);

  onMounted(async () => {
    songName.value = route.query.name.replaceAll('_', ' ');
    
    try {
      const response = await import(`../../data/songs/${route.params.id}.json`);
      jsonData.value = response.default;
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  });

  return { jsonData };
};

const handleLyrics = (lyric) => {
  if (lyric.indexOf('***') >= 0) {
    return lyric.replaceAll('***', '🎸')
  } else if (lyric.indexOf('+++') >= 0) {
    return lyric.replaceAll('+++', '')
  }
  return lyric
}

const { jsonData } = importData();

const baseFontSize = ref(16)

const handleSize = (param) => {
  if (param === 'more') {
    baseFontSize.value += 2
  } else {
    baseFontSize.value -= 2
  }
}
</script>

<template>
  <div v-if="jsonData" class="p-2" :style="{ fontSize: `${baseFontSize}px`, lineHeight: `${baseFontSize + 14}px` }">
    <nuxt-link to="/" class="text-blue-500 underline mb-8 inline-block text-sm">Retour liste</nuxt-link>
    <h1 class="mb-8 font-bold text-xl">{{ songName }}</h1>
    <div v-for="(section, index) in jsonData.sections" class="mb-4">
      <div v-for="(lyrics, index) in section.lyrics">
         {{ handleLyrics(lyrics) }}
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
  <button class="fixed bottom-14 right-2 w-10 h-10 bg-green-300 font-black flex justify-center items-center rounded-xl shadow-lg" @click="handleSize('less')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.00098 256.00098" class="w-1/2 h-1/2">
      <path d="M156,116a8.00008,8.00008,0,0,1-8,8H84a8,8,0,0,1,0-16h64A8.00008,8.00008,0,0,1,156,116Zm73.65137,113.65479a8.00063,8.00063,0,0,1-11.31446,0L175.114,186.43188a92.11375,92.11375,0,1,1,11.31452-11.31341l43.22284,43.22284A8,8,0,0,1,229.65137,229.65479ZM116,191.99707a76,76,0,1,0-76-76A76.08614,76.08614,0,0,0,116,191.99707Z"/>
    </svg>
  </button>
  <button class="fixed bottom-2 right-2 w-10 h-10 bg-green-300 font-black flex justify-center items-center rounded-xl shadow-lg" @click="handleSize('more')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.00098 256.00098" class="w-3/4 h-3/4">
      <path d="M156,116a8.00008,8.00008,0,0,1-8,8H124v24a8,8,0,0,1-16,0V124H84a8,8,0,0,1,0-16h24V84a8,8,0,0,1,16,0v24h24A8.00008,8.00008,0,0,1,156,116Zm73.65137,113.65381a8.00063,8.00063,0,0,1-11.31446,0l-43.2229-43.2229a92.11385,92.11385,0,1,1,11.31452-11.31342l43.22284,43.22284A8,8,0,0,1,229.65137,229.65381ZM116,191.99609a76,76,0,1,0-76-76A76.08614,76.08614,0,0,0,116,191.99609Z"/>
    </svg>
  </button>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 55px 15px 95px;
}
.metaBar {
  background: white;
  box-shadow: 0 0 10px #eee;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 40px;
}
.navBar {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 80px;
  background: white;
  border-top: 1px solid #ddd;
  box-shadow: 0 0 10px #eee;
  display: flex;
}
.navBarItem {
  width: 25%;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  background: white;
  &[data-active='true'] {
    background: #eee;
    font-weight: bold;
  }
}
</style>