import './App.css';
import {useEffect, useState} from "react";

// 三个人的基本信息数据
const persons = [
    {
        id: 1,
        name: 'Mike',
        age: 20,
        skill: 'React',
    },
    {
        id: 2,
        name: 'Jane',
        age: 21,
        skill: 'Angular',
    },
    {
        id: 3,
        name: 'tom',
        age: 22,
        skill: 'Vue',
    },
];

// 人员卡片组件 - 显示一个人的信息
const Person = (props) => {
    const {name, age, skill, clickPerson} = props;//解构，方便下面的代码使用

    return (
        // 点击卡片时触发选择事件，年龄大于21岁显示红色，否则显示蓝色
        <div onClick={() => clickPerson()} style={{color: age > 21 ? "#f38" : "#38f"}}>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Skill: {skill}</p>
        </div>
    )
}

// 最佳人员显示组件（目前未使用）
const BestPerson = (props) => {
    return <div>{props.name}</div>
}

// 主应用
function App() {
    // 记录当前选中的最佳人员
    const [bestPerson, setBestPerson] = useState({name: ""});

    // 当最佳人员改变时，弹出提示框
    useEffect(() => {
        alert(bestPerson.name + "获得了冠军");
    }, [bestPerson]);

    return (
        <div className="App">
            {/* 显示所有人员卡片 */}
            {persons.map((person) => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    skill={person.skill}
                    clickPerson={() => setBestPerson({...person})}  // 点击时选择这个人
                />
            ))}

            {/* 显示当前选中的最佳人员 */}
            <div>best: {bestPerson.name}</div>
        </div>
    );
}

export default App;
