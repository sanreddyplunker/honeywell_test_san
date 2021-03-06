import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", age: "", salary: "" };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeSalary = this.handleChangeSalary.bind(this);
    this.getEmployees = this.getEmployees.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeAge(event) {
    this.setState({ age: event.target.value });
  }
  handleChangeSalary(event) {
    this.setState({ salary: event.target.value });
  }

  handleSubmit(event) {
    let data = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age,
    };
    fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST", // or 'PUT'
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    event.preventDefault();
  }

  getEmployees(event) {
    fetch("https://dummy.restapiexample.com/api/v1/employees", {
      method: "get",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <div>
              Salary:{" "}
              <input
                type="text"
                value={this.state.salary}
                onChange={this.handleChangeSalary}
              ></input>{" "}
            </div>
            <div>
              age:{" "}
              <input
                type="text"
                value={this.state.age}
                onChange={this.handleChangeAge}
              ></input>{" "}
            </div>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <input
          type="button"
          value="Get Employees"
          onClick={this.getEmployees}
        />
      </>
    );
  }
}
