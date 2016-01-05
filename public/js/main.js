(function(window, document, $, undefined)
{

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    jQuery.fn.selText = function() {
        var obj = this[0];
        var range, selection;
        if ($.browser.msie) {
            range = obj.offsetParent.createTextRange();
            range.moveToElementText(obj);
            range.select();
            console.log('msie');
        } else if ($.browser.mozilla || $.browser.opera) {
            selection = obj.ownerDocument.defaultView.getSelection();
            range = obj.ownerDocument.createRange();
            range.selectNodeContents(obj);
            selection.removeAllRanges();
            selection.addRange(range);
            console.log('mozilla/opera');
        } else if ($.browser.safari) {
            selection = obj.ownerDocument.defaultView.getSelection();
            selection.setBaseAndExtent(obj, 0, obj, 1);
            console.log('safari');
        }
        return this;
    };

    $('input.autoselect')
        .focus(function () { $(this).select(); } )
        .mouseup(function (event) {event.preventDefault(); });

    $('.url-shorten-message').on('click', '.close', function(event) {
        $('.url-shorten-message').fadeOut(200);
    });

    var toggleSubmitButton = function()
    {
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
        $status.find('.notice-header').html(header);
        $status.find('.notice-text').html(text);

        if(error)
        {
            $status.find('.notices > div').removeClass('bg-color-green').addClass('bg-color-redLight');
        }
        else
        {
            $status.find('.notices > div').removeClass('bg-color-redLight').addClass('bg-color-green');
        }

        $status.fadeIn(200);
    };

    window.onloadCallback = function()
    {
        var $btn = $('.btn-shorten');

        window.grecaptchaId = grecaptcha.render('g-recaptcha', {
            'sitekey': $('.g-recaptcha').data('sitekey'),
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
                showStatusFunction('Success!', data.message);
                $('input.long-url').val(data.short_url).focus().select();
            }
            else if(data.status === 'error')
            {
                showStatusFunction('Validation Error!', data.message, true);
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

    $('input.long-url').click(function(event) {
        if($('.btn-shorten').attr('disabled')) {
            $(this).focus().select();
        }
    });

    $('.shorten-status').on('i.short-url', 'click', function(e) {
        $(this).selText();
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
    });

})(window, document, jQuery);
