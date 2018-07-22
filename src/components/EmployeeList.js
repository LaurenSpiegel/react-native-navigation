import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    // lifecycle method that is called with the incoming props
    // (using nextProps as the name is just convention)
    componentWillReceiveProps(nextProps){
        // this.props is still the old props within this method
        this.createDataSource(nextProps);

    }

    createDataSource(someProps){
        const { employees } = someProps;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return (
            <ListItem
                employee={employee}
            />
        )
    }

    render(){
        console.log("this.props in list!!", this.props)
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    const employees = Object.keys(state.employees).map( uid => {
        return {
            ...state.employees[uid],
            uid, 
        }
    })
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);