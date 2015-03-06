# Sinatra Template
------------------
My template for Sinatra applications utilizing the asset pipeline. 

This of course requires Ruby and was created with `ruby-1.9.3-p545`. 

If you are using [RVM](http://rvm.io/) or [rbenv](https://github.com/sstephenson/rbenv), it also includes a `.ruby-version` file for the version it was created with (at the time of this writing ruby-1.9.3-p545). 

It also includes a `.ruby-gemset` file for you to specify which gemset you would like to use

## Creating a Project from this template

There are two ways to create a project from this template.

1. Download [master.zip](https://github.com/kwbock/sinatra-template/archive/master.zip) and extract it to a directory of your choice.

1. Run the following commands to create an empty project with this template and then initialize a fresh git repository.

	``` 
	    mkdir <project_name>
	    cd <project_name>
	
	    # this is to get around cloning with the history
	    svn export --force https://github.com/kwbock/sinatra-template HEAD .
	
	    # initialize git repository with fresh history
	    git init .
	
	```

## Running the application

To run the app run the following commands from the directory.

```
    bundle install
    bundle exec unicorn
```

App should be available on [http://localhost:8080](http://localhost:8080)
