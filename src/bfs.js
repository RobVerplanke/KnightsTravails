const queue = function queue() {
  this.items = [];
};

queue.prototype.enqueue = function enqueue(vertex) {
  this.items.push(vertex);
};

queue.prototype.dequeue = function dequeue() {
  return this.items.shift();
};

queue.prototype.isEmpty = function isEmpty() {
  return this.items.length === 0;
};

export default function bfs(graph, source) {
  const bfsInfo = new Map();

  for (let i = 0; i < graph.size / 8; i++) {
    for (let j = 0; j < graph.size / 8; j++) {
      const key = JSON.stringify([i, j]);
      bfsInfo.set([key], JSON.stringify([i, j]));
      console.log('key: ', key);
    }
  }

}
