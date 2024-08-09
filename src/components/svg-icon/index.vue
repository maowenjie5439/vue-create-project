<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <svg>
      <use :xlink:href="`#icon-${props.name}`"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    name?: string
  }>(),
  {
    name: 'home'
  }
)
console.log(props.name)
</script>


<style lang="scss" scoped></style>
