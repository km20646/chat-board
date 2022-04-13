<template>
  <v-container fluid>
      <v-row>
          <v-col sm="12" lg="6">1</v-col>
          <v-col sm="12" lg="6">
              <Chat></Chat>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Chat from '../components/Chat.vue';
export default {
components: {
    Chat,
},
}
</script>

<style>

</style>