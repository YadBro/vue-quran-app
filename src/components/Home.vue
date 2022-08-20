<script setup>
import API from '../config/api';
import {onMounted, reactive} from 'vue';

  const data = reactive({
    chapters: [],
  });

  onMounted(async () => {
    const response = await API.get('/surah');
    data.chapters = response.data.data;
  });
</script>

<template>
  <div style="max-width: 800px;" class="mx-auto my-5">
    <b-list-group class="text-center">
        <b-list-group-item v-for="surah in data.chapters" :key="surah.number" :to="`/surah/${surah.number}`">
          <div class="d-flex flex-column">
            <h2>
              {{surah.name.short}}
            </h2>
            <h6>
              ({{surah.name.transliteration.id}})
            </h6>
          </div>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>