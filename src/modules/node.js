export default class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
    this.visited = false;
  }
}
