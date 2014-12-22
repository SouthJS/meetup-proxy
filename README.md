# Meetup.com API proxy

This is a very simple proxy to list upcoming events for any meetup.com group.

## Installation

Login at meetup.com and get your API key. It is recommended to register a new
user for that case, such as `YourMeetupBot`.

API key: https://secure.meetup.com/meetup_api/key/

Please keep your key secret!

Just add your key to `config.js`.

## Start proxy

Just type:

```shell
node index.js
```

Now you can access upcoming events via:

```
http://your.host:3000/:groupName/events
```
