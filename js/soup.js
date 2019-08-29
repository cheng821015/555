window.onload = function () {
    var allLis = document.querySelectorAll('.hp');
    var allPanel = document.querySelectorAll('.tabs_panel');

    // console.log(allLis, allPanel);
    for (var i = 0; i < allLis.length; i++) {
        var li = allLis[i];
        // console.log(li);
        li.index = i;
        li.onmouseover = function () {
            for (var i = 0; i < allLis.length; i++) {
                allLis[i].className = 'hp col-1-5';
                allPanel[i].style.display = 'none';
            }
            this.className += ' selected';
            allPanel[this.index].style.display = 'block';
        }
    }
}