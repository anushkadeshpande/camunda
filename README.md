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




In the enterprise edition, one can view audit logs in the ui
![image-1](https://github.com/anushkadeshpande/camunda/assets/53345232/ef883fb9-4a9d-4a3c-90cc-9c5d4361761b)

Since this option is not available for the community edition, we need to hit the REST API

```
http://localhost:8080/engine-rest/history/activity-instance?processInstanceId=9b5052bc-273f-11ef-ae24-e4a8dfe1fb38
```

The process history can be checked using this endpoint
```
http://localhost:8080/engine-rest/history/detail
```

Check <a href="https://docs.camunda.org/manual/7.16/reference/rest/history/?__hstc=218867270.31ff3025710d3b0217351f6eb10867f8.1718029690247.1718029690247.1718034111450.2&__hssc=218867270.1.1718034111450&__hsfp=486857294&_gl=1*1edhuwc*_ga*MTY0MTU2MzYxMi4xNzE4MDI3MDQ1*_ga_4EYN8X5FNR*MTcxODA0NTU1MC40LjAuMTcxODA0NTU1MC42MC4wLjA">this</a> for more endpoints related to history.

<hr>


### H2 Database:

Camunda 7 by default uses h2 database. The db console can be accessed using this link
```
http://localhost:8080/h2/h2
```

Enter the JDBC URL as:
```
dbc:h2:./camunda-h2-dbs/process-engine;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE
```

And the default username and password are : `sa/sa`
