<template>
  <v-card>
      <v-card-title>Chat</v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-action>
          <v-text-field
            v-model="message"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            clearable
            label="메시지를 입력하세요"
            single-line
            type="text"
          ></v-text-field>
      </v-card-action>
  </v-card>
</template>

<script>
export default {
data() {
    return {
        password: 'Password',
      show: false,
      message: 'Hey!',
      marker: true,
      iconIndex: 0,
    }
},
}
</script>

<style>

</style>