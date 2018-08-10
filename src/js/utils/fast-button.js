(function ($) {
  $.fn.fastButton = function (handler) {
    let body = document.body
    let addEventListener = 'addEventListener'
    let removeEventListener = 'removeEventListener'
    let ClickBuster = {}

    /**
     * ClickBuster listens for consecutive clicks and identifies them as a
     * single event if they happen within the same area
     * @private
     */
    ClickBuster.coordinates = []

    /**
      * Verifies that the click event has already been detected and if yes,
      * cancels it
      * @private
      */
    ClickBuster.onClick = function (event) {
      let i, x, y
      for (i = 0; i < ClickBuster.coordinates.length; i += 2) {
        x = ClickBuster.coordinates[i]
        y = ClickBuster.coordinates[i + 1]
        if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
          event.stopPropagation()
          event.preventDefault()
        }
      }
    }

    /**
     * Click coordinates are tracked to prevent executing the handler twice
     * @private
     */
    ClickBuster.preventGhostClick = function (x, y) {
      ClickBuster.coordinates.push(x, y)
      window.setTimeout(ClickBuster.pop, 2500)
    }

    /**
     * Remove the oldest coordinates from the list
     * @private
     */
    ClickBuster.pop = function () {
      ClickBuster.coordinates.splice(0, 2)
    }

    document[addEventListener]('click', ClickBuster.onClick, true)

    let objHandler = {
      element: this,
      handler: handler,

      /** Listen for mouse click and touch events */
      handleEvent: function (event) {
        switch (event.type) {
          case 'touchstart':
            this.onTouchStart(event)
            break

          case 'touchmove':
            this.onTouchMove(event)
            break

          case 'touchend':
            this.onClick(event)
            break

          case 'click':
            this.onClick(event)
            break
        }
      },

      /**
       * when the user presses her finger on the screen, we start
       * listening for when she removes it and memorize the
       * coordinates of the first finger (this is to discriminate
       * between taps and swipes)
       */
      onTouchStart: function (event) {
        var touch = event.touches[0]

        event.stopPropagation()

        this.element[addEventListener]('touchend', this, false)
        body[addEventListener]('touchmove', this, false)

        this.startX = touch.clientX
        this.startY = touch.clientY
      },

      /**
       * if the user moves her finger more than a certain amount,
       * it means this is a swipe gesture and we stop tracking it.
       */
      onTouchMove: function (event) {
        var touch = event.touches[0]

        if (Math.abs(touch.clientX - this.startX) > 10 ||
            Math.abs(touch.clientY - this.startY) > 10) {
          this.reset()
        }
      },

      /**
       * the user tapped/clicked on the target button, therefore
       * we just call the handler
       */
      onClick: function (event) {
        event.stopPropagation()
        this.reset()

        if (this.handler.handleEvent) {
          this.handler.handleEvent(event)
        } else {
          this.handler(event)
        }

        /* if it was a tap, we must take care of the click event that
         * will be fired 300ms later and prevent the handler from being
         * called twice.
         */
        if (event.type === 'touchend') {
          ClickBuster.preventGhostClick(this.startX, this.startY)
        }
      },

      /** stop tracking the user's gesture */
      reset: function () {
        this.element[0][removeEventListener]('touchend', this, false)
        body[removeEventListener]('touchmove', this, false)
      },

      /** remove any listener */
      destroy: function () {
        let element = this.element[0]
        element[removeEventListener]('touchend', this, false)
        element[removeEventListener]('touchstart', this, false)
        element[removeEventListener]('touchmove', this, false)
        element[removeEventListener]('click', this, false)
        body[removeEventListener]('touchmove', this, false)
      }
    }

    function FastButton () {
      let element = this
      this.element = element
      this.handler = handler

      element[addEventListener]('touchstart', objHandler, false)
      element[addEventListener]('click', objHandler, false)
      init()

      function init () {}
    }
    return this.each(FastButton)
  }
}(window.skizz))
