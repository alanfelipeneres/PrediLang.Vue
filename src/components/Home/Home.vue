<script>
import MessageItem from './MessageItem.vue'
import AppIcon from '../icons/IconApp.vue'
import TimeIcon from '../icons/IconTime.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import CheckIcon from '../icons/IconCheck.vue'
import HeaderLogo from '../Header/HeaderLogo.vue'

export default {
  components: {
    MessageItem,
    AppIcon,
    TimeIcon,
    EcosystemIcon,
    CommunityIcon,
    CheckIcon,
    HeaderLogo
  }
}
</script>

<template>
  <div class="main-container">
    <HeaderLogo />
    <div>
      <MessageItem>
        <template #icon>
          <AppIcon />
        </template>
        <template #heading>PrediLang</template>

        Aplicação desenvolvida com o objetivo de servir como validação de conceito para o artigo
        'Uma Ferramenta de Apoio a Estudos de Futuro Utilizando Linguagem Natural', escrito pelo
        mestrando Alan Felipe de Lima Neres, sob a orientação do professor Dr. Edilson Feneda.
      </MessageItem>

      <MessageItem>
        <template #icon>
          <TimeIcon />
        </template>
        <template #heading>Estudo de Futuros</template>

        A aplicação utiliza técnicas avançadas de Processamento de Linguagem Natural (PLN) para
        conduzir estudos de futuros, que são metodologias voltadas para a análise e previsão de
        possíveis cenários futuros.
      </MessageItem>

      <MessageItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Criação de Cenários</template>

        A criação de cenários é um componente essencial para a previsão e planejamento estratégico,
        permitindo que os usuários explorem diferentes possibilidades e preparem-se para diversas
        eventualidades.
      </MessageItem>

      <MessageItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Processamento de Linguagem Natural</template>

        O Processamento de Linguagem Natural (PLN) é a base tecnológica da aplicação. Utilizando
        técnicas avançadas de PLN, a aplicação transforma dados brutos em insights acionáveis, que
        são essenciais para os estudos de futuros e a criação de cenários.
      </MessageItem>

      <MessageItem>
        <template #icon>
          <CheckIcon />
        </template>
        <template #heading>Acesse a Aplicação</template>

        <a href="/template" rel="noopener">Clique aqui</a> para acessar a aplicação e receber
        insights futuros de forma descomplicada.
      </MessageItem>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  place-items: center;
}
</style>
