var boxes = document.querySelectorAll(".box");
for (var index in boxes) {
    var box = boxes[index];
    box.addEventListener("mouseenter", function (event) {
        var target = event.target;
        target.style.backgroundColor = "yellow";
    });
}
