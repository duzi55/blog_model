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
                                    <li class="breadcrumb-item active" aria-current="page">Code</li>
                                </ol>
                            </nav>
                            <h3>Code</h3>
                            <p class="page-desc">Documentation and examples for displaying inline and multiline blocks
                                of code with Bootstrap.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Inline Code</h5>
                                <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML
                                    angle brackets.</p>
                                For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Code Blocks</h5>
                                <p>Use <code>&lt;pre&gt;</code>s for multiple lines of code. Once again, be sure to
                                    escape any angle brackets in the code for proper rendering. You may optionally add
                                    the <code>.pre-scrollable</code> class, which will set a max-height of 340px and
                                    provide a y-axis scrollbar.</p>
                                <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;&lt;p&gt;And another line of sample text here...&lt;/p&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Variables</h5>
                                <p>For indicating variables use the <code>&lt;var&gt;</code> tag.</p>
                                <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">User input</h5>
                                <p>Use the <code>&lt;kbd&gt;</code> to indicate input that is typically entered via
                                    keyboard.</p>
                                To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
                                To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Sample Output</h5>
                                <p>For indicating sample output from a program use the <code>&lt;samp&gt;</code> tag.
                                </p>
                                <samp>This text is meant to be treated as sample output from a computer program.</samp>

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