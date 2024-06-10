# Camunda

## Cockpit:
This is the admin dashboard where admins can manage migrations and monitor processes
![image](https://github.com/anushkadeshpande/camunda/assets/53345232/6f1e192f-ace9-4aea-be75-39e8938f562e)


![image](https://github.com/anushkadeshpande/camunda/assets/53345232/5a51be04-0157-4714-b903-20d71ce58edb)

![image](https://github.com/anushkadeshpande/camunda/assets/53345232/6a865fd2-bd1f-41c8-9641-2d324ae1b295)


In enterprise edition, there is no option to delete processes.

But it can be achieved using the REST apis.

1. Get the process ID
```
curl -X GET "http://localhost:8080/engine-rest/process-definition?active=true" -H  "accept: application/json"
```

2. Delete it
```
curl -X DELETE "http://localhost:8080/engine-rest/process-definition/key/<ProcessKey>" -H  "accept: */*"
``` 

Refer: https://camunda.com/blog/2022/03/qa-the-one-where-you-completely-delete-a-process-definition/
