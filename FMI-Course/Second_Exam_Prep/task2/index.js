
// ## Условие:
// Създайте функция `createTodoList()`, която връща обект с методи за управление на списък със задачи (to-do list).  
// Списъкът се пази във вътрешния scope на функцията и не е достъпен директно отвън.

// ### Върнатият обект трябва да има следните методи:
// - **`add(task)`** — добавя нова задача (низ). Ако `task` не е string или е празен, не прави нищо. Връща общия брой задачи.  
// - **`remove(index)`** — изтрива задачата по подаден индекс (0-базиран). Ако индексът е невалиден, връща `"Invalid index"`.  
// - **`list()`** — връща копие на текущия списък със задачи (масив от низове).  
// - **`clear()`** — изтрива всички задачи и връща празен масив.  
// - **`count()`** — връща броя на текущите задачи.  
// - **`find(keyword)`** — връща всички задачи, съдържащи дадена дума (case-insensitive).

function createTodoList() {

    let tasks = [];

    const add = function(task) {
        if( typeof(task) !== "string" || task === "") {
            return;
        }
        tasks.push(task);
        return tasks.length;
    }

    const remove = function(index) {
        if(typeof(index) != "number" || index < 0 || index > tasks.length) {
            return "Invalid index.";
        }
        
        tasks = [
            ...tasks.slice(0,index),
            ...tasks.slice(index+1, tasks.length)
        ]
        return;
    }

    const list = function() {
        return [...tasks];
    }

    const clear = function() {
        tasks = [];
        return tasks;
    }

    const find = function(keyword) {
        return tasks.filter(word => {
            return word.toLowerCase().includes(keyword.toLowerCase());
        });
    }
    
    const count = function() {
        return list.length;
    }


    return {
        add,
        remove,
        clear,
        list,
        find,
        count
    };
}


const toDoList = createTodoList();

console.log(toDoList.add("task1"));
console.log(toDoList.add("task2"));
console.log(toDoList.add("task3"));
console.log(toDoList.list());
console.log(toDoList.count());
console.log(toDoList.remove(2));
console.log(toDoList.list());