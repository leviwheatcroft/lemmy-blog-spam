export default function applyJs () {
  // console.log(document.querySelectorAll('comment'))
  document.querySelectorAll('.comment').forEach((commentEl) => {
    const toggleBodyEl = commentEl.querySelector('.toggle-body')
    const collapseBodyEl = commentEl.querySelector('.collapse-body')
    const expandBodyEl = commentEl.querySelector('.expand-body')
    const bodyEl = commentEl.querySelector('.body')
    toggleBodyEl.addEventListener('click', (event) => {
      event.stopPropagation()
      collapseBodyEl.classList.toggle('hidden')
      expandBodyEl.classList.toggle('hidden')
      bodyEl.classList.toggle('hidden')
    })
  })
}
