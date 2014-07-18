Unit Framework
===========

Features
--------

* Self Contained Units - Each with backend logic / HTML / routes
* Unit Composition - Create new units out of existing ones
* Declarative manifestation - Units can specify where it should appear (as opposed to composition)
* Separated layouts - Bootstrap compatible HTML layout with placeholders for Zones that units can appear
* Unit intercommunication - A Unit can manipulate input data of any other unit in the system.


Implementation
--------------


Each unit is a combination of following

* Controller - a javascript file. get executed when the http URL is requested, if the given Unit appears in the page. creates the viewmodel (a json data object).
* View - a jag file. renders HTML when the execution reach the placeholder in the layout. use the data in the viewmodel to get dynamic data.
* Association Logic - a javascript file. gets executed for every request. responsible for pushing data to other units.
Definition - a json file. specifies the routers and zones the current Unit will appear


Spoon Web App
=============

A Jaggery web app that acts as a scaffolding tool for developing Unit based web apps. Spoon itself is written using Unit framework

TODO
====

- [X] Add ability to assign weights for each unit.
- [ ] Unit files (eg: view.jag) should have unique names.
- [X] Improve jsonMerge to merge arrays by key.
- [ ] Fount controller to mimic dynamic routes at development time.
- [ ] Auto generate page files.
- [ ] Show rendering stages in UI.
- [ ] Show route details in UI.
