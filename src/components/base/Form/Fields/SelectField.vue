<template>
  <v-select
    v-model="field.value"
    v-validate="field.rule"
    :data-vv-name="field.text"
    :error-messages="errors.collect(`${scope}.${field.text}`)"
    :items="field.options"
    :label="field.text"
  />
</template>

<script>
  export default {
    name: 'Select',
    props: {
      field: {
        required: true,
      },
      scope: {
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
