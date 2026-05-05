// src/composables/useReveal.js
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animate elements into view on scroll.
 * @param {string | (() => Element | Element[])} target - CSS selector or getter fn
 * @param {object} vars - extra gsap.from vars
 */
export function useReveal(target, vars = {}) {
  onMounted(() => {
    const els = typeof target === 'function' ? target() : document.querySelectorAll(target)
    if (!els || (els.length !== undefined && els.length === 0)) return

    gsap.from(els, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: typeof els.length !== 'undefined' ? els[0] : els,
        start: 'top 88%',
        once: true,
      },
      ...vars,
    })
  })
}

/**
 * Animate a numeric counter when element enters viewport.
 * @param {Ref<HTMLElement>} elRef
 * @param {number} target
 * @param {number} decimals
 */
export function useCounter(elRef, target, decimals = 0) {
  onMounted(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elRef.value,
        start: 'top 85%',
        once: true,
      },
      onUpdate() {
        if (elRef.value) {
          elRef.value.textContent = decimals
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val)
        }
      },
    })
  })
}
