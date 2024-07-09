<template>
  <div class="modal">
    <div class="modal-content">
      <p>Deseja excluir este item?</p>
      <button @click="$emit('confirm')">Sim</button>
      <button @click="$emit('cancel')">Não</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComplementoModal'
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

@media (prefers-color-scheme: dark) {
  .modal-content {
    background: #333;
    color: white;
  }
}
</style>
