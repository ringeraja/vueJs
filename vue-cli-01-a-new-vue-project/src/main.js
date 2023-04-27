import { createApp } from 'vue';

import AnyIndentifierApp from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

//import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/BaseCard.vue';


const app = createApp(AnyIndentifierApp);


app.component('friend-contact',FriendContact);//
app.component('new-friend',NewFriend);
app.component('active-user',ActiveUser);
app.component('user-data',UserData);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

//app.component('the-header', TheHeader); // we are registering as global component and we can use them anywhere in app
app.component('base-badge', BaseBadge);
//app.component('badge-list', BadgeList);
//app.component('user-info', UserInfo);
app.component('base-card', BaseCard);


app.mount('#app');



// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component