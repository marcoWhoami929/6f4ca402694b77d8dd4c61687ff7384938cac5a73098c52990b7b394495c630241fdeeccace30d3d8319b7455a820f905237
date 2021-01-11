<template>
  <v-dialog v-model="value" max-width="500px" persistent @keydown.esc="closeAction()">
    <v-card>
      <v-card-title class="headline">
        {{title}}
      </v-card-title>
      <v-card-text>
        {{text}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :color="closeColor" @click="closeAction" text :loading="this.loading">{{closeText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ["title", "text", "closeText", "value", "closeColor"],
    data(){
      return {
        loading: false,
      }
    },
    watch:{
      value: function(){
        this.resetState();
      }
    },
    methods: {
      resetState(){
        this.loading = false;
      },
      closeAction(){
        this.loading = true;
        this.$emit('closeAction')
      }
    }
  }
</script>
