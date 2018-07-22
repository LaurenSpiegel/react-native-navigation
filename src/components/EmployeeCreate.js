import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPressProp={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    // it's called employeeForm because that is what we named this
    // piece of state in our combineReduers call
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };

}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);