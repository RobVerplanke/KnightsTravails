class Knight {
  constructor(edges) {
    this.edgesList = edges;
    this.parentNode = [];
    this.currentNode = [];
    this.endNode = [];
  }

  connect(node) {
    this.edgesList.push(node);
  }

  getCurrentNode() {
    return this.currentNode;
  }

}

export default function createNewKnight(edges) {
  return new Knight(edges);
}
