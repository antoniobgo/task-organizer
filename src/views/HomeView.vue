<script setup></script>

<template>
  <v-row justify="center">
    <v-col cols="5">
      <div class="d-flex flex-column margin-top-75">
        <div class="w-100 title-border">
          <p>Seus Projetos</p>
        </div>
        <p class="mt-5">Aqui você pode criar projetos novos!</p>
        <p class="mt-2">Crie e os acesse pela barra lateral.</p>
        <div>
          <v-btn @click="showCreateProjectModal" class="mt-5" variant="flat" size="small">
            Novo Projeto
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.title-border {
  border-bottom: solid grey 7px;
}
.margin-top-75 {
  margin-top: 75px;
}
</style>
