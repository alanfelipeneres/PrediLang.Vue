<template>
  <div class="template-form">
    <textarea v-model="description" rows="10" style="width: 100%"></textarea> <br />
    <button @click="saveTemplate" style="float: right" class="btn btn-secondary">Salvar</button>
    <br /><br />
  </div>
</template>

<script>
import templateService from '../../services/TemplateService.js'

export default {
  data() {
    return {
      description: ''
    }
  },
  async mounted() {
    try {
      var response = await templateService.getAll()
      var template = response.data.data[0].descricao
      if (response.data) this.description = template.replace(/\\n/g, '\n')
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async saveTemplate() {
      alert('Save')

      // Chame uma API ou emita um evento para salvar o template
      //this.$emit('save', this.description)
    }
  }
}
</script>

<style scoped>
.template-form {
  margin: 20px;
}
.template-form textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

@media (prefers-color-scheme: dark) {
  .template-form textarea {
    background-color: #1e1e1e;
    color: #f5f5f5;
    border: 1px solid #555;
  }

  .template-form button {
    background-color: #f8f9fa; /* Estilo de btn-light */
    color: #212529; /* Estilo de btn-light */
    border: 1px solid #dae0e5; /* Estilo de btn-light */
  }

  .btn.btn-secondary {
    background-color: #343a40;
    border-color: #343a40;
    color: white;
  }

  .btn.btn-secondary:hover {
    background-color: #23272b;
    border-color: #1d2124;
    color: white;
  }
}
</style>
