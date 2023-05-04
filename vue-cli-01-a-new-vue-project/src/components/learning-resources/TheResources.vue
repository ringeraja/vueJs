<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default{
    components: {
        StoredResource,
        AddResource,
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab === 'stored-resource' ? null : 'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    data(){
        return{
            selectedTab: 'stored-resource',
            storedResources:[
              { id: 'official-guide',
              title:'Official  VueJsGuide',
              description:'The official vue js documentatiion',
              link: 'https://vuejs.org'
              },
              { id: 'google',
              title:'Google',
              description:'Learn on google',
              link: 'https://google.org'
              },
              { id: 'example',
              title:'Example 3',
              description:'Example texttext text text ',
              link: 'https://text.org'
              },
            ],
        };
    },
    provide(){ 
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        };
    },
    methods: {
        removeResource(resId){
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        },
        setSelectedTab(tab){
            this.selectedTab= tab;
        },
        addResource(title,description,url){
        const newResource = {
            id: new Date().toISOString(),
            title: title,
            description: description, 
            link:url
        };
        this.storedResources.unshift(newResource);
        this.selectedTab = 'stored-resource';
        },
    },
};
</script>
