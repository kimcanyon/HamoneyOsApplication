export default {
    data: {
        title: 'demo',
        username:1

    },
    onInit(){
      this.title = "demo";
    },
    touch(){
        console.debug("点击了text文本一次")
        this.username = this.username+1
    },
    change(event){
        console.log("title="+this.title)
        this.title =event.value;
        console.log("value="+this.title)

    }
}