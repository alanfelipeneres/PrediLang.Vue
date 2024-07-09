<template>
  <div>
    <h2>Complementos</h2>
    <table style="width: 100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Pergunta</th>
          <th>Resposta</th>
          <th>Usuário</th>
          <th>Data de Registro</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="complemento in complementos" :key="complemento.idComplementto">
          <td>{{ complemento.idComplementto }}</td>
          <td>{{ complemento.pergunta }}</td>
          <td>{{ complemento.resposta }}</td>
          <td>{{ complemento.usuario }}</td>
          <td>{{ complemento.dataRegistro }}</td>
          <td>
            <router-link
              :to="{ name: 'complementoDetalhe', params: { id: complemento.idComplementto } }"
              >Detalhes</router-link
            >
            <a href="#" @click.prevent="confirmDelete(complemento.idComplementto)">Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
    <complemento-modal v-if="showModal" @confirm="deleteComplemento" @cancel="showModal = false" />
  </div>
</template>

<script>
import ComplementoModal from '../Complemento/ComplementoModal.vue'

export default {
  components: {
    ComplementoModal
  },
  data() {
    return {
      complementos: [
        // Dados dos complementos, normalmente carregados via API
      ],
      showModal: false,
      complementoToDelete: null
    }
  },
  methods: {
    confirmDelete(id) {
      this.complementoToDelete = id
      this.showModal = true
    },
    deleteComplemento() {
      // Chame uma API para deletar o template
      this.showModal = false
      this.complementoToDelete = null
      // Atualize a lista de templates após deletar
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
table th {
  background-color: #f2f2f2;
}
table a {
  color: #007bff;
  text-decoration: none;
}
table a:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  table {
    background-color: #333;
    color: white;
  }
  table th,
  table td {
    border: 1px solid #555;
  }
  table th {
    background-color: #444;
  }
}
</style>
