var tags = document.querySelectorAll(".service-tag")

tags.forEach(function(tag) {
    tag.addEventListener("click", function() {
        // remove active from all tags first
        tags.forEach(function(t) {
            t.classList.remove("active")
        })
        // add active to clicked one
        tag.classList.add("active")
    })
})
