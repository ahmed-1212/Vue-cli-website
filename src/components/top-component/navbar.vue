<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
        <a class="navbar-brand" href="#"><img src="images/logo/logo.jpg" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span class="seconde"></span>
            <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link class="nav-link " to="/" active-class="active" exact href="#">Home </router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/services" active-class="active" exact>Services</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/contact" active-class="active" exact>Contact</router-link>
            </li>
            </ul>
        </div>
        <ul class="navbar-nav another-nav">
                <li class="nav-item mt-2" >
                    <a href="#!" class="search-ic" ><i class="fas fa-search"></i></a>
                </li>
                <li class="nav-item pr-0">
                    <a href="#!" class="get">Request Quote</a>
                </li>
            </ul>
        </div>
        </nav>
</template>


<script>
export default {
    computed: {
        
    },
    //methods: {
      // change: function () {
           // this.$store.commit('change')
       // }
  // }
}
</script>