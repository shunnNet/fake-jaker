const medias = {
  '992': {
    watch: '(min-width: 992px)',
    callbacks: [],
    mql: null
  },
  '768': {
    watch: '(min-width: 768px)',
    callbacks: [],
    mql: null
  }
}
function isMedia(key) {
  return key in medias
}

for (const key in medias) {
  if (!isMedia(key)) {
    break
  }
  const { watch, callbacks } = medias[key]
  medias[key].mql = matchMedia(watch)

  if (medias[key].mql.addEventListener) {
    medias[key].mql.addEventListener('change', event => {
      callbacks.forEach(cb => cb(event.matches))
    })
  } else {
    medias[key].mql.addListener(event => {
      callbacks.forEach(cb => cb(event.matches))
    })
  }
}

export function watchMedia(name, callback, runInit = true) {
  if (medias[name] && typeof callback === 'function') {
    medias[name].callbacks.push(callback)

    runInit && callback(medias[name].mql.matches)
  }
  return function() {
    const pos = medias[name].callbacks.findIndex(cb => cb === callback)
    medias[name].callbacks.splice(pos, 1)
  }
}

export function unwatchMedia(name, callback) {
  if (medias[name] && typeof callback === 'function') {
    const pos = medias[name].callbacks.findIndex(cb => cb === callback)
    medias[name].callbacks.splice(pos, 1)
  }
}
