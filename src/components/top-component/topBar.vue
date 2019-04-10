<template>
    <section class="topbar">
        <div class="container">
            <div class="info">
                <div class="call">
                    <a href="#!"><i class="fas fa-envelope-open"></i> info@hotmil.com</a>
                    <a href="#!"><i class="fas fa-phone-volume"></i> +012 (3546) 547</a>
                </div>
                <div class="date">
                    <a href="#!"><i class="fas fa-clock"></i>Mon - Fri : 8:00 AM to 7:00 PM</a>
                    <a href="#!" class="langu mr-0" @click.prevent="show = !show"><i class="fas fa-globe"></i>EN</a>
                    <ul class="list-unstyled" v-show="show">
                        <li><a href="#!">EN</a></li>
                        <li><a href="#!">MN</a></li>
                        <li><a href="#!">AR</a></li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>
        
    </section>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    }
}
</script>




