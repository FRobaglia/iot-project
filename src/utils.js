export function getStorage(key) {
  let value = JSON.parse(localStorage.getItem(key))
  if (value === null) {
    value = { min: 10, max: 20, off: false}
    localStorage.setItem(key, JSON.stringify(value))
    return value
  }
  return value
}

export function setStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function flash(message) {
  const flash = document.querySelector('.flash')
  if (!flash) return

  flash.innerHTML = message

  flash.classList.add('is-visible')
  setTimeout(() => {
    flash.classList.remove('is-visible')
  }, 2000);
}