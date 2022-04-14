# RoomMate Data Model

## List of tables in the database

`*` denotes key for the table

`users(id*, username, email, password)`

`plans(id, user_id)`

`items(id, name, plan_id, is_preset, width, height, pos_left, pos_top, img_link)`

`list_items(id, name, list_id, is_checked)`

`user_lists(id, user_id)`
## Description of tables

RoomMate has many users. Each user has a user ID, username, email and password.

RoomMate also has many floor plans and items. Plans have a plan ID and a user ID of the user who created the plan. Items have an Item ID and information on dimensions and position on the canvas. Furthermore, items have a plan ID that corresponds to the plan this item is located in (items can exist in multiple plans). The boolean is_preset checks whether or not this item is a preset in all plans and should be automatically loaded.

A feature being implemented is the "To-Get List". List items are different than items that can be placed inside rooms, so there is a separate table for them. List items have an ID as well as a name, the list ID in which the item occurs, and a boolean that denotes whether the item is checked off or not.

Users have their own "To-Get List" and can collaborate with other users. The user list table will have its own ID and the ID of the user(s) who own the list.
