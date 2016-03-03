# Meteor-chat-Demo

## Use Package

|Package|ForWhat|
|---|---|
|kadira:flow-router|Router|
|kadira:blaze-layout|Router Management|
|accounts-password|Template of Accounts|
|accounts-ui|UI of accounts-password|
|twbs:bootstrap|bootstrap support|
|peppelg:bootstrap-3-modal|bootstrap3 modal|
|http|Http support|

## Code Structure

```
.
├── client					# client code
│   ├── helpers				# client config and utils
│   ├── includes			# HTML public templates
│   ├── layout				# Flow blaze-layout
│   ├── notFound			# 404 not Found
│   ├── stylesheets			# style
│   └── templates			# for work
│       └── chat			# chat work
├── lib						# router and collections
│   └── collections
├── public					# public resource
│   └── images
└── server					# server code
```

# How to use

## Run

```sh
meteor
```

If it can't run, please check you network.

## AutoRestData

code by `server\reset_data.js` it will auto reset server `Messages` and `Rooms` data when meteor start.

# Bug


## UI bug

CSS design bug.

# TODO

Support RESTful API

License
--------

    Apache License
	Version 2.0, January 2004
	http://www.apache.org/licenses/

	TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
