<template>
  <v-row>
    <v-col
      v-if="label"
      cols="12"
    >
      <v-subheader
        class="display-1 mt-1"
      >
        {{ label }}
      </v-subheader>
    </v-col>
    <v-col
      v-for="(option, index) in options"
      :key="`checkbox-${id}-${index}`"
    >
      <v-checkbox
        v-model="value"
        v-validate="validationRule"
        :data-vv-name="label"
        :error-messages="errors.collect(`${scope}.${label}`)"
        :value="option.id"
        :label="label"
        :css-classes="cssClasses"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      options: {
        type: Array,
        default: () => [],
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
    data: () => ({
      id: null,
    }),
    mounted () {
      this.id = this._uid
    },
  }
</script>

<style scoped>

</style>
