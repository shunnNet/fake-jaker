import { watchMedia, unwatchMedia } from '@/assets/scripts/mediaStore.js'

export default (context, inject) => {
  inject('watchMedia', watchMedia)
  inject('unwatchMedia', unwatchMedia)
}
