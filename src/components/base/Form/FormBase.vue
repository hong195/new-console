<template>
  <v-form
    :data-vv-scope="scope"
    @submit.prevent="submit()"
  >
    <v-col
      v-for="(field, index) in schema"
      :key="index"
      cols="12"
    >
      <!--      <v-subheader-->
      <!--        v-if="formField.title"-->
      <!--        class="display-1 mt-1"-->
      <!--      >-->
      <!--        {{ formField.title }}-->
      <!--      </v-subheader>-->

      <component
        :is="`${field.component}-field`"
        :type="field.type"
        :label="field.label"
        :value="field.value"
        :rule="field.rule"
        :options="field.options"
        :scope="scope"
      />
    </v-col>
    <v-col>
      <slot
        :form-preloader="formPreloader"
        name="actions"
      >
        <v-card-actions
          align="center"
          class="pa-0 py-3 ml-4"
        >
          <v-btn
            :loading="formPreloader"
            color="success"
            default
            x-large
            type="submit"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </slot>
    </v-col>
  </v-form>
</template>

<script>
  import ValidatorMixin from '@/mixins/ValidatorMixin'
  import TextField from './Fields/TextField'
  import CheckboxField from './Fields/CheckboxField'
  import RadioField from './Fields/RadioField'
  import SelectField from './Fields/SelectField'
  import TextareaField from './Fields/TextareaField'

  export default {
    name: 'FormBase',
    components: {
      TextField,
      CheckboxField,
      TextareaField,
      RadioField,
      SelectField,
    },
    mixins: [ValidatorMixin],
    props: {
      schema: {
        type: Array,
        default: () => [],
      },
      // formRequestType: {
      //   type: String,
      //   required: true,
      //   validator: (value) => {
      //     return ['post', 'get', 'put', 'delete'].includes(value.toLowerCase())
      //   },
      // },
      scope: {
        type: String,
        required: true,
      },
      currentItem: {
        type: Object,
        default: () => {},
      },
      message: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      formPreloader: false,
      items: [],
    }),
    watch: {
      currentItem: {
        handler (data) {
          this.setFieldsValues(data)
        },
        deep: true,
      },
    },
    methods: {
      submit () {
        this.validateForm(this.scope)
          .then(() => {
            this.$emit(`${this.formRequestType}-form-request`, this.getFieldsValue())
          })
      },
      getFieldsValue () {
        const obj = {}
        this.formFields.forEach(el => {
          obj[el.name] = el.value || null
        })
        return obj
      },
      setFieldsValues (data) {
        this.formFields.forEach((field) => {
          if (data[field.name]) {
            field.value = data[field.name]
          }
          if (typeof data[field.name] === 'object' && !data[field.name].length) {
            field.value = data[field.name].id
          }
        })
      },
      fillForm (item) {
        this.formFields.forEach(el => {
          el.value = item[el.name]
        })
      },
      resetAll () {
        this.resetValidator()
        this.resetFields()
      },
      resetValidator () {
        this.$validator.reset({
          scope: this.scope,
          vmId: this.$validator.id,
        })
      },
      resetFields () {
        this.formFields.forEach(el => (el.value = null))
      },
      setPreloader (value) {
        this.formPreloader = value
      },
    },
  }
</script>
