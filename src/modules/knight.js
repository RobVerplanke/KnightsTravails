class Knight {
  constructor(edges) {
    this.edgesList = edges;
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
