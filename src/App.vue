<template>
  <div id="app">
    <topBar></topBar>
    <navbar></navbar>
    <search-over></search-over>
    <top-button></top-button>
    <router-view></router-view>
    <footer-section></footer-section>
    <copy-section></copy-section>
  </div>
</template>

<script>

import navbar from './components/top-component/navbar'
import topBar from './components/top-component/topBar'
import searchOver from './components/top-component/searchOver'
import topButton from './components/topButton'
import footerSection from './components/sections/footerSection'
import copySection from './components/sections/copySection'

export default {
 components: {
   navbar,
   topBar,
   'search-over': searchOver,
   'top-button': topButton,
   'footer-section': footerSection,
   'copy-section': copySection
 }
}
</script>


