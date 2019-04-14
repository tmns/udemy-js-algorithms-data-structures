// An exercises demonstrating a simple hash table implementation
// using separate chaining for collisions 

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        
        return total;
    }
    
    set(key, value) {
        const index  = this._hash(key);
        
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);

        return this.keyMap;
    }

    get(key) {
        const index = this._hash(key);

        if (!this.keyMap[index]) {
            return undefined;
        }

        for (let i = 0; i < this.keyMap[index].length; i++) {
            // check the first element of each subarray, ie the key
            if (this.keyMap[index][i][0] === key) {
                // if a match, return the second element of the subarray, ie the value
                return this.keyMap[index][i][1];
            }
        }
    }

    values() {
        let valuesArray = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray;
    }

    keys() {
        let keysArray = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArray;
    }
}

const hashTable = new HashTable();

console.log(hashTable.set('movie', 'snowpiercer'))
console.log(hashTable.set('book', 'reconstruction'))
console.log(hashTable.set('artist', 'escher'))
console.log(hashTable.set('song', 'clementine'))
console.log(hashTable.set('musician', 'mclaughlin'))

console.log(hashTable);

console.log(hashTable.get('notinthere')); // undefined
console.log(hashTable.get('song')); // clementine

console.log(hashTable.values());
console.log(hashTable.keys());
