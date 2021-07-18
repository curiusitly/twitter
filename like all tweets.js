// use on a profile or homepage

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="like"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000) -- can change just no point really
