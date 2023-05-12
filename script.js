const timeBtns = document.querySelectorAll('.time-btn')

timeBtns.forEach((timeBtn) => {
  timeBtn.addEventListener('click', (e) => {
    timeBtns.forEach((btn) => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
  })
})
