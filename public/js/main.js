(function(window, document, $, undefined){

    $(document).ready(function() {

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

        $('input.autoselect')
            .focus(function () { $(this).select(); } )
            .mouseup(function (e) {e.preventDefault(); });


        $('.url-shorten-message').on('click', '.close', function(e) {
            $('.url-shorten-message').fadeOut(200);
        });

        $('.btn-shorten').click(function(e) {
            var btn = $(this);

            var shorten_status = $('.url-shorten-message').find('.notices > div');

            if(btn.hasClass('disabled'))
            {
                event.preventDefault();
                return false;
            }

            $.ajax({
                url: base_url+'/page/shorten',
                type: 'post',
                data: { url:$('input.url').val() },
                dataType: 'json'
            }).success(function(data, status) {
                if(data.status === 'ok') {
                    shorten_status.find('.notice-header').html('Success!');
                    shorten_status.find('.notice-text').html(data.message);
                    shorten_status.removeClass('bg-color-redLight').addClass('bg-color-green');

                    $('input.url').val(data.short_url).focus().select();
                } else if(data.status === 'error') {
                    shorten_status.find('.notice-header').html('Validation Error!');
                    shorten_status.find('.notice-text').html(data.message);
                    shorten_status.removeClass('bg-color-green').addClass('bg-color-redLight');
                } else {
                    shorten_status.find('.notice-header').html('Server Error!');
                    shorten_status.find('.notice-text').html('Received malformed data from server.');
                    shorten_status.removeClass('bg-color-green').addClass('bg-color-redLight');
                }
                btn.addClass('disabled');
                $('.url-shorten-message').fadeIn(200);
            }).error(function(data, status) {
                shorten_status.find('.notice-header').html('Connection Error!');
                shorten_status.find('.notice-text').html('Something went wrong while connecting to the server.');
                shorten_status.removeClass('bg-color-green').addClass('bg-color-redLight');
                btn.addClass('disabled');
                $('.url-shorten-message').fadeIn(200);
            });

            event.preventDefault();
            return false;
        });

        $(document).on('input.url', 'input', function(e)
        {
            var btn = $('.btn-shorten');

            if(event.keyCode == 13)
            {
                if(btn.hasClass('disabled'))
                {
                    event.preventDefault();
                    return false;
                }

                btn.trigger('click');
            }
            else
            {
                btn.removeClass('disabled');
            }
        });

        $('input.url').click(function(e) {
            if($('.btn-shorten').hasClass('disabled')) {
                $(this).focus().select();
            }
        });

        $('.shorten-status').on('i.short-url', 'click', function(e) {
            $(this).selText();
        });

    });
})(window, document, jQuery);
