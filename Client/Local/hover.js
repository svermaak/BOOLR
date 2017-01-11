setInterval(function() {
    const component = find();

    if(mouse.hover && mouse.hover == component) {
        hoverBalloon.show(component);
    } else if(component) {
        mouse.hover = component;
    } else {
        hoverBalloon.hide();
    }
}, 100);

const hoverBalloon = document.getElementById("hoverBalloon");
hoverBalloon.show = function(component) {
    this.display = true;

    if(component.constructor == Wire) {
        this.children[0].innerHTML = "<h1>Wire</h1>";
        this.children[0].innerHTML += "From: " + component.from.name + "<br>";
        this.children[0].innerHTML += "To: " + component.to.name + "<br>";
        this.children[0].innerHTML += "Value: " + component.value + "<br>";
    } else {
        this.children[0].innerHTML = "<h1>" + component.name + "</h1>";
        this.children[0].innerHTML += component.pos.x + "," + component.pos.y + "<br>";
        this.children[0].innerHTML += "Placed by: " + (component.placedBy ? component.placedBy : "you") + "<br>";
        if(component.hasOwnProperty("value")) this.children[0].innerHTML += "Value: " + component.value + "<br>";
    }

    this.style.height = this.children[0].clientHeight + 5;
    setTimeout(() => {
        this.style.opacity = .95;
    });
    this.style.display = "block";
}

hoverBalloon.hide = function() {
    this.display = false;
    this.style.opacity = 0;
    setTimeout(() => hoverBalloon.style.display = "none",200);
}
