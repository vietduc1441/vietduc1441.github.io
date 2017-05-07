---
layout: page
title: Mendix Microflow Diff tool
permalink: /mxmfdiff/
---

# 1. Introduction: 
- I am javascript developer, developing widgets for Mendix applications.
  As a routine, I often check my code one time before commit, review and merge code from colleages. 
  For that kind of work, one indispensable tool is "git diff". 
  Quite often, i also work with Mendix modeller for  server side. 
  Great tool for business engineer by it's intuitive way to design the logic.
  In term of code review, What mendix can do:
    - Show list of changes between 2 revisions
    - Show overview history of microflow 

- Looking at another tool to do code review, Mendix user would want to have a look with more details on changes of: 
    - Xpath
    - Attribute value
    - New settings of widget 

It was impossible to developer to intereact with it until last year. Then, Mendix have just had their SDK, making it possible to developers to read all mendix app info: mf, forms, domain models. 
In theory, you can just load all information of a Mendix app and then it's up to you to cook them. 

I think i have enought material in hand to implement a tool that allows user to have better ways to review their modelling code. 
For some of the first versions of the tool, I want to mainly focus on analyze Microflow and also get feedback of users on the tool.

# 2. Chosen technology
- React: for its ability to build application by assemble different components
- Mobx: for its easiness to learn and apply quickly
- Electron: for its ability to build standanlone app. For the future, it's also easy to be converted to an online version.
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
