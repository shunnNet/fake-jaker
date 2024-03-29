<template>
  <div
    class="c-field c-select"
    :class="{ ...stateClass, ...focusClass, ...validateClass, ...theme }"
    tabIndex="-1"
    @blur="handleShowEvent(false)"
    @click="handleShowEvent(!show)"
    @focus="isFocus = true"
    @keydown.enter="handleShowEvent(true)"
    @keydown.tab="handleShowEvent(false)"
  >
    <span class="c-field__label" v-if="label"> {{ label }} </span>
    <div class="c-field__wrap" tabIndex="0" ref="unit">
      <slot name="prepend" :iconClass="'c-field__icon'"></slot>
      <div class="c-field__unit">{{ showLabel }}</div>
      <Triangle
        class="c-select__drop-icon"
        :class="{ 'c-select__drop-icon--show': !show }"
      />
      <transition-slide :min="0" :max="dropMaxHeight">
        <ul class="c-select__drop" v-show="show">
          <li
            class="c-select__drop__itm"
            v-for="(opt, i) in options"
            :key="opt.key ? opt.key : i"
            @click.stop="handleChange(opt)"
          >
            {{ opt.label }}
          </li>
        </ul>
      </transition-slide>
    </div>
    <slot name="errors" :errors="errors" errorClass="c-field__error">
      <div class="c-field__error" v-show="errors.length">
        {{ errors[0] }}
      </div>
    </slot>
  </div>
</template>

<script>
import baseUtility from './mixins/baseUtility.js'
import validatable from './mixins/validatable.js'
import focusable from './mixins/focusable.js'
import TransitionSlide from '../animation/TransitionSlide.vue'
import stateful from './mixins/stateful.js'
import theme from './mixins/theme.js'

export default {
  $_veeValidate: {
    value() {
      return this.innerValue
    },
    name() {
      return this.name
    },
  },
  name: 'c-select',
  mixins: [baseUtility, stateful, focusable, validatable, theme],
  model: {
    props: 'value',
    event: 'input',
  },
  props: {
    options: {
      type: Array,
    },
    valueKey: {
      type: String,
    },
    dropMaxHeight: {
      type: Number,
    },
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      innerValue: '',
      show: false,
    }
  },
  computed: {
    valueIsObject() {
      return this.value && typeof this.value === 'object'
    },
    showLabel() {
      if (this.options.length === 0) return this.placeholder

      let selected = this.valueIsObject
        ? this.options.find(
            (opt) => opt.value[this.valueKey] === this.innerValue[this.valueKey]
          )
        : this.options.find((opt) => opt.value === this.innerValue)

      return selected && selected.label ? selected.label : this.placeholder
    },
  },

  methods: {
    handleChange(opt) {
      this.innerValue = opt.value
      this.$emit('input', opt.value)
      this.show = false
    },
    handleShowEvent(toState) {
      if (!this.readonly && !this.disabled) {
        this.show = this.isFocus = toState
        this.$emit(this.isFocus ? 'focus' : 'blur')
      }
    },
  },
  components: {
    TransitionSlide,
  },
}
</script>
