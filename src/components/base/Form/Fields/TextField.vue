<template>
  <div>
    <v-text-field
      v-model="value"
      v-validate="validationRule"
      :type="type"
      :data-vv-name="label"
      :error-messages="errors.collect(`${scope}.${label}`)"
      :label="label"
      :css-classes="cssClasses"
    />
  </div>
</template>

<script>
  export default {
    name: 'Text',
    props: {
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      scope: {
        type: String,
        required: true,
      },
      cssClasses: {
        type: String,
        default: '',
      },
      validationRule: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>

</style>
