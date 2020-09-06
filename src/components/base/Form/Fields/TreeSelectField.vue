<template>
  <div>
    <!--  <treeselect-->
    <!--    ref="treeSelect"-->
    <!--    v-model="field.value"-->
    <!--    v-validate="field.rule"-->
    <!--    :options="field.options"-->
    <!--    :placeholder="field.text"-->
    <!--    :disable-branch-nodes="field.disableBranchNodes"-->
    <!--    no-options-text="Нет доступных значений"-->
    <!--    no-results-text="Нет доступных значений"-->
    <!--    no-children-text="Нет доступных значений"-->
    <!--    :data-vv-name="field.text"-->
    <!--    :error-messages="errors.collect(`${scope}.${field.text}`)"-->
    <!--    style="margin-top: 20px;"-->
    <!--  />-->
  </div>
</template>

<script>
  export default {
    name: 'TreeSelect',
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
