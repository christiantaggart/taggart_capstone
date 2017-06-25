# Project Log
### This is the process I took to create my project

#### Back story
Recently I was exposed to the Unity Game engine and I had the choice of using JavaScript or C#. All my life I've wanted to develop video games and my favorite game engines are built on C++. So I decided to opt for something that might place me closer to my goal of learning a true "Lower-Level" Programming language. I started Writing scripts for Unity in C# and I have been excited to create code using C# ever since.

I wanted to continue building my understanding of C# so I decided to create a Website where I could get to practice my new favorite programming language and also be able to present a web-app because thats what this Galvanize Immersive was focused on

#### Onto some tech:


#### Installing ASP.NET CORE
- I installed dotnet version 1.0.4

#### I then installed a Single Page Application template engine [Source](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/)
```sh
dotnet new --install Microsoft.AspNetCore.SpaTemplates::*
```

#### Front-End
While keeping my my time constraints in mind. I still chose to pick a new Front-End Framework as well as a completely new language to me.
My options were Angular 4, Aurelia, Knockout, React and React with Redux.

While I really wanted to use React with Redux after doing a build and noticing just how different the workflow was I made the decision to switch to Angular 4.
I really like the Chrome extensions that work with react though and I look forward to developing with it in the future.

- I am using Angular version 4.1.2




---



"Publishing for deployment
To deploy your application to production, you can use the publish feature which is built into dotnet command line tooling and Visual Studio. For example, on the command line, run:"

```sh
dotnet publish -c Release
```
"This will produce a ready-to-deploy production build of your application. It includes .NET code compiled in Release mode, and invokes Webpack with the --env.prod flag to produce a production build of front-end assets. Equivalently, you can use the Publish option from Visual Studio’s Build menu."

--- 

### NOTES FROM Rhys Goehring 
"oh thats right it’s a .net server, the configs will prob be different. this guy has a folder called .ebextensions with a file called nodecommand.config:"

```option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
```
"and another folder called .elasticbeanstalk with a config.yml:"
```branch-defaults:
  master:
    environment: bookShopU
global:
  application_name: booksShop_Universal
  branch: null
  default_ec2_keyname: null
  default_platform: Node.js
  default_region: eu-west-1
  instance_profile: null
  platform_name: null
  platform_version: null
  profile: eb-cli
  repository: null
  sc: git
  workspace_type: Application
```

### DEPLOY THE APP IN AWS ELASTIC BEANSTALK
1. Register an account in aws.amazon.com
2. install Elastic Beanstalk CLI following the instruction in: http://docs.aws.amazon.com/ elasticbeanstalk/latest/dg/eb-cli3-install.html
3. If you don't have a user, create one in IAM following the instruction in the lecture
4. In the App project folder, create a new directory called: .ebextensions and inside it, create a new file: nodecommand.config with the below
5. Initialize an Elastic Beanstalk repository in your project folder by running in Terminal the command: ed init and choose the country that will host your created environment and answer to the rest of questions. The first time you create an environment from a computer you will be asked for the aws-access-id and the secrete-access-key you get when you create a new user in AWS

"Rhys: although he’s using mongodb which is deployed online elsewhere"