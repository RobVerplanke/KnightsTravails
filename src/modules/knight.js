class Knight {
  constructor(edges, coord = null) {
    this.coord = coord;
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
