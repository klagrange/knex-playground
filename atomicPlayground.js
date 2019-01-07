const {
  findUserAll,
  findUserFromOrg,
  roleIsPartOfOrg,
  insertUser,
  deleteUser,
  userExists,
  findUserById,
  findRoles,
  addRole,
  findRolesFromOrg,
  findRoleById,
  addPermissionToRole,
  findPermissionById,
  permissionIsAssignedToRole,
  roleIsFromOrg,
  orgExistsByName
} = require('./atomicQueries');


const {
  validateRolePayload,
  validateRoleAndPermissionExistence
} = require('./atomicValidators');

// wire knex to objection
require('./startup/db');

// findUserById(1)
//   .then(console.log)
//   .catch(console.log)

// findRoles()
//   .then(console.log)
//   .catch(console.log)

// const role = {
//   name: 'super sayan',
//   description: 'I am responsible for nothing',
//   organization_ida: 1
// }

// addRole(role)
//   .then(console.log)
//   .catch(console.log)

// findRolesFromOrg(1)
//   .then(console.log)
//   .catch(console.log)

// validateRolePayload(role)
//   .then(console.log)
//   .catch(console.log)

// findRoleById(1)
//   .then(console.log)
//   .catch(console.log)
//
// findPermissionById(2)
//   .then(console.log)
//   .catch(console.log)

// addPermissionToRole(1, 2)
//   .then(console.log)
//   .catch(e => {
//     console.log('xxxxxxxxxxxxxxxx')
//     console.log(e)
//   })

// validateRoleAndPermissionExistence(1, 2)
//   .then(console.log)
//   .catch(console.log)

// permissionIsAssignedToRole(1, 23333)
//   .then(console.log)
//   .catch(console.log)

// roleIsFromOrg(1, 1)
//   .then(console.log)
//   .catch(console.log)

orgExistsByName(name='Terrell Ltd')
  .then(console.log)
  .catch(console.log)