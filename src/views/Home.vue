<template>
  <div class="home">
    <div>
      <section id="about" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>About</h2>
                        <hr class="primary">
                        <p>
                          {{ info }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section id="pricing" class="pricing-1">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Products</h2>
                        <hr class="primary">
                        <p>Three licensing options are availalbe for the Spectrum Template. A single application license, a multiple application license, and an extended license are the three options availalbe.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 pricing-col" data-scrollreveal="enter left over 1.5s">
                        <div class="pricing-table">
                            <div class="pricing-heading" style="background-image: url('assets/img/IMG_3354.JPG')">
                                <h2>Vitalize and Shine Hair Serum</h2>
                            </div>
                            <div class="content">
                                <div class="price">
                                    <span class="amount">$20</span>
                                    <span class="period">one time</span>
                                </div>
                                <ul class="pricing-items list-unstyled text-center">
                                    <li class="item">
                                        <span class="text-primary">Ingredients {{ hsingredients }}</span> 
                                    <li class="pricing-button">
                                        <a href="#" class="btn btn-primary btn-square btn-raised">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 pricing-col" data-scrollreveal="enter bottom over 1.5s">
                        <div class="pricing-table featured">
                            <div class="pricing-heading" style="background-image: url('assets/img/IMG_3353.JPG')">
                                <h2>Bundle Deal!</h2>
                            </div>
                            <div class="content">
                                <div class="price">
                                    <span class="amount">$40</span>
                                    <span class="period">Save $8!</span>
                                </div>
                                <ul class="pricing-items list-unstyled text-center">
                                    <li class="item">Limited Time offer!</li>
                                    <li class="pricing-button">
                                        <a href="#" class="btn btn-primary btn-square btn-raised">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 pricing-col" data-scrollreveal="enter right over 1.5s">
                        <div class="pricing-table">
                            <div class="pricing-heading" style="background-image: url('assets/img/IMG_3355.JPG')">
                                <h2>Hydrate and Replenish Facial Serum</h2>
                            </div>
                            <div class="content">
                                <div class="price">
                                    <span class="amount">$28</span>
                                    <span class="period">one time</span>
                                </div>
                                <ul class="pricing-items list-unstyled text-center">
                                    <li class="item">
                                        <span class="text-primary">Ingredients: {{ fsingredients }}</span>
                                    <li class="pricing-button">
                                        <a href="#" class="btn btn-primary btn-square btn-raised">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="bg-primary">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-8 col-lg-offset-2">
                        <h2 class="allcaps">Your New Website is Waiting!</h2>
                        <br>
                        <a href="#" class="btn btn-default btn-lg btn-square btn-raised">Buy Spectrum!</a>
                    </div>
                </div>
            </div>
        </section>


        <section id="work" class="portfolio-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>Testimonials</h2>
                        <hr class="primary">
                        <ul class="list-inline hidden-xs" id="filters">
                            <li>
                                <button data-filter="*" type="button" class="btn btn-primary btn-square btn-raised">All</button>
                            </li>
                            <li>
                                <button data-filter=".web" type="button" class="btn btn-primary btn-square btn-raised">Website</button>
                            </li>
                            <li>
                                <button data-filter=".graphic" type="button" class="btn btn-primary btn-square btn-raised">Graphic</button>
                            </li>
                            <li>
                                <button data-filter=".print" type="button" class="btn btn-primary btn-square btn-raised">Print</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row" data-scrollreveal="enter bottom over 1.5s">
                    <div class="isotope">
                        <div class="col-sm-4 portfolio-item web">
                            <a href="#portfolio-modal-1" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/1.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item graphic">
                            <a href="#portfolio-modal-2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/2.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item print">
                            <a href="#portfolio-modal-1" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/3.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item web">
                            <a href="#portfolio-modal-2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/4.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item graphic">
                            <a href="#portfolio-modal-1" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/5.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item print">
                            <a href="#portfolio-modal-2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/6.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item web">
                            <a href="#portfolio-modal-2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/7.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item graphic">
                            <a href="#portfolio-modal-1" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/8.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item print">
                            <a href="#portfolio-modal-2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3><i class="fa fa-search fa-2x"></i>
                                        </h3>
                                    </div>
                                </div>
                                <img src="assets/img/demo-portfolio/9.jpg" class="img-centered" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     
  </div>
</template>

<style>




</style>

<script>
export default {
  data: function() {
    return {
      info: "At Glowing Garden, our primary focus is making sure our products consists of healthy and all-natural ingrediants. Our serums are made up of Plant-based formulated products that contain vitamins, minerals, and antioxidents which will help repair and and replenish your skin and hair, leading to much more hydrated and nourished results.",
      
      importance: "It's critical that you pay attnetion to the products you're using, especially when it comes to your skin. On average, your skin will absorb around 64% of the products we apply to it. So if those products you're currently using contain harsh chemicals and toxins, are synthetically processed and filled with preservatives, it will lead to unhealthy  and damaged to the skin.",
      
      breakdown: "The same logic applies to your diet, if you don't drink water, or don't eat enough food that contains the vitamins and nutrients that your body needs, you will eventually be unhealthy. An important thing to remember is that nutritional status plays an essential role in the continuance of healthy, glowing skin.",
      
      sellpoint: "You will feel and will be much healthier if you stick to eating nutritious food. So if you chang up your diet for important health reasons, why won't you switch to clean beauty products for similar reasons?",

      faceserum: "Our Facial Serum is an anti-aging and anti-acne face treatment designed to hydrate and replenish the skin. Tired of red scars? The essential nutrients in this serum support cell regeneration and prevent cell damage! It is rich in antioxidants and anti-inflammatory properties that help deeply moisturize, help clear acne scars, fine lines and wrinkles, leaving you with beautiful healthy looking skin.",

      fsingredients: "Organic Roseship Seed Oil, Organin Hemp Seed Oil, Organic Pomengranate Seed Oil, Organic Grape Seed Oil, Organic Moroccan Argan Oil",

      hairserum: "Our Organic Hair Serum is a daily hair treatment designed to vitalize and add lots of shine to your hair, leaving it looking beautifully conditioned regularly! Packed with  hydrating ingredients, this product is destined to produce healthy hair while controling frizziness, leaving you with a beautiful and non-greasy look! Essential oils blended in the serum are also known to refresh, energize, and uplift your mood!",

      hsingredients: "Organin Jojoba Oil, Organic Grape Seed Oil, Organic Moroccan Argan Oil, Bergamot, Grapefruit, Orange, Lime, and Lemon Organin essential Oils."
      
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>

