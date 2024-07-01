# Camunda 7 vs Camunda 8

Refer https://docs.camunda.io/docs/guides/migrating-from-camunda-7/


## Differences

### Embedded Engine
- We could embed an entire camunda server in our app in Camunda 7 but this is not possible in Camunda 8. Camunda server (zeebee) will always be external to the application
example: https://github.com/anushkadeshpande/camunda/tree/main/SimpleDemo

This is the embedded architecture of Camunda 7:
![image](https://github.com/anushkadeshpande/camunda/assets/53345232/2c61da57-7569-4f60-9b57-5967f280b7e0)

This is the currently recommended architecture for Camunda 7:
![image](https://github.com/anushkadeshpande/camunda/assets/53345232/bc593d36-2ff0-4e04-87df-1e087c1d8980)

Check this <a href="https://blog.bernd-ruecker.com/moving-from-embedded-to-remote-workflow-engines-8472992cc371"> blog to know why the latter architecture is recommended.

### Data Types
In Camunda 7, data with different data types could be stored, including serialized java objects. <br>
<a href="https://docs.camunda.org/manual/latest/reference/spin/">Spin</a> made handling XML and JSON data.

Camunda 8 allows only primary data types or JSON objects. <br>
Spin is removed, and any additional conversions required have to be handled using external code, either using libraries like Jackson or Camunda Spin can be included in the app.

### Expression Language
Camunda 7 used <a href="https://docs.camunda.org/manual/latest/user-guide/process-engine/expression-language/">JUEL (Java Unified Expression Language)</a>, which also allowed reading java objects in the app. <br>
Camunda 8 uses <a href="https://docs.camunda.io/docs/components/modeler/feel/what-is-feel/">FEEL (Friendly Enough Expression Language)</a> and expressions can only access the process instance data and variables.

### Connectors
Camunda 8 provides some additional connectors that allow integrating systems like Kafka <br>
Check <a href="https://docs.camunda.io/docs/components/connectors/introduction-to-connectors/">this</a> for more info

### Data storage
Camunda 7 stored all data like instance variables, history, etc in a relational database whereas Camunda 8 stores all of it in elasticsearch.

## Solution Architecture
- Camunda 7

![image](https://github.com/anushkadeshpande/camunda/assets/53345232/ac4cd14a-fa39-49da-99e1-549748350086)


- Camunda 8

![image](https://github.com/anushkadeshpande/camunda/assets/53345232/f8ad9c08-5b03-45dd-b2f5-d138f98646bf)


## Deployment
#### Camunda 7 components:
- Camunda Engine
- A relational database (h2 by default)
- Optimize -- optional
- An elasticsearch db (for Optimize) -- optional

#### Camunda 8 components:
- Zeebee client (embedded in a spring boot app)
- Zeebee broker
- An elasticsearch db (for Operate, Tasklist, and Optimize)
- Optimize, Operate, and Tasklist

![image](https://github.com/anushkadeshpande/camunda/assets/53345232/f5e7ac9b-2f91-43d1-a6a3-ef7d8305019b)



> Check this for diagram conversion from Camunda 7 to Camunda 8 https://github.com/camunda-community-hub/camunda-7-to-8-migration/tree/main/backend-diagram-converter



Also, check this blog https://medium.com/@shashikumar403/camunda-8-v-s-camunda-7-dbf7b0b92fc0

For more examples, explore the repositories here https://github.com/berndruecker?tab=repositories
