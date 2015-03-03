jquery-bootstrap-set-error
=======================
Convenience method for applying error styling to bootstrap form-groups

Call like `$('#myInput').setError('optional message', isHtml)`

The plugin will add the `has-error` class to the parent `.form-group`, and
 create a `span.help-block` with the contents of the message.

As soon as the user interacts (`input` event) with the input, it wil clear both changes.

Or, you can manually clear the error with `$('#myInput').clearError()`


This library is so basic, just read the source
-----------------------
```js

(function($){
  /**
   * Convenience method for applying error styling to bootstrap form-groups
   *
   * Call like $('#myInput').hasError('optional message')
   *
   * The plugin will add the 'has-error' class to the parent '.form-group', and
   *  create a 'help-block' with the contents of the message.
   *
   * As soon as the user interacts ('input' event) with the input, it wil clear both changes.
   *
   * @param {String} [message] A text error message to display to the user
   * @param {Boolean} [html] if true, the {message} parameter will be treated as raw html
   */
  $.fn.setError = function jQuery_fn_setError(message, html){

    return this.each(function(){
      var $this = $(this), $formGroup, $messageHelper;

      $this.trigger('input');

      $formGroup = $this.parents(".form-group");

      $formGroup.addClass("has-error");

      if (message != null && message.length !== 0) {
        $messageHelper = $('<span class="help-block clear-message">');
        if (html){
          $messageHelper.html(message);
        } else {
          $messageHelper.text(message);
        }
        $formGroup.append($messageHelper);
      }

      $this.one("input change", function(){
        $this.clearError();
      });
    });
  };

  /**
   * Allows you to manually clear the error if required
   */
  $.fn.clearError = function jQuery_fn_clearError(){
    $(this).parents(".form-group").removeClass("has-error").children('.clear-message').remove();
  }
})(jQuery);


```
