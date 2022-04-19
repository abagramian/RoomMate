# RoomMate Data Model

_updated to support use of Firebase instead of SQLite_

## List of collections in the database
__plans__
document [auto-generated ID]
&emsp;name: "[name of plan]"
&emsp;creator_uid: "[UID of user who created plan]"
&emsp;canvas_width: [# in pixels]
&emsp;canvas_height: [# in pixels]

__items__
document [auto-generated ID]
&emsp;item_id: "[item identifier]"
&emsp;name: "[name of item]"
&emsp;plan_id: "[plan id (document) item is in]"
&emsp;is_preset: [true/false]
&emsp;width: [# in pixels]
&emsp;height: [# in pixels]
&emsp;position_left: [location on x-axis]
&emsp;position_top: [location on y-axis]
&emsp;image_link: [reference to image]

__user_lists__
document [auto-generated ID]
&emsp;user_uids: "[array of users who have access to this list]"

__list_items__
document [auto-generated ID]
&emsp;name: "[name of item]"
&emsp;list_id: "[list id (document) item is in]"
&emsp;is_checked: [true/false]

## Users and Firebase
Firebase provides platforms for user authentication. We are utilizing the email/password authentication to store user information. When a user creates an account, a user UID is generated. This is used in any collections where a user is referenced.

## Description of collections
RoomMate has many floor plans and items. Plans have a plan ID (document ID), a user UID of the user who created the plan, and dimensions. 

Items have an Item ID and information on dimensions and position on the canvas. Furthermore, items have a plan ID that corresponds to the plan this item is located in (items can exist in multiple plans). The boolean is_preset checks whether or not this item is a preset in all plans and should be automatically loaded.

A feature being implemented is the "To-Get List". User lists have a List ID (document ID), and a list of user UIDs that have access to this list.

List items are different than items that can be placed inside rooms, so there is a separate collection for them. List items have an ID (document ID) as well as a name, the list ID in which the item occurs, and a boolean that denotes whether the item is checked off or not.

## A note on switching to Firebase
We have decided to use Firebase instead of SQLite (as originaly planned) because Firebase is designed to be easily integrated into JavaScript projects. Additionally, Firebase has useful features such as authentication.