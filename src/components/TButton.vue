<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <button class="border px-4 py-2 rounded-lg hover:bg-gray-100">
    {{ label }}
  </button>
</template>
