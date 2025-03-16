<template>
    <a :href="installLink" class="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">Get Started</a>
  </template>
  
  <script setup lang="ts">
  const { chromeUrl, edgeUrl, firefoxUrl } = useBrowserExtensions()
  
  const installLink = computed(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (userAgent.includes('edg')) {
      return edgeUrl
    }
    
    if (userAgent.includes('firefox')) {
      return firefoxUrl
    }
    
    return chromeUrl
  })
  </script>