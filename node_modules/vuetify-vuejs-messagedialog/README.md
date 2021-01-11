# vuetify-vuejs-messagedialog

[![npm version](https://badge.fury.io/js/vuetify-vuejs-messagedialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-messagedialog)

Vuetify VueJS message dialog Component with Promise support

## Installation

```sh
npm install vuetify-vuejs-messagedialog --save
```

## Quick Promise Usage

```javascript
this.$vuetifyMessageDialog.open("Example Title", "Example Content", "OK", "green").then(state => {
  console.log(state);
});
```

## Detailed Promise Usage

Enable the plugin in your Project

```javascript
<script>
  import Vue from 'vue';
  import messageDialog from 'vuetify-vuejs-messagedialog';
  Vue.use(messageDialog);

  // …
</script>
```

Use the plugin in any Vue file :

```vue
<template>
…
</template>

<script>
export default{
  name: "…",
  // …
  methods: {
    sample: function(){
      this.$vuetifyMessageDialog.open("Example Title", "Example Content", "OK", "green").then(state => {
        console.log(state);
      });
    }
  }
}
</script>

```

## Component Usage

```vue
<template>
  <messageDialog
    v-model="showConfirm"
    title="Oh Snap !"
    text="Sorry but, an error as occured…"
    closeText="Close"
    closeColor="red"
    v-on:closeAction="() => this.showConfirm = false"
  />
</template>

<script>
  import Vue from 'vue';
  import messageDialog from 'vuetify-vuejs-messagedialog';
  Vue.use(messageDialog);

  export default {
    name: 'example',
    data(){
      return {
        "showConfirm": true
      }
    }
  }
</script>
```
