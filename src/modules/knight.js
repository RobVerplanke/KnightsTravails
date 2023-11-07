class Knight {
  constructor(edges, coord = null) {
    this.coord = coord;
    this.edgesList = edges;
    this.visitedNodes = [];
  }
}

export default function createNewKnight(edges) {
  return new Knight(edges);
}
