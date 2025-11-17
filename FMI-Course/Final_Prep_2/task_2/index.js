
function createTodoList() {

    let tasks = [];


    const add = (task) => {

        if(typeof(task) !== "string" || task === "") {
            return;
        }

        tasks.push(task);
        return tasks.length;
    }

    const remove = (index) => {
        if (index < 0 || index >= tasks.length) {
            return "Invalid index";
        }
        
        tasks = [...tasks.slice(0,index), ...tasks.slice(index + 1)];
        return tasks.length;
    }

    const list = () => {
       return [...tasks];
    }

    const clear = () => {
         tasks = [];
         return tasks;
    }

    const count = () => {
        return tasks.length;
    }

    const find = (keyword) => {
       let res = [];
       for(let task in tasks){
        if (tasks[task].toLowerCase().includes(keyword.toLowerCase())) {
            res.push(tasks[task]);
        }
       }
       return res;
    }


    return {
        add,
        remove,
        list,
        clear,
        count,
        find
    };
}

const todos = createTodoList();

console.log(todos.add("Buy milk"));        // 1
console.log(todos.add("Walk the dog"));    // 2
console.log(todos.add("Read a book"));     // 3
console.log(todos.list());                 // ["Buy milk", "Walk the dog", "Read a book"]

console.log(todos.find("dog"));            // ["Walk the dog"]
console.log(todos.remove(1));              // премахва "Walk the dog"
console.log(todos.list());                 // ["Buy milk", "Read a book"]

console.log(todos.count());                // 2
console.log(todos.clear());                // []
console.log(todos.count());                // 0

console.log(todos.remove(5));              // "Invalid index"
console.log(todos.add(""));                // не добавя нищо, броят остава 0
