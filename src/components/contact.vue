<template>
    <section class="contact-page">
        <div class="title text-center">
            <h2 class="h1">Contact</h2>
            <router-link to="/">Home - </router-link>
            <span >Contact</span>
        </div>

        <!-- Section One In COntact Page -->
        <section class="conatct-us ">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Full Name</label>
                                <input type="text">
                            </div>
                            <div class="col-md-6">
                                <label for="">Email</label>
                                <input type="email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Phone Number</label>
                                <input type="tel">
                            </div>
                            <div class="col-md-6">
                                <label for="">Company Name</label>
                                <input type="text">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <label for="">Write Message</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button class="get">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>Drope Us a Line</h3>
                        <p class="kind">For any kind of query, contact us with the details below.</p>
                        <div class="contact-info mt-2">
                            <p><i class="fas fa-phone-volume mr-2"></i> +122 (569) 254 78</p>
                            <p><i class="fas fa-envelope-open mr-2"></i> info-desk@zxp.com</p>
                            <p><i class="fas fa-home mr-2"></i> #59, East Madison Ave, Melbourne, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
