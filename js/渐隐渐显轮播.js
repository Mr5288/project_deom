        // 底部轮播图
        var pic_lunbo_lft = document.querySelector('.pic_lunbo_lft');
        var pic_lunbo_rit = document.querySelector('.pic_lunbo_rit');
        var ul = document.querySelector('.pic_ul');
        var Width = document.querySelector('.Width');
        var picWidth = Width.offsetWidth + 25;
        var shubiao = document.querySelector('.shubiao');
        var num = 0;
        for (var i = 0; i < 4; i++) {

            ul.appendChild(ul.children[i].cloneNode(true));
        };

        pic_lunbo_rit.addEventListener('click', function() {
            if (num == 8) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * picWidth)
        });
        pic_lunbo_lft.addEventListener('click', function() {
            if (num == 0) {
                num = 8;
                ul.style.left = -num * picWidth + 'px';
            }
            num--;
            animate(ul, -num * picWidth)
        });
        shubiao.addEventListener('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        });
        shubiao.addEventListener('mouseleave', function() {
            timer = setInterval(function() {
                pic_lunbo_rit.click()
            }, 3000)
        });
        var timer = setInterval(function() {
            pic_lunbo_rit.click()
        }, 3000);