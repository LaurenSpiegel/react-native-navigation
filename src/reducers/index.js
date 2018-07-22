import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    // means the auth piece of state is produced by the AuthProducer
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,
});