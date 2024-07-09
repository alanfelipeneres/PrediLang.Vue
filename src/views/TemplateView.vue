<template>
  <HeaderDefault />
  <div>
    <template-form @save="addTemplate" />
    <template-list :templates="templates" />
  </div>
</template>

<script>
import HeaderDefault from '../components/Header/HeaderDefault.vue'
import TemplateForm from '../components/Template/TemplateForm.vue'
import TemplateList from '../components/Complemento/ComplementoList.vue'

export default {
  components: {
    HeaderDefault,
    TemplateForm,
    TemplateList
  },
  data() {
    return {
      templates: []
    }
  },
  methods: {
    addTemplate(description) {
      // Adicione lógica para adicionar o novo template à lista
      const newTemplate = {
        idTemplate: this.templates.length + 1,
        descricao: description,
        dataRegistro: new Date().toLocaleString()
      }
      this.templates.push(newTemplate)
    }
  }
}
</script>
