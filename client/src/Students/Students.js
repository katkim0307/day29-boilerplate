import React, { Component } from 'react';

export default class Students extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
        }
    };

    async componentDidMount() {
        const res = await fetch('/api/students');
        const data = await res.json();
        this.setState({
            students: data,
        });
    };

    render() {
        const { students } = this.state;
        if (students.length) {
            console.log(students);
            return <div>We got students</div>;
        }
        else {
            return <div>Loading students...</div>;
        }
    };
};