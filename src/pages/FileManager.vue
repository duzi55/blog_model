<template>
        <div class="lime-container">
            <div class="lime-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-title">
                                <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb breadcrumb-separator-1">
                                    <li class="breadcrumb-item"><a href="#">Apps</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">File Manager</li>
                                  </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card card-transparent">
                                <div class="card-body">
                                    <a href="#" class="btn btn-primary btn-block">Upload File</a>
                                    <div class="file-manager-menu">
                                        <ul class="list-unstyled">
                                            <li class="fmm-title">My Drive</li>
                                            <li>
                                                <a href="#"><i class="material-icons">folder_open</i>All Files</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="material-icons">access_time</i>Recents</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="material-icons">laptop</i>My Devices</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="material-icons">star_border</i>Important</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="material-icons">delete_outline</i>Deleted</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="file-manager-menu label-menu">
                                        <ul class="list-unstyled">
                                            <li class="fmm-title">Labels</li>
                                            <li>
                                                <a href="#"><i class="bg-danger"></i>Work</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="bg-success"></i>Personal</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="bg-warning"></i>Family</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="bg-primary"></i>Friends</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="bg-dark"></i>Other</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="storage-info">
                                        <span class="storage-info-title">Storage</span>
                                        <span class="storage-info-text">125.4GB used of 500GB</span>
                                        <div class="progress m-b-sm">
                                            <div class="progress-bar bg-info" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="card card-transparent file-list recent-files">
                                <div class="card-body">
                                    <h5 class="card-title">RECENT FILES</h5>
                                    <div class="row">
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file photo">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">photo</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>IMG_08719.jpg</p>
                                                    <span class="file-size">657.9kb</span><br>
                                                    <span class="file-date">Last Accessed: 17min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file pdf">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">description</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>Lease_05.pdf</p>
                                                    <span class="file-size">17.5kb</span><br>
                                                    <span class="file-date">Last Accessed: 2 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file code">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">code</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>user_info.java</p>
                                                    <span class="file-size">12.7kb</span><br>
                                                    <span class="file-date">Last Accessed: 6 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file audio">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">volume_up</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>music_1.mp3</p>
                                                    <span class="file-size">37.4mb</span><br>
                                                    <span class="file-date">Last Accessed: 7 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-transparent file-list">
                                <div class="card-body">
                                    <h5 class="card-title">FOLDERS</h5>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card folder">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="folder-icon">
                                                        <i class="material-icons">folder_open</i>
                                                    </div>
                                                    <div class="folder-info">
                                                        <a href="#">Photos</a>
                                                        <span>87 files, 417mb</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card folder">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="folder-icon">
                                                        <i class="material-icons">folder_open</i>
                                                    </div>
                                                    <div class="folder-info">
                                                        <a href="#">Music</a>
                                                        <span>9 files, 56mb</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="card bg-info text-white">
                                        <div class="card-body">
                                            <div class="upgrade-info row">
                                                <div class="upgrade-text col-md-6">
                                                    <h5 class="card-title">Upgrade account now and get your first three months for free!</h5>
                                                    <ul>
                                                        <li>Unlimited Storage</li>
                                                        <li>Sync easily between your devices</li>
                                                        <li>Advanced Security</li>
                                                        <li>Much more..</li>
                                                    </ul>
                                                    <a href="#" class="btn btn-warning m-t-xs">Upgrade Now</a>
                                                </div>
                                                <div class="upgrade-image col-md-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="">
                                                <div class="">
                                                    <h5 class="card-title">Go Business</h5>
                                                    <p>Need more? Check out our business plan and see why professionals trust us!</p>
                                                    <p>More than 3000 happy customers and counting!</p>
                                                    <a href="#" class="btn btn-warning m-t-xs">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                      
                            </div>
                            <div class="card card-transparent file-list">
                                <div class="card-body">
                                    <h5 class="card-title">FILES</h5>
                                    <div class="row">
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file pdf">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">description</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>users.txt</p>
                                                    <span class="file-size">14.2kb</span><br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file audio">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">volume_up</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>group_project.mp3</p>
                                                    <span class="file-size">1.2mb</span><br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file code">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">code</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>upload.php</p>
                                                    <span class="file-size">12.7kb</span><br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file code">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">code</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>check_status.php</p>
                                                    <span class="file-size">23.8kb</span><br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file photo">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">photo</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>friends_09.jpg</p>
                                                    <span class="file-size">389.2kb</span><br>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-xl-3">
                                            <div class="card file photo">
                                                <div class="file-options dropdown">
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#">View Details</a>
                                                        <a class="dropdown-item" href="#">Mark as Important</a>
                                                        <a class="dropdown-item" href="#">Move To</a>
                                                        <a class="dropdown-item" href="#">Copy To</a>
                                                        <a class="dropdown-item" href="#">Rename</a>
                                                        <a class="dropdown-item" href="#">Download</a>
                                                        <div class="divider"></div>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                                <div class="card-header file-icon">
                                                    <i class="material-icons">photo</i>
                                                </div>
                                                <div class="card-body file-info">
                                                    <p>friends_08.jpg</p>
                                                    <span class="file-size">436.6kb</span><br>
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