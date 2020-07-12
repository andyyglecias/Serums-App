<template>
  <div id="app">
    
    <nav class="navbar navbar-dark navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="#page-top">
                        <h4>Glowing Garden</h4>
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li class="page-scroll">
                            <a href="#about">About</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#features">Hair</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#work">Skin</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#blog">Bio</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
    </nav>


        
<router-view/>

  <footer class="footer-1">
            <div class="upper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h2 class="script">Glowing Garden</h2>
                            <address>
                                <strong>Twitter, Inc.</strong>
                                <br>795 Folsom Ave, Suite 600
                                <br>San Francisco, CA 94107
                                <br>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                        </div>
                        <div class="col-md-3">
                            <h4>Features</h4>
                            <ul class="list-unstyled footer-links">
                                <li>
                                    <a href="#">Responsive</a>
                                </li>
                                <li>
                                    <a href="#">Easy to Use</a>
                                </li>
                                <li>
                                    <a href="#">Well Documented</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4>Documentation</h4>
                            <ul class="list-unstyled footer-links">
                                <li>
                                    <a href="#">Bootstrap Components</a>
                                </li>
                                <li>
                                    <a href="#">Usage Information</a>
                                </li>
                                <li>
                                    <a href="#">Full Documentation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4>Social</h4>
                            <ul class="list-inline">
                                <li>
                                    <a href="#" class="btn btn-social-light btn-facebook"><i class="fa fa-fw fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social-light btn-twitter"><i class="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social-light btn-dribbble"><i class="fa fa-fw fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social-light btn-google-plus"><i class="fa fa-fw fa-google-plus"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lower">
                <div class="container">
                    <div class="row">

                    </div>
                </div>
            </div>
        </footer>




  </div>
</template>

<style>
</style>
