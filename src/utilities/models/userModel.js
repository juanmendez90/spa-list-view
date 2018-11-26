import Proptypes from 'prop-types';

export default Proptypes.shape({
  UserKey: Proptypes.string,
  ImageURL: Proptypes.string,
  FirstName: Proptypes.string,
  LastName: Proptypes.string,
  JobTitleId: Proptypes.number,
  DepartmentId: Proptypes.number,
  UsedDays: Proptypes.number,
  AvailableDays: Proptypes.number,
  EmployeeStartDate: Proptypes.string,
});
