class Widgets {
  constructor () {
    this.widgets = {}
    this.options = {}
  }

  register (widget) {
    this.widgets[widget.id] = widget(this, this.options[widget.id] || {})
    return this
  }

  unregister (widget) {
    this.plugins[widget.id].destroy()
    return this
  }
}

export default Widgets
