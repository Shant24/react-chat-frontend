type FieldName = 'email' | 'username' | 'password' | 'confirmPassword';
type FieldObj = { [name: string]: string | boolean };

const validateFieldStatus = (values: FieldObj, errors: FieldObj, touched: FieldObj, fieldName: FieldName) => {
  return touched[fieldName] || values[fieldName] ? (errors[fieldName] ? 'error' : 'success') : '';
};

export default validateFieldStatus;
