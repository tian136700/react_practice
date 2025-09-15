import { useEffect, useState } from "react";
import "./styles.css";

const persons = [
    { name: "marco", gender: "male" },
    { name: "ori", gender: "female" },
    { name: "doma", gender: "male" },
];

const Person = (props) => {
    const { name, gender, clickPerson } = props;
    return (
        <div
            style={{ color: gender === "male" ? "#f38" : "#38f" }}
            onClick={() => clickPerson()}
        >
            name: {name}
        </div>
    );
};

const BestPerson = (props) => {
    return <div>{props.name}</div>;
};

export default function App() {
    // state
    const [bestPerson, setBestPerson] = useState({ name: "" });

    // effect
    useEffect(() => {
        // 请求
        // 定时操作
        // 提醒用户弹窗
        alert(bestPerson.name + "获得了冠军");
    }, [bestPerson]);

    // UI
    return (
        <div className="App">
            {persons.map((person) => (
                <Person
                    name={person.name}
                    gender={person.gender}
                    clickPerson={() => setBestPerson({ ...person })}
                />
            ))}

            <div>best: {bestPerson.name}</div>
        </div>
    );
}