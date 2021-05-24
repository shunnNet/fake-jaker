import { watchMedia } from '@/assets/scripts/mediaStore.js'

export default (context, inject) => {
  inject('watchMedia', watchMedia)
}
