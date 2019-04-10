<template>
    <section class="slider">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="images/slider-image/slide-image1.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h2 class="wow fadeInUp" >Your Dream</h2>
                    <h2 class="h1 wow fadeInUp" data-wow-delay=".5s" >Our Responsibility</h2>
                    <div class="wow fadeInDown" data-wow-delay="1s" >
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <a href="#!" class="get">Get Started</a>
                    </div> 
                </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="images/slider-image/slide-image2.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
                    <h2 class="wow fadeInUp" >Your Dream</h2>
                    <h2 class="h1 wow fadeInUp" data-wow-delay=".5s" >Our Inspirations</h2>
                    <div class="wow fadeInDown" data-wow-delay="1s" >
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <a href="#!" class="get">Get Started</a>
                    </div> 
                </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="images/slider-image/slide-image3.jpg" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
                    <h2 class="wow fadeInUp" >Your Dream</h2>
                    <h2 class="h1 wow fadeInUp" data-wow-delay=".5s" >Our Strength</h2>
                    <div class="wow fadeInDown" data-wow-delay="1s" >
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <a href="#!" class="get">Get Started</a>
                    </div> 
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </section>
</template>



<script>



export default {
    components: {
                
    }
}
</script>

