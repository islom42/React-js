When we install node, we also automatically install NPM or node package manager.

The reason why it's successful is because NPM allows us to save time, automate our tasks and avoid

reinventing the wheel.

We do that by installing packages or dependencies.

Packages can be as simple as utility functions and as complex as full blown frameworks and everything

else, of course, in between.

Keep in mind that the package we are going to use later the Create React app already does all the heavy

lifting for us under the hood.

So this video is just to give you a general overview and for the most part, you'll be just hearing

and PM start on a keyboard for the remainder of the course, a command that will cover a bit later in

the course.

As far as General NPM commands, we have NPM in it that is going to create package.

So essentially the manifest file for our project where also we'll see list of dependencies, then we

can install, package, Byronic, NPM, install and then package your name and then we would need to

run dash dash type.

Now as far as does does save in the latest versions of Node, you already don't have to run that meeting.

This would just save it to a list of dependencies or like I said, in the latest versions of Node,

you don't have to do that anymore.

Now, what I've noticed, though, that once in a while students ask the question and they share the

project.

And then I can see that they have been using older version and they have not been saving dependencies.

So in order for me to run their project, I still need to install those dependencies.

So as a safeguard, I would just still always using the save just in case.

I don't know, maybe your node version is out of date now that is going to install that package locally,

meaning in the project.

Then we also have the NPM install package name that's global.

Now that is going to install the package globally and we can access it anywhere.

However, it comes with a gotcha where when you're doing the global install, most likely you'll be

asked for permission.

And of course, don't worry, I'll show you that with our example.

And lastly, we also have an option of installing package only while we're developing and the flag would

be the same and then the stuff.

Now, what would be the most common one?

I don't know.

Might be testing.

So essentially we only need that package while we're developing.

Then, of course, we're just using it.

And then once we ship to production, we don't need that package anymore.

So remember that testing folder that we created?

So now let's try some things out.

But I'm going to do is first, of course, Zuman in my terminal, then of course, I would want to navigate

there.

So I think the fastest way will be just drag and drop.

Now, of course, I'm in my testing and remember, first we would want to create that manifest while

again, something that create react up the package.

We're going to use those already for us.

So this is just to showcase the general setup.

And in order to get our manifest file, we'll just run NPM in it.

Now, there's a bunch of questions there.

So if you would want to meet that, you can just go with the Y or in my case, I'm going to go with

it.

And that creates a question.

So in this case, what would be the package name?

I'm going to call this app version.

And as you can see, I can skip them if I want to, since, again, this is just to showcase how it's

going to look like.

I'm just going to skip them by pressing enter and this shows what I'm going to currently have in the

package duration.

So of course, I'm going to say that that looks OK.

So say yes.

And now if I check out my testing, I'll have the packages on.

So let me open my text letter here and I'll just drag and drop testing just so I can see that of course

I have my package on and there it is.

So applying the version description, what is going to be the entrance file?

So the main file and in this case it is indexed that is by default.

Of course, we don't have the index jazz and then we have scripts and author.

Now, scripts is an interesting one because we create react up.

Like I was saying, the script that you use most is going to be npm start.

So essentially these are just commands that you can run.

Now let me showcase how we would install a package and we can do it directly from the text letter or

we can do it from the terminal.

Please keep in mind that as long as we're sitting in the same folder, it doesn't matter.

And that's one of the reasons why I like Visual Studio code.

It comes it comes with integrated.

Now how we can access integrated thermal and reduce their code.

We go with control until the end.

Notice here all the way in the bottom I have the thermal and what's really cool that now out right away

kind of be in the folder.

So it's not like I would specifically need to navigate there, just like I would do in a terminal.

In this case, when I'm opening up the integrated terminal from the visuals that are called I'm right

Away at my project.

So I'm in the testing now.

Of course, I would want to install first dependency and I'll just randomly install bootstrap.

So we go with NPM install and then whatever is the package name.

So I know that it is bootstrap.

And then like I said, just in case our run, dash, dash, save.

And what you'll notice is that of course we're installing dependencies.

And the moment I do it, notice here how I have the property and the value right now is bootstrap.

So now I installed this dependency and of course I can use it locally.

Now, what you'll notice is that we have node modules.

This is going to be a folder where we'll have a list of our dependencies.

Now, at the moment, we have bootstrap, but then again, once we start using create ragtop, you'll

see that, of course, since it is a bigger package, it uses more and more dependencies.

So our node modules folder is going to be way bigger.

Now, as a side note, when you're sharing this, for example, when you're adding us to GitHub, your

folder, you usually just add packages on.

So essentially you wouldn't share no modules because usually that is a massive, massive folder.

So much more easier way is just adding everything to get but not the node modules.

So essentially just a package JSON.

And then once you clone a fork or download the folder, which you can do is just one NPM install which

installs all dependencies down.

Don't worry, of course we'll cover that a little bit later.

And of course, because there are some projects that are already set up for you.

So the only thing you'll need to do is just follow the link to repo get.

And then once you get the link, meaning once you clone it, work it or down on it, then you just need

to run and install.

So this would be for the local package, which essentially wants to have installed bootstrap.

Now I can start using how I remember I also said that we can use global packages.

Correct.

Now I can install global package from the integrated terminal or I can do it again from the terminal.

That's up to you.

The difference is that if you install a package globally, you can use it anywhere in your machine,

meaning you can use it on the desktop, you can use it in the project or whatever.

Now, again, the Gocha with a global install is that it is going to be asking for missions.

So in this case, you know what?

I'm going to go to Thurmont just to showcase that, for example, I would be installing a Gadsby Kly

from there.

Remember, this was a road folder and the name was NPM Install.

And then I go with Gadsby Zeolite and then I need to go with Dadge again.

You don't need to run this command.

This is just Ashoka's that if you won't have permissions, which at the moment I don't, since I'm not

running Shuto, then of course I'm going to get a big factor.

And there is of course, like I was saying, we get a bunch of errors.

So again, in order to augment that, we would need to add pseudo so I could go back to my previous

command and I would just add Sudar over here.

And then once you're on, of course, it's going to ask for your password.

So you would need to add your password.

And then once you do, of course, you just press enter and then the install is going to be successful.

So that's the general overview of NPM, how we would install locally and Howard set up globally.

Again, when it comes to create react app, it does all the heavy lifting already for us under the hood.

So the only thing we'll really need to care about is just checking out the scripts.

So essentially the script commands that we have so that we will know how to set up the deaf server.

And also once in a while, of course, we will install some package locally to our project, whether

that is bootstrap, whether that is react icons or something along those lines.

