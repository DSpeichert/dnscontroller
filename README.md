Launching
===============

Install meteor - https://www.meteor.com/install:

```curl https://install.meteor.com/ | sh```

To launch server in development mode:

```cd dnscontroller; meteor run```


dnscontroller - project description
===============

DNS Controller is a GUI/frontend that allows multiple users to associate DNS servers (powered by [godnsagent](https://github.com/DevelopersPL/godnsagent)) with a central place
to synchronize zones and records. DNSController utilizes the dynamic-zone-reload features of godnsagent and exposes zone data in a JSON format that is suitable to consume by
godnsagent. It also knows how to notify godnsagent to refresh DNS zones whenever a change is made.

Security
===============

DNS Controller employs basic user separation. At the current moment, there is no superuser/admin that can view all zones/records. Every user has to associate their own godnsagent
servers by providing an endpoint and a key. Access to zones and servers is restricted to a specific user identified by a username and a password. Registration is (by default) open
to all visitors.

Future development
===============

Areas of improvement:

* DNS record validation
* admin-like access
* REST API for record management with [restivus](https://github.com/kahmali/meteor-restivus)

License
===============

MIT
