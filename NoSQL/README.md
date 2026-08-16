# NoSQL

Exploring NoSQL concepts and MongoDB: document storage, CRUD operations,
aggregation, and interacting with MongoDB using the mongo shell and
PyMongo.

## Requirements

### MongoDB command files

- Ubuntu 20.04 LTS, MongoDB (version 4.4)
- All files end with a new line
- First line of all files is a comment: `// my comment`

### Python scripts

- Ubuntu 20.04 LTS, python3 (version 3.9), PyMongo (version 4.8.0)
- All files end with a new line
- First line of all files: `#!/usr/bin/env python3`
- Code follows the pycodestyle style (version 2.5.*)
- All modules and functions are documented
- Code is not executed when imported (`if __name__ == "__main__":`)

## Tasks

### 0. List all databases

`0-list_databases` is a mongo shell script that lists all databases in
MongoDB.

### 1. Create a database

`1-use_or_create_database` is a mongo shell script that switches to (and
creates if needed) the `my_db` database.

### 2. Insert document

`2-insert` is a mongo shell script that inserts a document with a
`name` attribute set to `"Holberton school"` into the `school`
collection.
