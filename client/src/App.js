import { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/styles";
//import { response } from "express";

/*
const styles = {
  root: {
    width: "100%",

    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
};
*/
const styles = (theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

/*
const customers_2 = [
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
*/

class App extends Component {
  // customers 서버로부터 전달 받는 비동기 데이터

  state = {
    customers: "",
  };

  // react 라이브러리는 생명 주기가 있음
  // 실제 데이터가 서버로부터 오면 실행되는 부분

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    console.log(response);
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생면월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
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
                })
              : "Not Success"}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  /*
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생면월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers_2
              ? customers_2.map((c) => {
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
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  */
}

export default withStyles(styles)(App);
