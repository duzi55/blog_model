<template>
      <div class="lime-container">
            <div class="lime-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="profile-cover"></div>
                            <div class="profile-header">
                                <div class="profile-img">
                                    <img src="../../static/images/avatars/avatar3.png">
                                </div>
                                <div class="profile-name">
                                    <h3>T-Jay Morton</h3>
                                </div>
                                <div class="profile-header-menu">
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="active">Feed</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Friends</a></li>
                                        <li><a href="#">Photos</a></li>
                                        <li><a href="#">Videos</a></li>
                                        <li><a href="#">Music</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">About</h5>
                                    <p>Quisque vel tellus sit amet quam efficitur sagittis. Fusce aliquam pulvinar suscipit.</p>
                                    <ul class="list-unstyled profile-about-list">
                                        <li><i class="material-icons">school</i><span>Studied Mechanical Engineering at <a href="#">Carnegie Mellon University</a></span></li>
                                        <li><i class="material-icons">work</i><span>Former manager at <a href="#">Stacks</a></span></li>
                                        <li><i class="material-icons">my_location</i><span>From <a href="#">Boston, Massachusetts</a></span></li>
                                        <li><i class="material-icons">rss_feed</i><span>Followed by 716 people</span></li>
                                        <li>
                                            <button class="btn btn-block btn-primary m-t-lg">Follow</button>
                                            <button class="btn btn-block btn-secondary m-t-lg">Message</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Contact Info</h5>
                                    <ul class="list-unstyled profile-about-list">
                                        <li><i class="material-icons">mail_outline</i><span>jay.morton@gmail.com</span></li>
                                        <li><i class="material-icons">home</i><span>Lives in <a href="#">San Francisco, CA</a></span></li>
                                        <li><i class="material-icons">local_phone</i><span>+1 (678) 290 1680</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="post">
                                        <div class="post-header">
                                            <img src="../../static/images/avatars/avatar4.png">
                                            <div class="post-info">
                                                <span class="post-author">Riley Beach</span><br>
                                                <span class="post-date">3hrs</span>
                                            </div>
                                            <div class="post-header-actions">
                                                <a href="#"><i class="material-icons">more_horiz</i></a>
                                            </div>
                                        </div>
                                        <div class="post-body">
                                            <p>Proin eu fringilla dui. Pellentesque mattis lobortis mauris eu tincidunt. Maecenas hendrerit faucibus dolor, in commodo lectus mattis ac.</p>
                                            <img src="../../static/images/card_1.jpg" class="post-image" alt="">
                                        </div>
                                        <div class="post-actions">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="#" class="like-btn"><i class="far fa-heart"></i>Like</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="far fa-comment"></i>Comment</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fas fa-share"></i>Share</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="post-comments">
                                            <div class="post-comm">
                                                <img src="../../static/images/avatars/avatar2.png" class="comment-img">
                                                <div class="comment-container">
                                                    <span class="comment-author">
                                                        Sonny Rosas
                                                        <small class="comment-date">5min</small>
                                                    </span>
                                                </div>
                                                <span class="comment-text">
                                                    Mauris ultrices convallis massa, nec facilisis enim interdum ac.
                                                </span>
                                            </div>
                                            <div class="post-comm">
                                                <img src="../../static/images/avatars/avatar1.png" class="comment-img">
                                                <div class="comment-container">
                                                    <span class="comment-author">
                                                        Jacob Lee
                                                        <small class="comment-date">27min</small>
                                                    </span>
                                                </div>
                                                <span class="comment-text">
                                                    Cras tincidunt quam nisl, vitae aliquet enim pharetra at. Nunc varius bibendum turpis, vitae ultrices tortor facilisis ac.
                                                </span>
                                            </div>
                                            <div class="new-comment">
                                                <form action="javascript: void(0)">
                                                    <div class="input-group">
                                                        <input type="text" name="comment" class="form-control search-input" placeholder="Type something...">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-secondary" type="button" id="button-addon1">Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="post">
                                        <div class="post-header">
                                            <img src="../../static/images/avatars/avatar2.png">
                                            <div class="post-info">
                                                <span class="post-author">Haydon Kenny</span><br>
                                                <span class="post-date">7hrs</span>
                                            </div>
                                            <div class="post-header-actions">
                                                <a href="#"><i class="material-icons">more_horiz</i></a>
                                            </div>
                                        </div>
                                        <div class="post-body">
                                            <p>Praesent purus purus, varius ac mauris quis, scelerisque ornare massa. Nam volutpat lacinia lectus, vitae mattis nisl. Mauris ultrices convallis massa, nec facilisis enim interdum ac. Suspendisse hendrerit risus nec nisi dictum efficitur. Pellentesque aliquet in justo id lobortis.</p>
                                        </div>
                                        <div class="post-actions">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="#" class="like-btn"><i class="far fa-heart"></i>Like</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="far fa-comment"></i>Comment</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fas fa-share"></i>Share</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="post-comments">
                                            <div class="post-comm">
                                                <img src="../../static/images/avatars/avatar4.png" class="comment-img">
                                                <div class="comment-container">
                                                    <span class="comment-author">
                                                        Riley Beach
                                                        <small class="comment-date">1hr</small>
                                                    </span>
                                                </div>
                                                <span class="comment-text">
                                                    Fusce mattis fermentum quam non porta...
                                                </span>
                                            </div>
                                            <div class="new-comment">
                                                <form action="javascript: void(0)">
                                                    <div class="input-group">
                                                        <input type="text" name="comment" class="form-control search-input" placeholder="Type something...">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-secondary" type="button" id="button-addon1">Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Stories</h5>
                                    <div class="story-list">
                                        <div class="story">
                                            <a href="#"><img src="../../static/images/avatars/avatar1.png" alt=""></a>
                                            <div class="story-info">
                                                <a href="#"><span class="story-author">Buddy Mckinney</span></a>
                                                <span class="story-time">17min</span>
                                            </div>
                                        </div>
                                        <div class="story">
                                            <a href="#"><img src="../../static/images/avatars/avatar2.png" alt=""></a>
                                            <div class="story-info">
                                                <a href="#"><span class="story-author">Marshall Braun</span></a>
                                                <span class="story-time">54min</span>
                                            </div>
                                        </div>
                                        <div class="story">
                                            <a href="#"><img src="../../static/images/avatars/avatar4.png" alt=""></a>
                                            <div class="story-info">
                                                <a href="#"><span class="story-author">Dominick Gray</span></a>
                                                <span class="story-time">2hrs</span>
                                            </div>
                                        </div>
                                        <div class="story">
                                            <a href="#"><img src="../../static/images/avatars/avatar5.png" alt=""></a>
                                            <div class="story-info">
                                                <a href="#"><span class="story-author">Francisco Mccaffrey</span></a>
                                                <span class="story-time">7hrs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Mutual Friends</h5>
                                    <div class="mutual-friends-list">
                                        <img src="../../static/images/avatars/avatar1.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Francisco Mccaffrey">
                                        <img src="../../static/images/avatars/avatar2.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Marshall Braun">
                                        <img src="../../static/images/avatars/avatar3.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Elvis Mahoney">
                                        <img src="../../static/images/avatars/avatar4.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Kenny Highland">
                                        <span>+45 others</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lime-footer">
                <div class="container-fluid">
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