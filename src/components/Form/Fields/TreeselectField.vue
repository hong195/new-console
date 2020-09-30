<template>
  <validation-provider
    v-slot="{ errors, required, ariaInput, ariaMsg }"
    tag="div"
    :rules="validationRule"
    :name="label"
  >
    <treeselect
      ref="treeSelect"
      v-model="innerValue"
      class="treeselect-component"
      :options="options"
      :normalizer="normalizer"
      v-bind="attributes"
    />
  </validation-provider>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  import FieldMixin from '@/components/Form/Mixins/FieldMixin'
  export default {
    name: 'TreeselectField',
    components: {
      Treeselect,
    },
    mixins: [FieldMixin],
    props: {
      normalizer: {
        type: Function,
        default: (node) => {
          return {
            id: node.id,
            label: node.name,
            children: node.children,
          }
        },
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style >
  .treeselect-component {
    margin-bottom: 40px;
  }
</style>
