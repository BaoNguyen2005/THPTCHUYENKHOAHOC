var offset = 500;
var duration = 1000;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#myBtn').fadeIn(duration); else
            $('#myBtn').fadeOut(duration);
    });
    $('#myBtn').click(function () {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});

$(function () {
    $('.headroom').each(function () {
        var $doc = $(document)
            , $win = $(window)
            , $self = $(this)

            , $sHeight = $self.outerHeight(false)
            , isHidden = false
            , lastScrollTop = 0
        $win.on('scroll', function () {
            var scrollTop = $doc.scrollTop()
            var offset = scrollTop - lastScrollTop
            lastScrollTop = scrollTop
            if (offset > 10 && scrollTop > $sHeight) {
                if (!isHidden) {
                    $self.addClass('headroom-pinned')
                    isHidden = true
                }
            } else if (offset < -10 || scrollTop < $sHeight) {
                if (isHidden) {
                    $self.removeClass('headroom-pinned')
                    isHidden = false
                }
            }
        });
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }