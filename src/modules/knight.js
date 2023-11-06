class Knight {
  constructor(edges, coord) {
    this.edgesList = edges;
    this.coord = coord;
  }

  connect(node) {
    this.edgesList.push(node);
  }

  getCurrentNode() {
    return this.currentNode;
  }
}

export default function createNewKnight(edges, coord) {
  return new Knight(edges, coord);
}
