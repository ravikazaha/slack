class Room {
  constructor(roomId, roomTitle, privateRoom = false, namespaceId) {
    (this.roomId = roomId),
      (this.roomTitle = roomTitle),
      (this.privateRoom = privateRoom),
      (this.namespaceId = namespaceId);
    this.histories = [];
  }

  addMassage(message) {
    this.histories.push(message);
  }

  clearHistory() {
    this.histories.length = 0;
  }
}

module.exports = Room;
