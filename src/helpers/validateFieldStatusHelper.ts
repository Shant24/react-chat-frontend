type FieldName = 'email' | 'username' | 'password' | 'confirmPassword';
type FieldObj = { [name: string]: string | boolean | undefined };

export const validateFieldStatusHelper = (
  values: FieldObj,
  errors: FieldObj,
  touched: FieldObj,
  fieldName: FieldName,
) => {
  return touched[fieldName] || values[fieldName] ? (errors[fieldName] ? 'error' : 'success') : '';
};
