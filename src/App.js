import { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동11",
    birthday: "961211",
    gender: "남성",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동12",
    birthday: "961212",
    gender: "남성",
    job: "포토그래퍼",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "홍길동13",
    birthday: "961213",
    gender: "여성",
    job: "디자이너",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
