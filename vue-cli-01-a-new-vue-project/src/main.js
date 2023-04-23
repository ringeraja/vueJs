import { createApp } from 'vue';

import AnyIndentifierApp from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(AnyIndentifierApp);


app.component('friend-contact',FriendContact);//
app.component('new-friend',NewFriend);

app.mount('#app');
