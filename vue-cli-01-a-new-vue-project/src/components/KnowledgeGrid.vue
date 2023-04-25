<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'], //provide and inject needs a parent child relation, cant do it with neighbour component

};
</script>