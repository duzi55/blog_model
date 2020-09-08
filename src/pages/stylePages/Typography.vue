<template>
   <div class="lime-container">
            <div class="lime-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-title">
                                <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb breadcrumb-separator-1">
                                    <li class="breadcrumb-item"><a href="#">Styles</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Typography</li>
                                  </ol>
                                </nav>
                                <h3>Typography</h3>
                                <p class="page-desc">Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Headings</h5>
                                    <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                                    <h1>h1. Heading</h1>
                                    <h2>h2. Heading</h2>
                                    <h3>h3. Heading</h3>
                                    <h4>h4. Heading</h4>
                                    <h5>h5. Heading</h5>
                                    <h6>h6. Heading</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Display Headings</h5>
                                    <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <b>display heading</b>—a larger, slightly more opinionated heading style.</p>
                                    <h1 class="display-1">Display 1</h1>
                                    <h1 class="display-2">Display 2</h1>
                                    <h1 class="display-3">Display 3</h1>
                                    <h1 class="display-4">Display 4</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Lead</h5>
                                    <p>Make a paragraph stand out by adding <code>.lead</code>.</p>
                                    <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Inline Text Elements</h5>
                                    <p>Styling for common inline HTML5 elements.</p>
                                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                    <p><u>This line of text will render as underlined</u></p>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <p><strong>This line rendered as bold text.</strong></p>
                                    <p><em>This line rendered as italicized text.</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Abbreviations</h5>
                                    <p>Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
                                    <p><abbr title="attribute">attr</abbr></p>
                                    <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Blockquotes</h5>
                                    <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class="blockquote"&gt;</code> around any HTML as the quote.</p>
                                    <blockquote class="blockquote">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Naming a Source</h5>
                                    <p>Add a <code>&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</p>
                                    <blockquote class="blockquote">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Unstyled Lists</h5>
                                    <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <b>This only applies to immediate children list items</b>, meaning you will need to add the class for any nested lists as well.</p>
                                    <ul class="list-unstyled">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li>Nulla volutpat aliquam velit
                                            <ul>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Vestibulum laoreet porttitor sem</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ul>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Description list alignment</h5>
                                    <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins).</p>
                                    <dl class="row">
                                        <dt class="col-sm-3">Description lists</dt>
                                        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                                        <dt class="col-sm-3">Euismod</dt>
                                        <dd class="col-sm-9">
                                            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                                        </dd>

                                        <dt class="col-sm-3">Malesuada porta</dt>
                                        <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                                        <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                        <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                        <dt class="col-sm-3">Nesting</dt>
                                        <dd class="col-sm-9">
                                            <dl class="row">
                                                <dt class="col-sm-4">Nested definition list</dt>
                                                <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                            </dl>
                                        </dd>
                                    </dl>
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