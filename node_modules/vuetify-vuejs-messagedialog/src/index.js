import VuetifyMessageDialog from './component/VuetifyMessageDialog';
import PromiseVuetifyMessageDialog from './component/PromiseVuetifyMessageDialog';
import {mergeObjs} from './utilities'


let Plugin = function(Vue, globalOptions = {}){
	this.Vue = Vue;
	this.mounted = false;
	this.$root = {};
}

Plugin.prototype.mountIfNotMounted = function(){
	if(this.mounted === true){
		return
	}

	this.$root = (() => {
		let DialogConstructor = this.Vue.extend(PromiseVuetifyMessageDialog);
		let node = document.createElement("div");
		document.querySelector('body').appendChild(node);
		return (new DialogConstructor()).$mount(node)
    })();
    
	this.mounted = true
}

Plugin.prototype.destroy = function(){
	if(this.mounted === true){
        let elem = this.$root.$el
        this.$root.$destroy()
        this.$root.$off()
        elem.remove()
        this.mounted = false
	}
}

Plugin.prototype.setTitle = function(title) {
	this.mountIfNotMounted();
	this.$root.setTitle(title);
	return Vue.vuetifyMessageDialog;
}

Plugin.prototype.setText = function(text) {
	this.mountIfNotMounted();
	this.$root.setText(text);
	return Vue.vuetifyMessageDialog;
}

Plugin.prototype.setCloseText = function(text) {
	this.mountIfNotMounted();
	this.$root.setCloseText(text);
	return Vue.vuetifyMessageDialog;
}

Plugin.prototype.setCloseColor = function(color) {
	this.mountIfNotMounted();
	this.$root.setCloseColor(color);
	return Vue.vuetifyMessageDialog;
}

Plugin.prototype.show = function() {
	this.mountIfNotMounted();
	return new Promise((resolve, reject) => {
		this.$root.setPromiseHandler(reject, resolve);
		this.$root.show();
	});
}

Plugin.prototype.open = function(title, text, closeText, closeColor) {
    this.mountIfNotMounted();
    return new Promise((resolve, reject) => {
        let localOptions = {};
        localOptions.title = title;
        localOptions.text = text;
        localOptions.closeText = closeText;
        localOptions.closeColor = closeColor;

        localOptions.promiseResolver = resolve;
        localOptions.promiseRejecter = reject;

        localOptions.isOpen = true;
        this.$root.commit(mergeObjs(this.globalOptions, localOptions));
	})
}

Plugin.install = function (Vue, options) {
    Vue.component('messageDialog', VuetifyMessageDialog);
    Vue.vuetifyMessageDialog = new Plugin(Vue, options);

    Object.defineProperties(Vue.prototype, {
		$vuetifyMessageDialog: {
			get () {
				return Vue.vuetifyMessageDialog
			}
		}
	});
}

export default Plugin
export { VuetifyMessageDialog };