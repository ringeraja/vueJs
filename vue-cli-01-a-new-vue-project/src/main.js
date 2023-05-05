import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

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
import BaseWrap from './components/baseUI/BaseWrap';
import BaseButton from './components/baseUI/BaseButton';
import BaseDialog from './components/baseUI/BaseDialog';

import TheForm from './components/TheForm.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';



const app = createApp(AnyIndentifierApp);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams',meta: {needsAuth:true}}, //URL changes
        { path: '/teams', components: { default: TeamsList,footer: TeamsFooter}, name: 'teams', children: [
            { path: ':teamId', component: TeamMembers,name: 'team-members', props: true}, //teams/t1
        ]}, //,alias:'/'with alias URL doesn't change
        { path: '/users', 
          components:{default: UsersList,footer: UsersFooter},
          beforeEnter(to, from, next){
            console.log('users beforeEnter');
            console.log(to,from);
            next();
          }
        },
       
        { path: '/:notFound(.*)', component: NotFound}, 
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition){
        console.log(to, from, savedPosition);
        if(savedPosition) {
            return savedPosition;
        }
        return {
             left: 0, top:0
        };
    }
});

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
app.component('base-wrap', BaseWrap);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.component('the-form', TheForm);

router.beforeEach(function(to,from,next){
    console.log('global beforeEach');
    console.log(to,from);
    if(to.meta.needsAuth){
        console.log('Needs auth!');
        next();
    }else{
        next();
    }
    next();
    //next();
    // next(false); cancel 
    // next('/someroute');
    // if(to.name === 'team-members'){
    //     next();
    // }else{
    // next({ name: 'team-members', params:{ teamId: 't2'}});
    // } useful for authentication
});

router.afterEach(function(to,from){ //sending analytics, loging changing pages
    console.log('global router.afterEach');
    console.log(to,from);
});

app.use(router);

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