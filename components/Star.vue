<script>
export default {
  functional: true,
  props: {
    rank: {
      type: Number,
      default: 0,
    },
  },
  render(h, context) {
    const starClass =
      context.props.rank === 0
        ? 'star--off'
        : context.props.rank === 1
        ? 'star--full'
        : 'star--half'

    return h('span', {
      class: ['star', starClass],
    })
  },
}
</script>

<style lang='scss'>
.star {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;

}
.star--full {
  background-image: url('@/assets/images/ic_solid_star_full_yellow.png');
}
.star--half {
  background-image: url('@/assets/images/ic_solid_star_half_yellow.png'),
    url('@/assets/images/ic_solid_star_full_off.png');
  background-size: auto;
}
.star--off {
  background-image: url('@/assets/images/ic_solid_star_full_off.png');
}
</style>