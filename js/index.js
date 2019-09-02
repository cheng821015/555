var controller = new ScrollMagic.Controller();
var animation_02 = TweenMax.staggerFromTo('.mpa-item', 1, {
    y: -20,
    alpha: 0
}, {
    y: 0,
    alpha: 1
}, .2)


var section_02 = new ScrollMagic.Scene({
    triggerElement: "#container_01",
    reverse: true,
    offset: 0,

}).setTween(animation_02)
// .addIndicators()
.addTo(controller)

