(function(window, document, $, undefined)
{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('input.autoselect')
        .focus(function(event) {
            // it's actually $.fn.select() but Metro UI overwrites it with select2
            $(this).selectText();
        } )
        .mouseup(function (event) { event.preventDefault(); });

    $('.url-shorten-message').on('click', '.close', function(event) {
        $('.url-shorten-message').fadeOut(200);
    });

    var toggleSubmitButton = function()
    {
        // http://codegolf.stackexchange.com/a/479/48956
        if($('input.long-url').val().match(/.+\.\w\w.*/) && $('.g-recaptcha-response').val().trim().length > 0)
        {
            $('.btn-shorten').attr('disabled', false);
        }
        else
        {
            $('.btn-shorten').attr('disabled', true);
        }
    }

    var showStatusFunction = function(header, text, error)
    {
        error = false || error;

        var $status = $('.url-shorten-message');
        var $heading = $status.find('.heading');
        var $content = $status.find('.content');
        var $icon = $status.find('.icon');

        $heading.find('.title').html(header);
        $content.html(text);

        if(error)
        {
            $heading.removeClass('bg-green').addClass('ribbed-red');
            $icon.removeClass('mif-checkmark').addClass('mif-cross');
        }
        else
        {
            $heading.removeClass('ribbed-red').addClass('bg-green');
            $icon.removeClass('mif-cross').addClass('mif-checkmark');
        }

        $status.fadeIn(200);
    };

    window.onloadCallback = function()
    {
        var $btn = $('.btn-shorten');

        window.grecaptchaId = grecaptcha.render('recaptcha-shorten', {
            'sitekey': $('#recaptcha-shorten').data('sitekey'),
            'callback': function() {
                toggleSubmitButton();
            },
            'expired-callback': function() {
                toggleSubmitButton();
            }
        });
    };

    $('.btn-shorten').click(function(event)
    {
        var $this = $(this);
        $this.attr('disabled', true);

        $.ajax({
            url: window.location.origin + '/page/shorten',
            type: 'post',
            data: {
                'long_url': $('input.long-url').val().trim(),
                'g-recaptcha-response': $('.g-recaptcha-response').val().trim(),
            },
            dataType: 'json'
        }).success(function(data, status)
        {
            if(data.status === 'ok')
            {
                showStatusFunction(data.title, data.message);
            }
            else if(data.status === 'error')
            {
                showStatusFunction(data.title, data.message, true);
            }
            else
            {
                showStatusFunction('Server Error!', 'Received malformed data from server.', true);
            }

            grecaptcha.reset(window.grecaptchaId);
            toggleSubmitButton();
            $('.url-shorten-message').fadeIn(200);
        }).error(function(data, status)
        {
            grecaptcha.reset(window.grecaptchaId);
            showStatusFunction('Connection Error!', 'Something went wrong while connecting to the server.', true);
            toggleSubmitButton();
            $('.url-shorten-message').fadeIn(200);
        });

        event.preventDefault();
        return false;
    });

    $(document).on('input.long-url', 'input', function(event)
    {
        toggleSubmitButton();
    });

    $(document).ready(function()
    {
        if(document.getElementById('code-xml')) {
            var foldFunc_xml = CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);
            var xml = CodeMirror.fromTextArea(document.getElementById('code-xml'), {
                mode: {name: 'xml', alignCDATA: true},
                lineNumbers: true
            });
            xml.on('gutterClick', foldFunc_xml);
        }

        if(document.getElementById('code-json')) {
            var foldFunc_json = CodeMirror.newFoldFunction(CodeMirror.braceRangeFinder);
            var json = CodeMirror.fromTextArea(document.getElementById('code-json'), {
                mode: {name: 'javascript'},
                lineNumbers: true
            });
            json.on('gutterClick', foldFunc_json);
        }

        if(document.getElementById('code-txt')) {
            var foldFunc_json = CodeMirror.newFoldFunction(CodeMirror.braceRangeFinder);
            var json = CodeMirror.fromTextArea(document.getElementById('code-txt'), {
                mode: { lineWrapping: false,
                scrollbarStyle: null},
                lineNumbers: true
            });
            json.on('gutterClick', foldFunc_json);
        }
    });

})(window, document, jQuery);
