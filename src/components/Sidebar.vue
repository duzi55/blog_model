<template>
  <div>
    <div class="lime-sidebar">
      <div class="lime-sidebar-inner slimscroll">
        <ul class="accordion-menu">
          <li class="sidebar-title">Apps</li>
          <li>
            <router-link to="/dashboard" active-class="active">
              <i class="material-icons">dashboard</i>仪表盘
            </router-link>
          </li>
          <li>
            <router-link to="/profile" active-class="active">
              <i class="material-icons">person_outline</i>个人配置
            </router-link>
          </li>
          <li>
            <router-link to="/mailBox" active-class="active">
              <i class="material-icons">inbox</i>邮箱
            </router-link>
          </li>
          <li>
            <router-link to="/todo" active-class="active">
              <i class="material-icons">done_all</i>Todo
            </router-link>
          </li>
          <li>
            <router-link to="/fileManager" active-class="active">
              <i class="material-icons">cloud_queue</i>文件管理
            </router-link>
          </li>
          <li class="sidebar-title">UI 元素</li>
          <li :class="{'open':this.$route.path.indexOf('style_')!=-1}">
            <a href="#">
              <i class="material-icons">text_format</i>样式
              <i class="material-icons has-sub-menu">keyboard_arrow_left</i>
            </a>
            <ul  class="sub-menu" :style="{'display':this.$route.path.indexOf('style_') != -1?'block':'none'}">
              <li>
                <router-link to="/style_typography" active-class="active">Typography</router-link>
              </li>
              <li>
                <router-link to="/style_code" active-class="active">Code</router-link>
              </li>
              <li>
                <router-link to="/style_table" active-class="active">Tables</router-link>
              </li>
              <li>
                <router-link to="/style_icon" active-class="active">Icons</router-link>
              </li>
            </ul>
          </li>
          <li :class="{'open':this.$route.path.indexOf('ui_')!=-1}">
            <a href>
              <i class="material-icons">apps</i>组件
              <i class="material-icons has-sub-menu">keyboard_arrow_left</i>
            </a>
            <ul class="sub-menu" :style="{'display':this.$route.path.indexOf('ui_') != -1?'block':'none'}">
              <li>
                <router-link to="/ui_alert" active-class="active">通告</router-link>
              </li>
              <li>
               <router-link to="/ui_badge" active-class="active">Badge</router-link>
              </li>
              <li>
                <a href="ui-breadcrumb.html">Breadcrumb</a>
              </li>
              <li>
                <a href="ui-buttons.html">Buttons</a>
              </li>
              <li>
                <a href="ui-button-group.html">Button Group</a>
              </li>
              <li>
                <a href="ui-card.html">Card</a>
              </li>
              <li>
                <a href="ui-collapse.html">Collapse</a>
              </li>
              <li>
                <a href="ui-dropdowns.html">Dropdowns</a>
              </li>
              <li>
                <a href="ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="ui-media-object.html">Media Object</a>
              </li>
              <li>
                <a href="ui-modal.html">Modal</a>
              </li>
              <li>
                <a href="ui-navs.html">Navs</a>
              </li>
              <li>
                <a href="ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="ui-popovers.html">Popovers</a>
              </li>
              <li>
                <a href="ui-progress.html">Progress</a>
              </li>
              <li>
                <a href="ui-spinners.html">Spinners</a>
              </li>
              <li>
                <a href="ui-toast.html">Toast</a>
              </li>
              <li>
                <a href="ui-tooltips.html">Tooltips</a>
              </li>
            </ul>
          </li>
          <li>
            <a href>
              <i class="material-icons">code</i>Plugins
              <i class="material-icons has-sub-menu">keyboard_arrow_left</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="plugins-crop.html">Image Crop</a>
              </li>
              <li>
                <a href="plugins-zoom.html">Image Zoom</a>
              </li>
              <li>
                <a href="plugins-select2.html">Select2</a>
              </li>
              <li>
                <a href="plugins-plupload.html">Plupload</a>
              </li>
              <li>
                <a href="plugins-toastr.html">Toastr</a>
              </li>
              <li>
                <a href="plugins-sliders.html">Range Sliders</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="charts.html">
              <i class="material-icons">bar_chart</i>Charts
            </a>
          </li>
          <li>
            <a href="forms.html">
              <i class="material-icons">input</i>Forms
            </a>
          </li>
          <li class="sidebar-title">Other</li>
          <li>
            <a href>
              <i class="material-icons">star_border</i>Pages
              <i class="material-icons has-sub-menu">keyboard_arrow_left</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="404.html">404</a>
              </li>
              <li>
                <a href="500.html">500</a>
              </li>
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
              <li>
                <a href="sign-up.html">Sign Up</a>
              </li>
              <li>
                <a href="lock-screen.html">Lock Screen</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
              <li>
                <a href="invoice.html">Invoice</a>
              </li>
              <li>
                <a href="pricing-tables.html">Pricing Tables</a>
              </li>
              <li>
                <a href="help-center.html">Help Center</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="material-icons">bookmark_border</i>Documentation
            </a>
          </li>
          <li>
            <a href="#">
              <i class="material-icons">access_time</i>Change Log
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleIsActive: false,
    };
  },
  methods: {},
};
</script>

<style>
</style>