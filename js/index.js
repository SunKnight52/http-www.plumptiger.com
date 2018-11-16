window.onload = function () {

    //在线客服
    $(".consult").on("click", ".online", function () { 
        hz6d_is_exist('setIsinvited()%3Bwindow.open(#liyc#https%3A%2F%2Fwww16.53kf.com%2FwebCompany.php%3Farg%3D10187472%26style%3D1%26language%3Dzh-cn%26charset%3DGBK%26kflist%3Doff%26kf%3D%26zdkf_type%3D1%26lnk_overflow%3D0%26referer%3Dfile%253A%252F%252F%252FE%253A%252Fwww%252Fpaoxiaohu%252Findex.html%2523page2%26keyword%3D%26tfrom%3D1%26tpl%3Dcrystal_blue%26uid%3D66ecc6ba5549316f574beb00ff3f1183%26is_group%3D%26is_group%3D#liyc#%2C%20#liyc#_blank#liyc#%2C%20#liyc#height%3D600%2Cwidth%3D800%2Ctop%3D50%2Cleft%3D200%2Cstatus%3Dyes%2Ctoolbar%3Dno%2Cmenubar%3Dno%2Cresizable%3Dyes%2Cscrollbars%3Dno%2Clocation%3Dno%2Ctitlebar%3Dno#liyc#)');
    })
     
        var _53code = document.createElement("script");
        _53code.src = "https://tb.53kf.com/code/code/10187472/1";
        var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(_53code, s)
    $(".full").click(function () {
        if ($(this).text() == "退出全屏") {
            exit()
        } else if ($(this).text() == "全屏") {
            full()
        }
    })
    full();
    function full() {
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
        console.log()
        $(".full").text("退出全屏")
        return;
    }
    
    function exit() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        }
        $(".full").text("全屏")

}
    //fullpage
    $(function () {
        $('#fullPage').fullpage({
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            'navigation': true,
            navigationPosition: "left",
            navigationColor:"#fff",
            anchors: ['index', 'wallat', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
            menu: '#menu',
            scrollBar: true,        //处理fullpage与wow兼容问题
            
             afterRender: function() {
                 new WOW().init();         
            },
            onLeave: function (index, nextIndex, direction) {
                switch (nextIndex) {
                    case 1:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 2:
                        $("#pxh_logo").attr("src","./image/logo1.png")
                        $(".head").addClass("black_head");
                        break;
                    case 3:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 4:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 5:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 6:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 7:
                        $("#pxh_logo").attr("src", "./image/logo.png")
                        $(".head").removeClass("black_head");
                        break;
                    case 8:
                        $("#pxh_logo").attr("src", "./image/logo1.png")
                        $(".head").addClass("black_head");
                        break;
                }
             }
        });
    });

    
   
    var href = window.location.href;
    var spstr = href.split("");
    var nub = spstr[spstr.length - 1];
    $.fn.fullpage.moveTo(nub)

    $(".five li").mouseenter(function () {
        $(this).find("img").addClass('animated bounce');
        let that=$(this)
        setTimeout(function () {
            $(that).find("img").removeClass('bounce');
        }, 1000);
    })

   
    //动态背景
    jQuery(function ($) {
        particlesJS('particles-js', {
            particles: {
                color: '#92f5f8',//球颜色

                shape: 'circle',
                // "circle", "edge" or "triangle"
                opacity: .4,
                size: 4,
                size_random: true,
                nb: 200,  //数量
                line_linked: {
                    enable_auto: true,
                    distance: 100,  //距离多少生成线
                    color: '#256b59',
                    opacity: 0.6,
                    width: 1,
                    condensed_mode: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 1    //移动速度
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 300
                },
                detect_on: 'canvas',
                // "canvas" or "window"
                mode: 'grab',
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {   //鼠标点击时生成球
                        enable: true,
                        mode: 'push',
                        // "push" or "remove"
                        nb: 4
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });


    });
    //合作案例轮播图
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 横向切换选项 "vertical"垂直
        loop: true, // 循环模式选项
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 50,
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    //咨询
    var consultitem = {
        // online: {
        //    link:"#" 
        // },
        qq: {
            link:"#"
        },
        weixin: {
            ewm:"./image/ewm.png"
        },
        phone: {
            phone:"0274-12345678" 
        }
    }
    var consult = '<img src="./image/icon_gb.png" id="consult_close" alt="consult_close"><div class="online"><img src="./image/icon_zx.png" alt=""><span>在线咨询</span></div><div class="qq"><a href=' + consultitem.qq.link + '><img src="./image/icon_wxb.png" alt=""><span>QQ咨询</span></a></div><div class="weixin"><img src="./image/icon_wxb.png" alt=""><span>微信咨询</span><img src=' + consultitem.weixin.ewm + ' alt=""></div><div class="phone"><img src="./image/icon_zj.png" alt=""><span>' + consultitem.phone.phone + '</span></div>'
   
    $(".consult_item").click(function () {
        $(".consult_item").hide();
        $(".consult").html(consult)
        $(".consult").show()
    })

    $(".consult").on("click", "#consult_close", function () {
        $(".consult").hide();
        $(".consult_item").show();
    })
 
   





}