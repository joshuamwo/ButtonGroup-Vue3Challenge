<script setup>
import TButton from './components/TButton.vue';
import GroupTemplate from './components/GroupTemplate.vue';
import GroupRender from './components/GroupRender.js';

function say(msg) {
  alert(msg);
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen space-y-8">
    <div>
      <TButton label="One" @click="say('One')" />
    </div>
    <!-- <div>
      <GroupTemplate>
        <TButton label="Two" @click="say('Two')" />
        <TButton label="Three" @click="say('Three')" />
      </GroupTemplate>
    </div> -->
    <div>
    <GroupRender>
      <p>
        p
      </p>
    </GroupRender>
      <!-- <GroupRender>
        <TButton label="Two" @click="say('Two')" />
        <TButton label="Three" @click="say('Three')" />
      </GroupRender> -->
    </div>
  </div>
</template>
