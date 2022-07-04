/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:49:18
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-04 16:49:18
 * @Description: ...
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';
const townStore = defineStore('town', () => {
  const townIdMaps = ref({});
  return {
    townIdMaps,
  };
});

export default townStore;
