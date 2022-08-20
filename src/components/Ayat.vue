<script setup>
import { onMounted, reactive, watchEffect, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import API from '../config/api';

const data = reactive({
  surah: {
    name: '',
    literationName: '',
    number: '',
    ayat: [],
  },
  show: true
});

const route = useRoute();

onBeforeMount(async () => {
  const response = await API.get('/surah/' + route.params.id);
  const dataResponse = response.data.data;
  data.surah = {
    name : dataResponse.name,
    number : dataResponse.number,
    literationName : dataResponse.name.transliteration.id,
    ayat : dataResponse.verses,
  }
  if (response.status === 200) data.show = false;
});
</script>

<template>
<!-- <pre>{{data.surah}}</pre> -->
  <div style="max-width: 800px;" class="mx-auto my-5">
    <b-list-group class="text-center">
      <!-- <pre>{{data.surah}}</pre> -->
      <div v-if="data.surah.name">
        <h1>{{data.surah.name.short}}</h1>
        <h4>{{data.surah.name.transliteration.id}}</h4>
      </div>
        <div class="mt-5" v-if="data.show"><b-spinner /></div>
      <keep-alive>
        <b-list-group-item v-for="ayat in data.surah.ayat" :key="data.surah.number">
          <div class="d-flex flex-column my-4">
            <div>
              <p>{{ayat.number.inSurah}}</p>
            </div>
            <div>
              <p class="fs-2">{{ayat.text.arab}}</p>
            </div>
            <div>
              <p class="fs-5">{{ayat.text.transliteration.en}}</p>
            </div>
            <br />
            <div>
            <audio controls style="transform: scale(.9);">
              <source :src="ayat.audio.primary" type="audio/mp3"/>
            </audio>
            </div>
          </div>
        </b-list-group-item>
      </keep-alive>
    </b-list-group>
  </div>
</template>