<template>
    <v-card>
        <v-card-title>Chat</v-card-title>
        <v-card-text> </v-card-text>
        <v-card-action>
            <v-text-field v-on:keyup.enter="setMsg" v-model="message" append-outer-icon="mdi-send" clearable label="메시지를 입력하세요" single-line type="text"></v-text-field>
        </v-card-action>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                password: "Password",
                show: false,
                message: "",
                marker: true,
                iconIndex: 0,
            };
        },
        computed: {
            setMsg() {
                console.log(this.message);
                return this.message;
            },
        },
    };
</script>

<style></style>
