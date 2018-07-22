import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                {/* wrap the login in a parent scene so it is separated
                from our other pages so no back button from main pages to
                login */}
                <Scene key="auth" initial>
                    <Scene key="login"
                        component={LoginForm}
                        title="Please Login" 
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate()}}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;