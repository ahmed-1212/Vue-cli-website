<template>
    <section class="header">
        <slid></slid>
        <section-one></section-one>
        <section-two></section-two>
        <section-three></section-three>
        <section-three-half></section-three-half>
        <section-four></section-four>
        <section-five></section-five>
        <section-six></section-six>
        <section-seven></section-seven>
        <section-eight></section-eight>
    </section>
</template>


<script>

import slid from './top-component/slid'
import sectionOne from './sections/sectionOne'
import sectionTwo from './sections/sectionTwo'
import sectionThree from './sections/sectionThree'
import sectionThreeHalf from './sections/sectionThreeHalf'
import sectionFour from './sections/sectionFour'
import sectionFive from './sections/sectionFive'
import sectionSix from './sections/sectionSix'
import sectionSeven from './sections/sectionSeven'
import sectionEight from './sections/sectionEight'

export default {
    components: {
        slid,
        'section-one': sectionOne,
        'section-two': sectionTwo,
        'section-three': sectionThree,
        'section-three-half': sectionThreeHalf,
        'section-four': sectionFour,
        'section-five': sectionFive,
        'section-six': sectionSix,
        'section-seven': sectionSeven,
        'section-eight': sectionEight,
        
        
        }
}
</script>

