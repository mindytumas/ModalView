var app = new Vue({ 
  el: "#app",
  data: {
      inputs: [
      {
      name: ''
      }
  ]
},
methods: {
add(index) {
  this.inputs.push({ name: '' });
},
remove(index) {
  this.inputs.splice(index, 1);
}
}
  });