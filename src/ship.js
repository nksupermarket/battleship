const Ship = (name, length) => {
  return {
    name,
    length,
    sunk: false,
    coords: [],
    whereHit: [],
    hit(pos) {
      this.whereHit.push(pos);
    },
    isSunk() {
      this.sunk = isEqual(this.whereHit, this.coords);
      return this.sunk;

      function isEqual(arrOne, arrTwo) {
        if (arrOne.length !== arrTwo.length) return false;
        return arrOne.every(
          (val, index) =>
            val[0] === arrTwo[index][0] && val[1] === arrTwo[index][1]
        );
      }
    },
  };
};

export default Ship;
