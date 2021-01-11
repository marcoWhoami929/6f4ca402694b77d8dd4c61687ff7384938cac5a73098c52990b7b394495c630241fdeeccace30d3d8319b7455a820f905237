<template>
  <messageDialog
    :value="state.isOpen"
    :title="state.title"
    :text="state.text"
    :closeText="state.closeText"
    :closeColor="state.closeColor"
    v-on:closeAction="emmitClose"
  />
</template>

<script>
  export default {
    name: 'PromiseVuetifyMessageDialog',
    data(){
      return {
        state: {
          isOpen: false,
          title: "",
          text: "",
          closeText: "",
          closeColor: "",
          promiseResolver: undefined,
          promiseRejecter: undefined
        }
      }
    },
    methods: {
      commit: function(newState) {
        this.state = newState;
      },
      setTitle: function(title){
        this.state.title = title;
      },
      setText: function(text){
        this.state.text = text;
      },
      setCloseText: function(text){
        this.state.closeText = text;
      },
      setCloseColor: function(color){
        this.state.closeColor = color;
      },
      setPromiseHandler: function(promiseRejecter, promiseResolver){
        this.state.promiseRejecter = promiseRejecter;
        this.state.promiseResolver = promiseResolver;
      },
      show: function(){
        this.state.isOpen = true;
      },
      emmitClose: function(){
        if(this.state.promiseResolver){
          this.state.promiseResolver(true);
          this.state.isOpen = false;
        }
      }
    }
  }
</script>