var controller = new ScrollMagic.Controller();




//最新消息動畫
var animation_02 = TweenMax.staggerFromTo('.message_1', 1, {
    x: -40,
    alpha: 0
}, {
    x: 0,
    alpha: 1
}, .2)


var section_02 = new ScrollMagic.Scene({
    triggerElement: "#container_02",
    reverse: false,
    offset: 0,

}).setTween(animation_02)
// .addIndicators()
.addTo(controller)

var animation_02 = TweenMax.staggerFromTo('.message_2', 1, {
    x: 40,
    alpha: 0
}, {
    x: 0,
    alpha: 1
}, .2)


var section_02 = new ScrollMagic.Scene({
    triggerElement: "#container_02",
    reverse: false,
    offset: 0,

}).setTween(animation_02)
// .addIndicators()
.addTo(controller)




//店鋪資訊動畫
var animation_01 = TweenMax.staggerFromTo('.mpa-item', 1, {
    y: -20,
    alpha: 0
}, {
    y: 0,
    alpha: 1
}, .2)


var section_02 = new ScrollMagic.Scene({
    triggerElement: "#container_01",
    reverse: false,//只要執行一次動畫ture
    offset: 0,

}).setTween(animation_01)
// .addIndicators()
.addTo(controller)

