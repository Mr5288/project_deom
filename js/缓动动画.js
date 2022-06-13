//1.让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
//2.核心算法(目标值-现在位置)/10 座位每次移动的距离步长
//3.停止的条件是：让当前盒子位置等于目标盒子位置就停止定时器
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写了定时器后面
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}