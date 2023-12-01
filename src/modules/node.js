export default class node {
  constructor(start, edges) {
    this.value = start;
    this.edgesList = edges;
    this.path = [];
  }
}
