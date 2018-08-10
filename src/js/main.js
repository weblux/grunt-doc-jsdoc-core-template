import $ from './skizz'
import './plugins/anchor'

$('.anchor').anchor({
  onClick: function (trigger) {
    let svg = $('svg use', trigger)
    if (trigger.hasClass('is-active')) {
      svg.attr('xlink:href', '#icon-navigation-close')
    } else {
      svg.attr('xlink:href', '#icon-navigation-anchor')
    }
  }
})

// Filter
let parentItems = $('.page-headernav .nav > li')
let items = $('.page-headernav li li')
let names = $('.page-headernav li li .nav-item-name')
$('.page-header .search').on('submit', function (event) { event.preventDefault() })
$('#filter').on('keyup', function (event) {
  let search = event.target.value.trim()

  if (search === '') {
    showAll()
  }

  if (search.length < 3) {
    return false
  }

  showAll()
  let pattern = new RegExp(search.toLowerCase())

  items.each(function (index, collection) {
    if (pattern.test(names[index].textContent.toLowerCase(), 'gi')) {
      $(this).removeClass('is-hidden')
    } else {
      $(this).addClass('is-hidden')
    }
  })

  parentItems.each(function () {
    let result = $('li', this).map(function () {
      return $(this).hasClass('is-hidden')
    })

    if (result.indexOf(false) === -1) {
      $(this).addClass('is-hidden')
    }
  })
})

function showAll () {
  parentItems.removeClass('is-hidden')
  items.removeClass('is-hidden')
}
