/*-- GAlLERY IMAGES */
document.addEventListener("DOMContentLoaded", function () {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery .col-lg-3");

    document.getElementById("btnall").classList.add("btn-danger");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = this.dataset.filter;

            if (filter === "all") {
                document.getElementById("btnall").classList.add("btn-danger");
                galleryItems.forEach(function (item) {
                    item.style.display = "block";
                    item.classList.add("pop-out");
                });
            } else {
                document.getElementById("btnall").classList.remove("btn-danger");
                galleryItems.forEach(function (item) {
                    item.classList.remove("pop-out");
                    if (item.classList.contains(filter)) {
                        item.style.display = "block";
                        setTimeout(function () {
                            item.classList.add("pop-out");
                        }, 10);
                    } else {
                        item.style.display = "none";
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery .col-lg-3");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = this.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            galleryItems.forEach(function (item) {
                item.classList.remove("pop-out");

                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                    setTimeout(function () {
                        item.classList.add("pop-out");
                    }, 10);
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery .col-lg-3");

    document.getElementById("btnall").classList.add("btn-danger");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = this.dataset.filter;

            if (filter === "all") {
                document.getElementById("btnall").classList.add("btn-danger");
                galleryItems.forEach(function (item) {
                    item.style.display = "block";
                    item.classList.add("pop-out");
                });
            } else {
                document.getElementById("btnall").classList.remove("btn-danger");
                galleryItems.forEach(function (item) {
                    item.classList.remove("pop-out");
                    if (item.classList.contains(filter)) {
                        item.style.display = "block";
                        setTimeout(function () {
                            item.classList.add("pop-out");
                        }, 10);
                    } else {
                        item.style.display = "none";
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery .col-lg-3");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = this.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            galleryItems.forEach(function (item) {
                item.classList.remove("pop-out");

                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                    setTimeout(function () {
                        item.classList.add("pop-out");
                    }, 10);
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});


$(document).ready(function () {
    document.getElementById('homelink').classList.add="active";
});