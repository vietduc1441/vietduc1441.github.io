---
layout: page
title: Mendix Microflow Diff tool
permalink: /mxmfdiff/
---

# 1. Introduction: 
- I am javascript developer. Like many others, I got to check my code before commit, review and merge code from colleages. 
  Quite offten, i also work with mendix in server side. 
  Great tool for business engineer by it's intuitive way to design the logic.
  In term of code review, What mendix can do:
    - Show list of changes between 2 revisions
    - Show overview history of microflow 

- I think, What users want more.
    - A more detailed look on changes of: 
    - Xpath
    - Attribute value
    - New settings of widget 

- Last year, Mendix just have their SDK, making it possible to developer to read all mendix app info: mf, forms, domain models.
I think i have enought material in hand to implement that tool.
In theory, you can just load all information of a Mendix app and then it's up to you to cook them. 
For some of the first versions of the tool, I want to focus only on analyze Microflow and also get feedback of users on the tool. 
# 2. Chosen technology
- React: build application by assemble different components
- Mobx: find it's easy to learn and apply quickly
- Electron: want to to be present as standanlone app. For the future, it's also easy to be converted to an online version.
# 3. Pre-requisite
- You need to generate your APIKey. Following these steps to get one:
# 4. Feature
As you enter your username and ApiKey. The application will use it to connect to Team Server to get the list of your applications, to create an OnlineWorkingCopy.
And the following is what the tool provides:

- Load the list of applications
- Load 2 revisions and their microflows
- As you move the microflow list dropdown, the microflows be loaded and compared on the fly
- Visualize microflow as it is on Mendix Modeller
- Properties of each action on Microflow is displayed as it is on Mendix Modeller
-
