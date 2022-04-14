<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col sm="12" md="6">
                        <Boardlist></Boardlist>
                    </v-col>
                    <v-col sm="12" md="6" style="height: 900px">
                        <!-- <Home></Home> -->
                        <!-- :link-options="linkOptions" -->
                        <!-- @onImageClicked="onImageClicked"
                            @onImageSelected="onImageSelected" -->
                        <Chat
                            :participants="participants"
                            :myself="myself"
                            :messages="messages"
                            :chat-title="chatTitle"
                            :placeholder="placeholder"
                            :colors="colors"
                            :border-style="borderStyle"
                            :hide-close-button="hideCloseButton"
                            :close-button-icon-size="closeButtonIconSize"
                            :submit-icon-size="submitIconSize"
                            :submit-image-icon-size="submitImageIconSize"
                            :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
                            :async-mode="asyncMode"
                            :scroll-bottom="scrollBottom"
                            :display-header="true"
                            :send-images="false"
                            :profile-picture-config="profilePictureConfig"
                            :timestamp-config="timestampConfig"
                            @onMessageSubmit="onMessageSubmit"
                            @onType="onType"
                            @onClose="onClose"
                        >
                            <template v-slot:header>
                                <div>
                                    <span class="text-body-2 white--text">{{ participants[0].name }}님 외 {{ participants.length }}명</span>
                                    <!-- <span v-for="(participant, index) in participants" :key="index" class="custom-title text-body-2 white--text">{{ participants.length }}</span> -->
                                </div>
                            </template>
                        </Chat>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    // import Home from "./pages/Home.vue";
    import { Chat } from "vue-quick-chat";
    import Boardlist from "./pages/BoardList.vue";
    import "vue-quick-chat/dist/vue-quick-chat.css";

    export default {
        name: "App",
        components: {
            // Home,
            Chat,
            Boardlist,
        },
        data() {
            return {
                visible: true,
                participants: [
                    {
                        name: "이재혁1",
                        id: 1,
                    },
                    {
                        name: "이재혁2",
                        id: 2,
                    },
                    {
                        name: "이재혁3",
                        id: 3,
                    },
                ],
                myself: {
                    name: "작성자",
                    id: 4,
                },
                messages: [
                    {
                        content: "와, www.enuri.com 링크 확인",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum. Vehicula ipsum a arcu cursus. Enim facilisis gravida neque convallis. Quis enim lobortis scelerisque fermentum. Massa sapien faucibus et molestie ac. Urna et pharetra pharetra massa massa. Sed velit dignissim sodales ut. Nec feugiat in fermentum posuere urna. Quam viverra orci sagittis eu. Cursus mattis molestie a iaculis at erat pellentesque. Nunc vel risus commodo viverra. In hac habitasse platea dictumst. Purus ut faucibus pulvinar elementum integer.",
                        participantId: 2,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                ],
                chatTitle: "채팅방",
                placeholder: "메시지 입력",
                colors: {
                    header: {
                        bg: "#666",
                        text: "#fff",
                    },
                    message: {
                        myself: {
                            bg: "#fff",
                            text: "#525252",
                        },
                        others: {
                            bg: "#8eb1ff",
                            text: "#fff",
                        },
                        messagesDisplay: {
                            //bg: 'rgb(247, 243, 243)',
                            //bg: '#f7f3f3'
                            bg: "#f7f3f3",
                        },
                    },
                    submitIcon: "#4e78d7",
                    submitImageIcon: "#b91010",
                },
                borderStyle: {
                    topLeft: "15px",
                    topRight: "15px",
                    bottomLeft: "15px",
                    bottomRight: "15px",
                },
                hideCloseButton: false,
                submitIconSize: 24,
                submitImageIconSize: 24,
                closeButtonIconSize: "20px",
                asyncMode: true,
                toLoad: [
                    {
                        content: "예전 채팅11",
                        participantId: 4,
                        timestamp: { year: 2022, month: 1, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                    },
                    {
                        content: "예전 채팅2",
                        participantId: 3,
                        timestamp: { year: 2022, month: 2, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                    },
                ],
                scrollBottom: {
                    messageSent: true,
                    messageReceived: false,
                },
                profilePictureConfig: {
                    others: false,
                    myself: false,
                    styles: {
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                    },
                },
                timestampConfig: {
                    format: "HH:mm",
                    relative: false,
                },
            };
        },
        methods: {
            onType: function (event) {
                console.log(event);
            },
            loadMoreMessages(resolve) {
                setTimeout(() => {
                    resolve(this.toLoad); //We end the loading state and add the messages
                    //Make sure the loaded messages are also added to our local messages copy or they will be lost
                    this.messages.unshift(...this.toLoad);
                    this.toLoad = [];
                }, 1000);
            },
            onMessageSubmit: function (message) {
                /*
                 * example simulating an upload callback.
                 * It's important to notice that even when your message wasn't send
                 * yet to the server you have to add the message into the array
                 */
                this.messages.push(message);

                /*
                 * you can update message state after the server response
                 */
                // timeout simulating the request
                setTimeout(() => {
                    message.uploaded = true;
                }, 2000);
            },
            onClose() {
                this.visible = false;
            },
        },
    };
</script>

<style></style>
