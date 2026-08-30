# ES6 Data Manipulation

Project on manipulating data with ES6: `map`, `filter`, `reduce`, typed arrays,
and the `Set`, `Map`, and `WeakMap` data structures.

## Requirements

- Interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
- All files end with a new line
- Code uses the `.js` extension
- Tested with Jest (`npm run test`)
- Verified against lint with ESLint
- Full verification: `npm run full-test`
- All functions must be exported

## Tasks

| File | Description |
| ---- | ----------- |
| `0-get_list_students.js` | `getListStudents` returns an array of student objects |
| `1-get_list_student_ids.js` | `getListStudentIds` maps a list of students to their ids |
| `2-get_students_by_loc.js` | `getStudentsByLocation` filters students by city |
| `3-get_ids_sum.js` | `getStudentIdsSum` reduces students to the sum of their ids |
| `4-update_grade_by_city.js` | `updateStudentGradeByCity` filters by city and maps in new grades |
| `5-typed_arrays.js` | `createInt8TypedArray` sets an Int8 value in a DataView |
| `6-set.js` | `setFromArray` builds a Set from an array |
| `7-has_array_values.js` | `hasValuesFromArray` checks every array value is in the set |
| `8-clean_set.js` | `cleanSet` joins set values matching a prefix, minus the prefix |
| `9-groceries_list.js` | `groceriesList` returns a Map of groceries |
| `10-update_uniq_items.js` | `updateUniqueItems` sets quantity 1 entries to 100 |
