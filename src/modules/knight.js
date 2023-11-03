class Knight {
  constructor(edges) {
    this.edgesList = edges;
  }

  connect(node) {
    this.edgesList.push(node);
  }
}

export default function createNewKnight(edges) {
  return new Knight(edges);
}
