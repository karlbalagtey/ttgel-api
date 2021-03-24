const roles = ['user', 'admin', 'superadmin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getProgrammes', 'getModules', 'getCourses']);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'manageCourses', 'manageModules', 'manageProgrammes']);
roleRights.set(roles[2], ['getAdmins', 'manageAdmins']);

module.exports = {
  roles,
  roleRights,
};
