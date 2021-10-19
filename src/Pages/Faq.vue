<template>
  <Breadcrumbs main="" title="FAQ" />
  <!-- Container-fluid starts-->
  <div class="container-fluid">
    <div class="faq-wrap">
      <div class="row">
        <div class="col-xl-4 xl-100 box-col-12">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Articles</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <vue-feather type="file-text"></vue-feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 col-md-6 box-col-6">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Knowledgebase</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <vue-feather type="book-open"></vue-feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 col-md-6 box-col-6">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Support</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <vue-feather type="aperture"></vue-feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="header-faq">
            <h5 class="mb-0">Quick Questions are answered</h5>
          </div>
          <div
            class="row default-according style-1 faq-accordion"
            id="accordionoc"
          >
            <div class="col-xl-8 xl-60 col-lg-6 col-md-7 box-col-8">
              <!-- <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon"
                      aria-expanded="false"
                      aria-controls="collapseicon"
                    >
                      <vue-feather type="help-circle"></vue-feather> Integrating
                      WordPress with Your Website?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon"
                  aria-labelledby="collapseicon"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div> -->
              <b-card >
                <b-card-header header-tag="header" role="tab">
                  <h5 class="mb-0">
                    <b-button
                      v-b-toggle.collapseicon
                      class="btn btn-link collapsed"
                    >
                      <vuefeather type="help-circle"></vuefeather> Integrating
                      WordPress with Your Website?
                    </b-button>
                  </h5>
                </b-card-header>
                <b-collapse
                  id="collapseicon"
                  accordion="accordion-1"
                  role="tabpanel"
                >
                  <b-card-body
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.</b-card-body
                  >
                </b-collapse>
              </b-card>

              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon2"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather> WordPress
                      Site Maintenance ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon2"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon3"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Meta Tags in
                      WordPress ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon3"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon4"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>WordPress in
                      Your Language ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon4"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="faq-title">
                <h6>Intellectual Property</h6>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon5"
                      aria-expanded="false"
                    >
                      <vue-feather type="help-circle"></vue-feather> WordPress
                      Site Maintenance ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon5"
                  aria-labelledby="collapseicon5"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon7"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather> WordPress
                      in Your Language ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon7"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon8"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Integrating
                      WordPress with Your Website ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon8"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="faq-title">
                <h6>Selling And Buying</h6>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon9"
                      aria-expanded="false"
                    >
                      <vue-feather type="help-circle"></vue-feather> WordPress
                      Site Maintenance ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon9"
                  aria-labelledby="collapseicon9"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon10"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Meta Tags in
                      WordPress ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon10"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon11"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Validating a
                      Website ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon11"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon12"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Know Your
                      Sources ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon12"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="faq-title">
                <h6>User Accounts</h6>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon13"
                      aria-expanded="false"
                    >
                      <vue-feather type="help-circle"></vue-feather>Integrating
                      WordPress with Your Website ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon13"
                  aria-labelledby="collapseicon13"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon14"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>WordPress
                      Site Maintenance ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon14"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon16"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather> WordPress
                      in Your Language ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon16"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon17"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather> Validating
                      a Website ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon17"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseicon18"
                      aria-expanded="false"
                      aria-controls="collapseicon2"
                    >
                      <vue-feather type="help-circle"></vue-feather>Meta Tags in
                      WordPress ?
                    </button>
                  </h5>
                </div>
                <div
                  class="collapse"
                  id="collapseicon18"
                  data-parent="#accordionoc"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 xl-40 col-lg-6 col-md-5 box-col-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card card-mb-faq xs-mt-search">
                    <div class="card-header faq-header">
                      <h5 class="ps-0">Search articles</h5>
                      <vue-feather type="help-circle"></vue-feather>
                    </div>
                    <div class="card-body faq-body">
                      <div class="faq-form">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Search.."
                        /><vue-feather
                          type="search"
                          class="search-icon"
                        ></vue-feather>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card card-mb-faq">
                    <div class="card-header faq-header">
                      <h5 class="ps-0">Navigation</h5>
                      <vue-feather type="settings"></vue-feather>
                    </div>
                    <div class="card-body faq-body">
                      <div class="navigation-btn">
                        <a class="btn btn-primary" href="javascript:void(0)"
                          ><vue-feather
                            class="m-r-10"
                            type="message-square"
                          ></vue-feather
                          >Ask Question</a
                        >
                      </div>
                      <div class="navigation-option">
                        <ul>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="edit"></vue-feather
                              >Tutorials</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="globe"></vue-feather>Help
                              center</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="book-open"></vue-feather
                              >Knowledgebase</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="file-text"></vue-feather
                              >Articles</a
                            ><span
                              class="badge badge-primary badge-pill pull-right"
                              >42</span
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="youtube"></vue-feather>Video
                              Tutorials</a
                            ><span
                              class="badge badge-primary badge-pill pull-right"
                              >648</span
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="message-circle"></vue-feather
                              >Ask our community</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="mail"></vue-feather>Contact us
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="message-circle"></vue-feather
                              >Ask our community</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0)"
                              ><vue-feather type="mail"></vue-feather>Contact
                              us</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header faq-header">
                      <h5 class="d-inline-block ps-0">Latest Updates</h5>
                      <span class="pull-right d-inline-block">See All</span>
                    </div>
                    <div class="card-body faq-body">
                      <div class="media updates-faq-main">
                        <div class="updates-faq">
                          <vue-feather
                            class="font-primary"
                            type="rotate-cw"
                          ></vue-feather>
                        </div>
                        <div class="media-body updates-bottom-time">
                          <p>
                            <a href="javascript:void(0)">David Linner </a
                            >requested money back for a double debit card charge
                          </p>
                          <p>10 minutes ago</p>
                        </div>
                      </div>
                      <div class="media updates-faq-main">
                        <div class="updates-faq">
                          <vue-feather
                            class="font-primary"
                            type="dollar-sign"
                          ></vue-feather>
                        </div>
                        <div class="media-body updates-bottom-time">
                          <p>All sellers have received monthly payouts</p>
                          <p>2 hours ago</p>
                        </div>
                      </div>
                      <div class="media updates-faq-main">
                        <div class="updates-faq">
                          <vue-feather
                            class="font-primary"
                            type="link"
                          ></vue-feather>
                        </div>
                        <div class="media-body updates-bottom-time">
                          <p>
                            User Christopher
                            <a href="javascript:void(0)">Wallace</a> is on hold
                            and awaiting for staff reply
                          </p>
                          <p>45 minutes ago</p>
                        </div>
                      </div>
                      <div class="media updates-faq-main">
                        <div class="updates-faq">
                          <vue-feather
                            class="font-primary"
                            type="check"
                          ></vue-feather>
                        </div>
                        <div class="media-body updates-bottom-time">
                          <p>
                            Ticket #43683 has been closed by
                            <a href="javascript:void(0)">Victoria Wilson</a>
                          </p>
                          <p>Dec 7, 11:48</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 featured-tutorial">
          <div class="header-faq">
            <h5 class="mb-0">Featured Tutorials</h5>
          </div>
          <div class="row">
            <div class="col-xl-3 xl-50 col-sm-6 box-col-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img
                    class="img-fluid"
                    src="../assets/images/faq/1.jpg"
                    alt=""
                  />
                  <div class="product-hover">
                    <ul>
                      <li><vue-feather type="link"></vue-feather></li>
                      <li><vue-feather type="download"></vue-feather></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="learning-detailed.html"> <h6>Web Design</h6></a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <ul class="rating pull-right">
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-sm-6 box-col-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img
                    class="img-fluid"
                    src="../assets/images/faq/2.jpg"
                    alt=""
                  />
                  <div class="product-hover">
                    <ul>
                      <li><vue-feather type="link"></vue-feather></li>
                      <li><vue-feather type="download"></vue-feather></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="learning-detailed.html"> <h6>Web Development</h6></a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <ul class="rating pull-right">
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-sm-6 box-col-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img
                    class="img-fluid"
                    src="../assets/images/faq/3.jpg"
                    alt=""
                  />
                  <div class="product-hover">
                    <ul>
                      <li><vue-feather type="link"></vue-feather></li>
                      <li><vue-feather type="download"></vue-feather></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="learning-detailed.html"> <h6>UI Design</h6></a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <ul class="rating pull-right">
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-sm-6 box-col-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img
                    class="img-fluid"
                    src="../assets/images/faq/4.jpg"
                    alt=""
                  />
                  <div class="product-hover">
                    <ul>
                      <li><vue-feather type="link"></vue-feather></li>
                      <li><vue-feather type="download"></vue-feather></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="learning-detailed.html"> <h6>UX Design</h6></a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <ul class="rating pull-right">
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                    <li><i class="fa fa-star font-primary"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 faq-articles">
          <div class="header-faq">
            <h5 class="mb-0">Latest articles and videos</h5>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="codepen"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Using Video</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="codepen"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Vel illum qu</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="codepen"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Cum sociis natoqu</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="file-text"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Donec pede justo</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="file-text"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Nam quam nunc</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="file-text"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Using Video</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="row">
                <div class="col-xl-12 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="youtube"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Vel illum qu</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="youtube"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Cum sociis natoqu</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <vue-feather
                          class="m-r-30"
                          type="youtube"
                        ></vue-feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Donec pede justo</h6>
                          <p>
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script>
import Breadcrumb from "./Bonus_UI/Breadcrumb.vue";
export default {
  components: { Breadcrumb },
};
</script>

<style>
</style>
