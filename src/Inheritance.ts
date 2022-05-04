interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    constructor(starter: IPersonData){
        this._age = starter.age;
        this._name = starter.name;
        this._secondName = starter.secondName;
    }
    getData(): IPersonData{
        return {name: this._name, age: this._age, secondName: this._secondName}
    }
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    constructor(starter: IStudentData){
        super(starter);
        this._phone = starter.phone;
    }
    readonly _phone: string;
    getData(): IStudentData {
        return {name: this._name, secondName: this._secondName, age: this._age, phone: this._phone}
    }
}
