import Proptypes from 'prop-types';

export default Proptypes.shape({
  UserKey: Proptypes.number.isRequired,
  ImageURL: Proptypes.string,
  FirstName: Proptypes.string,
  LastName: Proptypes.string,
  JobTitleId: Proptypes.number,
  DepartmentId: Proptypes.number,
  UsedDays: Proptypes.number,
  AvailableDays: Proptypes.number,
  EmployeeStartDate: Proptypes.string,
});
