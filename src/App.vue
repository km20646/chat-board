<template>
    <div id="app">
        <!-- <Home></Home> -->
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
            :link-options="linkOptions"
            :async-mode="asyncMode"
            :scroll-bottom="scrollBottom"
            :display-header="true"
            :send-images="true"
            :profile-picture-config="profilePictureConfig"
            :timestamp-config="timestampConfig"
            @onImageClicked="onImageClicked"
            @onImageSelected="onImageSelected"
            @onMessageSubmit="onMessageSubmit"
            @onType="onType"
            @onClose="onClose"
        >
            <template v-slot:header>
                <div>
                    <p v-for="(participant, index) in participants" :key="index" class="custom-title">{{ participant.name }}</p>
                </div>
            </template>
        </Chat>
    </div>
</template>

<script>
    // import Home from "./pages/Home.vue";
    import { Chat } from "vue-quick-chat";
    import "vue-quick-chat/dist/vue-quick-chat.css";
    export default {
        name: "App",
        components: {
            // Home,
            Chat,
        },
        data() {
            return {
                visible: true,
                participants: [
                    {
                        name: "Arnaldo",
                        id: 1,
                        profilePicture: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg",
                    },
                    {
                        name: "Adam",
                        id: 2,
                        profilePicture: "https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg",
                    },
                ],
                myself: {
                    name: "John Doe",
                    id: 3,
                    profilePicture: "https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg",
                },
                messages: [
                    {
                        content: "Really?! I don't care! Haha",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content: "Really?! I don't care! Haha",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content: "Really?! I don't care! Haha",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content: "Hey, Jhon Doe! How are you today",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content: "Hey, Adam! I'm felling really fine this evening.",
                        participantId: 3,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                    {
                        content: "Really?! I don't care! Haha",
                        participantId: 1,
                        timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                        type: "text",
                    },
                ],
                chatTitle: "My chat title",
                placeholder: "send your message",
                colors: {
                    header: {
                        bg: "#d30303",
                        text: "#fff",
                    },
                    message: {
                        myself: {
                            bg: "#fff",
                            text: "#525252",
                        },
                        others: {
                            bg: "#fb4141",
                            text: "#fff",
                        },
                        messagesDisplay: {
                            //bg: 'rgb(247, 243, 243)',
                            //bg: '#f7f3f3'
                            bg: "#f7f3f3",
                        },
                    },
                    submitIcon: "#b91010",
                    submitImageIcon: "#b91010",
                },
                borderStyle: {
                    topLeft: "10px",
                    topRight: "10px",
                    bottomLeft: "10px",
                    bottomRight: "10px",
                },
                hideCloseButton: false,
                submitIconSize: 24,
                submitImageIconSize: 24,
                closeButtonIconSize: "20px",
                asyncMode: true,
                toLoad: [
                    {
                        content: "Hey, John Doe! How are you today?",
                        participantId: 2,
                        timestamp: { year: 2016, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                    },
                    {
                        content: "Hey, Adam! I'm feeling really fine this evening.",
                        participantId: 3,
                        timestamp: { year: 2016, month: 1, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123 },
                        uploaded: true,
                        viewed: true,
                    },
                ],
                scrollBottom: {
                    messageSent: true,
                    messageReceived: false,
                },
                profilePictureConfig: {
                    others: true,
                    myself: true,
                    styles: {
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                    },
                },
            };
        },
    };
</script>

<style></style>
