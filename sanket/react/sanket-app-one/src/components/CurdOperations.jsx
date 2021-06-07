import React, { Component } from "react";

class CurdOperations extends Component {
  state = {
    students: [
      { id: 1, name: "a", rollNo: 101 },
      { id: 2, name: "b", rollNo: 102 },
      { id: 3, name: "c", rollNo: 103 },
    ],

    id: "",
    name: "",
    rollNo: "",
  };

  handelAdd = () => {
    const students = [
      ...this.state.students,
      {
        id: (
          <input
            type="text"
            onChange={(e) => this.setState({ id: e.target.value })}
          />
        ),
        name: (
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        ),
        rollNo: (
          <input
            type="text"
            onChange={(e) => this.setState({ rollNo: e.target.value })}
          />
        ),
      },
    ];

    this.setState({ students });
  };

  handelSave = (student) => {
    const students = [...this.state.students];
    if (this.state.id === "") return;
    student.id = this.state.id;
    student.name = this.state.name;
    student.rollNo = this.state.rollNo;
    this.setState({ students });
    this.setState({ id: "", name: "", rollNo: "" });
  };

  handelEdit = (student) => {
    const students = [...this.state.students];
    student.id = (
      <input
        type="text"
        onChange={(e) => this.setState({ id: e.target.value })}
      />
    );
    student.name = (
      <input
        type="text"
        onChange={(e) => this.setState({ name: e.target.value })}
      />
    );
    student.rollNo = (
      <input
        type="text"
        onChange={(e) => this.setState({ rollNo: e.target.value })}
      />
    );

    this.setState({ students });
  };

  handelDelete = (id) => {
    const students = this.state.students.filter((student) => student.id !== id);
    this.setState({ students });
  };

  render() {
    return (
      <div className="container my-5">
        <table className="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>
                  <button
                    onClick={() => this.handelSave(student)}
                    className="btn btn-secondary"
                  >
                    save
                  </button>
                  <button
                    onClick={() => this.handelEdit(student)}
                    className="btn btn-secondary m-1"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => this.handelDelete(student.id)}
                    className="btn btn-secondary"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.handelAdd}>
          Add
        </button>
        <hr />
      </div>
    );
  }
}

export default CurdOperations;
