/*
Вам необхідно написати додаток Todo list, використовуючи синтаксис класів.
У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку,
а так само отримання списку всіх нотаток. 
Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те,
скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я,
а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

Вам необхідно додати кожній нотатці дату її створення і редагування, 
а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.
*/

class Todo {
    constructor(title) {
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    edit(newTitle) {
        this.title = newTitle;
        this.updatedAt = new Date();
    }

    toggleComplete() {
        this.completed = !this.completed;
        this.updatedAt = new Date();
    }

    getInfo() {
        return {
            title: this.title,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    add(title) {
        if (title.trim() === "") return;
        const todo = new Todo(title);
        this.todos.push(todo);
    }

    delete(index) {
        this.todos.splice(index, 1);
    }

    edit(index, newTitle) {
        if (newTitle.trim() === "") return;
        this.todos[index].edit(newTitle);
    }

    toggleComplete(index) {
        this.todos[index].toggleComplete();
    }

    get(index) {
        return this.todos[index].getInfo();
    }

    getAll() {
        return this.todos.map(todo => todo.getInfo());
    }

    getCounts() {
        const total = this.todos.length;
        const remaining = this.todos.filter(todo => !todo.completed).length;
        return { total, remaining };
    }

    searchByTitle(title) {
        return this.todos
            .filter(todo => todo.title.includes(title))
            .map(todo => todo.getInfo());
    }

    sortByStatus() {
        return this.todos
            .slice()
            .sort((a, b) => a.completed - b.completed)
            .map(todo => todo.getInfo());
    }

    sortByDate() {
        return this.todos
            .slice()
            .sort((a, b) => b.createdAt - a.createdAt)
            .map(todo => todo.getInfo());
    }
}


// Перевірка
const todoList = new TodoList();
todoList.add("First task");
todoList.add("Second task");

console.log(todoList.getAll());

todoList.edit(0, "Updated first task");
todoList.toggleComplete(1);

console.log(todoList.get(0));
console.log(todoList.get(1));

console.log(todoList.getCounts());

console.log(todoList.searchByTitle("task"));

console.log(todoList.sortByStatus());
console.log(todoList.sortByDate());
