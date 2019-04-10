<template>
    <section class="search">
        <div class="container">
            <form> 
            <a class="close" ><i class="fas fa-times"></i></a>
            <div class="form-groupe">
                <input type="text" class="form-control" placeholder="Serch For...">
                <button class="search-btn"><i class="fas fa-search"></i></button>
            </div>
        </form>
        </div>
    </section>
</template>


<script>
export default {
    computed: {
        showHide() {
            return this.$store.state.showHide
        }
    },
    //methods: {
        //change: function () {
            //this.$store.commit('change')
//}
   // }
    
}
</script>

