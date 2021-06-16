import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CrudOperations extends Component {
    constructor() {
        super();

        this.state = {
            items: [
                {id: 1, name: 'Ash', age: 21, gender: 'Male', editOption: false,},
                {id: 2, name: 'Becky', age: 22, gender: 'FeMale', editOption: false,},
            ],
            name: '',
            age: 0,
            gender: '',
            addData: false
        }
        this.handleEditListData = this.handleEditListData.bind(this);
        this.handleSaveListData = this.handleSaveListData.bind(this);
        this.handleDeleteListData = this.handleDeleteListData.bind(this);
        this.handleAddListData = this.handleAddListData.bind(this);
        this.handleSaveAddListData = this.handleSaveAddListData.bind(this);
    }

    handleSaveAddListData() {
        const newListData = {
            id: this.state.items.length + 1,
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        this.setState({
            ...this.state,
            items: [...this.state.items, newListData],
            addData: false,
            name: '',
            age: 0,
            gender: ''
        });
    }

    handleAddListData() {
        this.setState({
            addData: true
        });
    }

    handleEditListData(item) {
        const listData = [...this.state.items];
        const index = listData.indexOf(item);
        listData[index].editOption = true;
        this.setState({
            ...this.state,
            items: listData,
            name: item.name,
            age: item.age,
            gender: item.gender
        })
        // alert(item.id);
    }

    handleSaveListData(item) {
        const listData = [...this.state.items];
        const index = listData.indexOf(item);
        listData[index].editOption = false;
        listData[index].name = this.state.name;
        listData[index].age = this.state.age;
        listData[index].gender = this.state.gender;
        this.setState({
            ...this.state,
            items: listData,
            name: '',
            age: 0,
            gender: ''
        })
    }

    handleDeleteListData (item) {
        const listData = [...this.state.items]
        const index = listData.indexOf(item);
        listData.splice(index, 1);
        this.setState({
            ...this.state,
            items: listData
        });
    }

    render() {
        const { items, name, age, gender, addData } = this.state;
        return (
            <div>
                <h1>CRUD Operations</h1>
                <ol>
                {
                    items.map((item) => (
                        <li key={item.id}>
                            Name: { item.editOption ? (<input type="text" placeholder="Enter a Name" value={name} onChange={(e) => this.setState({...this.state, name: e.target.value})} />) : (<strong>{item.name}</strong>)}  {" "}
                            Age: { item.editOption ? (<input type="text" placeholder="Enter a Age" value={age} onChange={(e) => this.setState({...this.state, age: e.target.value})} />) : (<strong>{item.age}</strong>)}  {" "}
                            Gender: { item.editOption ? (<input type="text" placeholder="Enter a Gender" value={gender} onChange={(e) => this.setState({...this.state, gender: e.target.value})} />) : (<strong>{item.gender}</strong>)} {" "}
                            <Button type="button" variant="warning" onClick={() => this.handleEditListData(item)}>Edit</Button>
                            <Button type="button" variant="success" onClick={() => this.handleSaveListData(item)}>Save</Button>
                            <Button type="button" variant="danger" onClick={() => this.handleDeleteListData(item)}>Delete</Button>
                        </li>
                    ))
                }
                </ol>
                { addData ?  
                    (<div>
                        <input type="text" placeholder="Enter a Name" value={name} onChange={(e) => this.setState({...this.state, name: e.target.value})} /> <br/>
                        <input type="text" placeholder="Enter a Age" value={age} onChange={(e) => this.setState({...this.state, age: e.target.value})} /> <br/>
                        <input type="text" placeholder="Enter a Gender" value={gender} onChange={(e) => this.setState({...this.state, gender: e.target.value})} /> <br/>
                        <Button type="button" variant="success" onClick={() => this.handleSaveAddListData()}>Save</Button>
                    </div>) 
                    : '' 
                }
                <Button type="button" variant="primary" onClick={() => this.handleAddListData()}>Add</Button>
            </div>
        )
    }
}
