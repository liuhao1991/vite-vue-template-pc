<!--
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:56:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-04 17:21:11
 * @Description: ...
-->
<template>
  <svg aria-hidden="true" :width="size" :height="size">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup (props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
