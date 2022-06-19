All right, and welcome to the course, and we're going to kick things off by quickly covering what

in the world is here, and there's no better place to start than the official ducks of rehab, which,

by the way, are located at react just dot org.

Once we navigate there, we are greeted by this one profound sentence react is a Joska library or building

user interfaces.

That said, my friends, not a Ph.D. dissertation paper, just a short, concise, one sentence explanation

while I'm a big fan of Straight to the Point answers, unless one by far sums up react the best.

Let me elaborate a bit on that.

So React was developed at Facebook in 2011 and currently it is by far the most popular.

Yes, you heard correctly the most popular JavaScript library to build user interfaces.

As a side note, some of react competitors are angular view.

And so if there's one thing that I would want you to take away from this video, it is this one.

When it comes to react, it's all about components.

And you can think of components as independent chunks of user interfaces.

Components can be as small as one element.

Or you can be a rebel and jam your entire Facebook clone in one component.

At the end of that, a lot of it depends on your needs and wants.

In reality, though, you probably will avoid the one component, since it's somewhat defeats the purpose

of using react in the first place.

You see, the benefit of the component is that you can build a bunch of independent, isolated and most

importantly, reusable user interfaces that you can then piece it together just like Lego blocks and

as a result build even super complex apps without going insane.

While their app can have as many components as you would like, it will always, always have at least

one called root component.

We already glossed over it a bit, but just to reiterate the major benefits of using components and

essentially react, develop your next app are following.

You can build independent pieces of user interfaces, meaning changing logic or layout in one command

will not break your whole up.

One component is ready to go.

You can reuse it all throughout Europe, but component code is still stored in one place.

So if you ever need to make some changes, you don't have to run around like a headless chicken, simply

locate the component, apply the changes and all the instances will be automatically updated.

And of course, let's also not forget about speed.

You say behind the scenes react is using something called virtual dom, where only the component that

needs to be updated is effective.

And what's really cool, it's done without rendering the whole which in turn, of course, increases

the speed of your final product and as a result, the user experience as well.

Before I let you go, I also want to show you somewhat typical example that everyone uses to show react

components in action, and that is no other than our beloved Twitter.

So as we're looking at the screen and by the way, I can see you getting distracted by my content,

focus, people focus.

We are here to learn.

Where was I?

Oh, yes, the command.

Let's take a look at the sidebar.

And as I'm looking at it, I can see a bunch of links.

How you probably noticed that each link is pretty much the same structure where there's some kind of

icon as well as the text.

So essentially what we could do is set this up as one component.

And what that means is that we'll just set up a structure.

And everywhere where we would want to use it, we would just need to pass in the data.

And by there, of course, I mean the specific icon that is going to be rendered and then, of course,

the text.

And as a result, what that also means that I can reuse that component all throughout my application

however I would like.

But if I would want to make some changes, for example, if I would want to add something here, I can

just change it in one place and then all the instances will be automatically updated.

So that would be a Linc's example.

And you can.

Probably already guessed that the same, for example, would work with the Post, because when we're

looking at the post, what do we have?

We have some kind of picture.

We have the name.

Of course we have the text.

We have all the retweeted options as well as likes on the comments.

But the only thing that is changing is the data.

So the person who is posting it and how many likes and that sort of thing.

So the point that I'm trying to make is that as you're looking at the application, you can see a bunch

of places where we can set up a react component and then use all the awesome benefits the components

provide.