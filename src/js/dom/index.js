import skizz from '../core/index'

// Style manipulation
import css from './css'

// Element manipulation
import attr from './attr'
import hasAttr from './hasAttr'
import removeAttr from './removeAttr'
import text from './text'
import detach from './detach'

// Classname manipulation
import addClass from './addClass'
import hasClass from './hasClass'
import removeClass from './removeClass'
import toggleClass from './toggleClass'

// Fragment insertion
import after from './after'
import append from './append'
import before from './before'
import prepend from './prepend'
import remove from './remove'
import html, { htmlAfter, htmlAppend, htmlBefore, htmlPrepend } from './html'

// Dom traversing
import prev from './prev'
import next from './next'
import closest from './closest'
import parent from './parent'

// Dom properties
import cloneNode from './cloneNode'

// Style manipulation
skizz.fn.css = css

// Element manipulation
skizz.fn.attr = attr
skizz.fn.hasAttr = hasAttr
skizz.fn.removeAttr = removeAttr
skizz.fn.text = text

// ClassName manipulation
skizz.fn.addClass = addClass
skizz.fn.hasClass = hasClass
skizz.fn.removeClass = removeClass
skizz.fn.toggleClass = toggleClass

// Fragment insertion
skizz.fn.after = after
skizz.fn.append = append
skizz.fn.before = before
skizz.fn.prepend = prepend
skizz.fn.remove = remove
skizz.fn.detach = detach

skizz.fn.html = html
skizz.fn.htmlBefore = htmlBefore
skizz.fn.htmlAfter = htmlAfter
skizz.fn.htmlAppend = htmlAppend
skizz.fn.htmlPrepend = htmlPrepend

// Dom traversing
skizz.fn.prev = prev
skizz.fn.next = next
skizz.fn.closest = closest
skizz.fn.parent = parent

// Dom properties
skizz.fn.cloneNode = cloneNode
