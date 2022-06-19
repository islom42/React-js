And before we go any further, let me just give you a brief overview of the folder structure and create

react up, and I must warn you that throughout the video I'll probably zoom in and zoom out quite a

few times.

So up on the top, we have all the modules.

Of course, this is where we have all our dependencies.

So if you remember previously when we installed Bootstrap, we essentially had only one folder.

Now, of course, since the dependencies that our project has have their own dependencies, well, our

node modules folder, of course, is way, way bigger.

And of course, this is why when we'll be setting up our source control, we will ignore this folder.

Now, before we go any further, I just want to show you a cool thing, how the package works together.

We know what modules please keep in mind that is not unique to create react app, but I think it's going

to be a very useful info.

So, for example, if I navigate two packages, we already know that, of course, this is going to

be our manifest of all.

And in here, as you can see, these are the dependencies that we are using in our project, and then

of course, in order to start up our application, we will need to run and start.

Now, what if I delete the node modules?

What if I say, you know what, I don't need this particular folder?

OK, I deleted.

Now, in order to stop the server, the command that you're looking for is control and see.

So that is going to stop the server.

And of course, once I refresh notice, I'm going to get a big fat error.

Now I'll try to run and start, but of course I should get a Y one because I don't have my dependencies

anymore.

So if I run and start, I will, of course get my big fat error.

Now, do you think everything is lost?

And of course the answer is no.

What we would need to do is run, npm, install.

So this of course, we'll just check that in the packages.

And we have a list of our dependencies and it will just install for us and that the moment we are on

NPM install, this will install all our dependencies.

And again, we're good to go.

And this is exactly what I was saying in the previous videos, where once we get our project from the

GitHub, whether we clone it, whether we forget whether we are downloading, then of course we just

need to run, NPM, install, because list of our dependencies are going to be there.

So that's why, of course, we don't need to share our project, meaning we don't need to share the

massive node modules folder.

So in this case, what we could do is just npm start and everything will run exactly like we expect,

because of course, now, of course, we installed all our dependencies back.

Now, after that, we have the public folder where we'll find Index Estima.

Now, this is the index file that is displayed over here.

So I can tell you right away that all of our work will do it in the source.

But there are some few useful things that we can do in the index HMO, for example.

We could change the title, correct.

So at the moment I have racked up, but I could go with react online tutorial and don't be scared of

this file is just like a regular HTML file that we have worked already before.

And if you're looking at the syntax, it also resembles everything that we have seen already in the

HDMI files.

Now, what other useful things that we can do in the next schlemiel?

Well, we could add Google fonts because like I just said, the syntax would be exactly the same, like

we have been using already in the Schimel or the font, awesome icons or things of that nature.

And then more importantly, we have over here this div with an ID of a road.

And I know it sounds mind boggling at the moment, but this is where our whole JavaScript application

eventually is going to live.

I know sounds really mind boggling at the moment, but don't worry.

Of course I will swing back to road when we cover some basics of the react setup.

So that is going to be normal in our public.

Then we have a folder that we currently don't see, and that is the built one, remember in the package

that we had the command of start.

So that, of course, started our servers and now let me stop it.

But we also have a built on this command, essentially sets up a production already built.

So let me run it and then, of course, I'll show you.

So npm run, build.

So we run this command and then of course, we'll see the build folder as well.

Now it's going to be very hard to tell anything in that folder, meaning it will open up in HMO.

You'll notice that everything has been nicely modified.

And essentially what you can do with this folder, it's just static assets.

So, for example, not you can just use for drag and drop option now, not LFI is, of course, the

hosting provider that we will use throughout this tutorial.

But of course you can do it.

And the other place where you can just grab the static assets that you do it for to build folder.

And up next, we have the source folder where we'll do most of our work and that's why we won't cover

it in detail in this video.

As far as the files we have, the access, that's where eventually there's going to be access for our

application.

We have abcess where eventually all our components will meet our keep in mind that the name is optional.

You can call this shake and bake.

It doesn't really matter is just convention has to call this app G.S. and then we have the file for

testing, which we don't care about.

We have indexed access.

And of course, in here, again, we have more success for our application.

We have Index G.S. where we will start working starting from the next video, although technically NextRadio

will just wipe out all the bar.

So I guess more properly would be, say, in the video after that, we'll start working in the next

year.

And even though there is a lot of things already here, most importantly, what I would want you to

notice is that we are targeting that route there.

Remember I showed you in the index?

Actually, I said that, of course, this is where all our application is going to live.

So essentially, we have Index Jass, we're importing the app.

So app, of course, is going to be a file where all our components eventually will meet and we'll place

our app in the road in the dev with an ID offering.

That's why I said that even though it looks a little bit mind boggling, put all our application will

live in that one.

Dev with an idea, of course.

Then we have a logo self-explanatory.

That is the logo that we see right now.

And then of course the service worker as well as set up.

That's which we won't cover in this particular course while we're still on a subject, we have get ignored.

And like I said, this is a file that just specifies which files will be ignored by our social control.

Of course, up on the top, you can see the node modules, which, like I mentioned previously, will

be ignored because there's no point of adding them as well as the build.

So build will also be ignored because either you'll do your own drag and drop.

That's one of the options that you can do as far as your production build, or you'll use some kind

of continuous deployment where essentially the provider, the hosting provider, does the build process

for you.

And then, of course, at the end, like I said, there is a package, Jaxson, where we have the manifest

of our project.

Most importantly, we care about the dependencies as well as the commands that we can run, start and

build all the way at the bottom.

We have read me, which is a markdown file that just contains information about our project that should

do it for the folder structure.

Next video, we'll clean up some of the boilerplate and then finally we'll start working on our first

react component.