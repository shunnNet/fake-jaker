
<script>
import Star from '@/components/Star.vue'
import { inRange } from '@/assets/scripts/helpers/utils.js'
export default {
  functional: true,
  props: {
    rank: {
      type: [Number, String],
      default: 0,
    },
  },
  render(h, context) {
    // TODO: make decimal have .0
    console.log(
      `%c ${context.props.rank} `,
      'background: lightseagreen; color: #fff'
    )

    let stars = []

    for (let i = 0; i < 5; i++) {
      let rank = inRange(context.props.rank - i, 0, 1)

      stars.push(
        h(Star, {
          props: { rank },
          class: 'rankList__star',
        })
      )
    }

    return h(
      'div',
      {
        class: 'rankList',
      },
      [
        h('span', { class: 'rankList__text' }, context.props.rank),
        h('div', { class: 'rankList__box' }, stars),
      ]
    )
  },
}
</script>

<style lang='scss'>
.rankList {
  display: flex;
  align-items: center;
  &__text {
    margin-right: 5px;
  }
  &__box {
    display: flex;
    align-items: center;
  }
}
</style>