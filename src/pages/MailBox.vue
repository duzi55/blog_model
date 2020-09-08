<template>
          <div class="lime-container">
            <div class="lime-body mailbox">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="mailbox-options d-flex align-items-center">
                                <button class="btn btn-primary m-r-xxs" data-toggle="modal" data-target="#compose">Compose</button>
                                <button class="btn btn-secondary m-r-xxs">Refresh</button>
                                <button class="btn btn-secondary m-r-xxs">Mark all as read</button>
                                <button class="btn btn-secondary m-r-xxs">Settings</button>
                                <p class="mail-count ml-auto">1-50 of 1,957</p>
                                <button class="btn btn-secondary m-l-xxs mail-left-btn">&lt;</button>
                                <button class="btn btn-secondary float-right m-l-xxs no-m-r mail-right-btn">&gt;</button>
                                <div class="modal fade" id="compose" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">New Message</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" id="emailto" aria-describedby="emailto" placeholder="To">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="subject" placeholder="Subject">
                                                    </div>
                                                    <div class="form-group">
                                                        <textarea class="form-control" placeholder="Message" id="mail-message" rows="3"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mailbox-search">
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search mailbox" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="button" id="button-addon1">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="card card-transparent">
                                <div class="card-body">
                                    <div class="mailbox-menu">
                                        <ul class="list-unstyled">
                                            <li><a href="#" class="active"><i class="material-icons">inbox</i>Inbox</a></li>
                                            <li><a href="#"><i class="material-icons">send</i>Sent</a></li>
                                            <li><a href="#"><i class="material-icons">mail_outline</i>Drafts</a></li>
                                            <li><a href="#"><i class="material-icons">error</i>Spam</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#"><i class="material-icons">delete_outline</i>Trash</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="email-list">
                                        <ul class="list-unstyled">
                                            <li class="active">
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar3.png" alt="">
                                                            <span class="author-name">Kenny Highland</span>
                                                            <span class="email-date">5m ago</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Maecenas porttitor porta erat ac suscipit porta erat ac suscipit
                                                            </span>
                                                            <span class="email-text">
                                                                Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar5.png" alt="">
                                                            <span class="author-name">Darrell Price</span>
                                                            <span class="email-date">2:05pm</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Fusce pretium sem sit amet consectetur dictum
                                                            </span>
                                                            <span class="email-text">
                                                                Suspendisse purus mauris, elementum nec ligula sed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar2.png" alt="">
                                                            <span class="author-name">Amy Walker</span>
                                                            <span class="email-date">28 Oct</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Curabitur egestas felis dui, sed dictum lorem maximus et
                                                            </span>
                                                            <span class="email-text">
                                                                Ut ullamcorper elit vitae dolor cursus maximus
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar1.png" alt="">
                                                            <span class="author-name">Kathy Olson</span>
                                                            <span class="email-date">24 Oct</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Phasellus libero quam, luctus ut purus eget
                                                            </span>
                                                            <span class="email-text">
                                                                Fusce mollis sem nisl, eu rutrum sapien tempus in
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar4.png" alt="">
                                                            <span class="author-name">Susan Mabry</span>
                                                            <span class="email-date">17 Oct</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra
                                                            </span>
                                                            <span class="email-text">
                                                                Pellentesque pellentesque condimentum lectus eget accumsan
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="email-list-item">
                                                        <div class="email-author">
                                                            <img src="../../static/images/avatars/avatar5.png" alt="">
                                                            <span class="author-name">Richard Lunsford</span>
                                                            <span class="email-date">16 Oct</span>
                                                        </div>
                                                        <div class="email-info">
                                                            <span class="email-subject">
                                                                Donec aliquet felis sed ante molestie cursus
                                                            </span>
                                                            <span class="email-text">
                                                                Suspendisse euismod leo at enim accumsan volutpat
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="card">
                                <div class="card-body">
                                    <div class="mail-container">
                                        <div class="mail-header">
                                            <div class="mail-title">
                                                Notes have been uploaded for next exam
                                            </div>
                                            <div class="mail-actions">
                                                <button class="btn btn-secondary">Reply</button>
                                                <button class="btn btn-secondary">Forwawrd</button>
                                                <button class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                        <div class="mail-info">
                                            <div class="mail-author">
                                                <img src="../../static/images/avatars/avatar3.png" alt="">
                                                <div class="mail-author-info">
                                                    <span class="mail-author-name">Kenny Highland</span>
                                                    <span class="mail-author-address">kenny.high@gmail.com</span>
                                                </div>
                                            </div>
                                            <div class="mail-other-info">
                                                <span>18:01</span>
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="mail-text">
                                            <p>Dear Sir/Madam,<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ante id elit molestie ornare. Pellentesque porttitor facilisis risus, sit amet semper ante efficitur et. Etiam quis rutrum leo, vitae posuere augue. Donec odio leo, dapibus id sollicitudin vel, luctus sit amet justo. Aenean cursus, tellus ut consectetur commodo, est dolor fringilla mauris, nec tristique magna orci in diam. Cras eget libero sit amet felis tincidunt mattis.<br><br>Waiting your reply ASAP,<br>Thanks in advance.</p>
                                        </div>
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