import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';


class EmployeeEdit extends Component {
    // even though using redux, if just need state within a component rather
    // than throughout app, can use component level state
    state = { showModal: false }

    componentWillMount(){
        Object.keys(this.props.employee).forEach(prop => {
            this.props.employeeUpdate({ prop, value: this.props.employee[prop]})
        })
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your next shift is on ${shift}`);
    }

    onAccept(){
        const {uid} = this.props.employee;

        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({ showModal: false });
    }

    render(){
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPressProp={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPressProp={this.onTextPress.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPressProp={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                {/* this will not show up unless visible set, so can put anywhere in the Card */}
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire an employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);