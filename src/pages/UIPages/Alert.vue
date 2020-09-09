<template>
          <div class="lime-container">
            <div class="lime-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-title">
                                <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb breadcrumb-separator-1">
                                    <li class="breadcrumb-item"><a href="#">Components</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Alerts</li>
                                  </ol>
                                </nav>
                                <h3>Alerts</h3>
                                <p class="page-desc">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Default</h5>
                                    <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes. </p>
                                    <div class="alert alert-primary" role="alert">
                                        A simple primary alert—check it out!
                                    </div>
                                    <div class="alert alert-secondary" role="alert">
                                        A simple secondary alert—check it out!
                                    </div>
                                    <div class="alert alert-success" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                    <div class="alert alert-danger" role="alert">
                                        A simple danger alert—check it out!
                                    </div>
                                    <div class="alert alert-warning" role="alert">
                                        A simple warning alert—check it out!
                                    </div>
                                    <div class="alert alert-info" role="alert">
                                        A simple info alert—check it out!
                                    </div>
                                    <div class="alert alert-light" role="alert">
                                        A simple light alert—check it out!
                                    </div>
                                    <div class="alert alert-dark" role="alert">
                                        A simple dark alert—check it out!
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Additional content</h5>
                                    <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
                                    <div class="alert alert-success" role="alert">
                                        <h6 class="alert-heading">Well done!</h6>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                        <hr>
                                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Outline</h5>
                                    <p>Outline style of alerts is a variant of alerts without background and thick border with the color of selected alert type.</p>
                                    <div class="alert alert-primary outline-alert" role="alert">
                                        A simple primary alert—check it out!
                                    </div>
                                    <div class="alert alert-secondary outline-alert" role="alert">
                                        A simple secondary alert—check it out!
                                    </div>
                                    <div class="alert alert-success outline-alert" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                    <div class="alert alert-danger outline-alert" role="alert">
                                        A simple danger alert—check it out!
                                    </div>
                                    <div class="alert alert-warning outline-alert" role="alert">
                                        A simple warning alert—check it out!
                                    </div>
                                    <div class="alert alert-info outline-alert" role="alert">
                                        A simple info alert—check it out!
                                    </div>
                                    <div class="alert alert-light outline-alert" role="alert">
                                        A simple light alert—check it out!
                                    </div>
                                    <div class="alert alert-dark outline-alert" role="alert">
                                        A simple dark alert—check it out!
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Link</h5>
                                    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
                                    <div class="alert alert-info" role="alert">
                                        A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Dismissing</h5>
                                    <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline.</p>
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lime-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <span class="footer-text">2019 © stacks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>