In this example, we're doing the following:
1. Passing username to Camunda
2. Calling `/getUserId` endpoint and fetching the `userId`
3. If `userId` is not null, we're calling `/getFavCandies` endpoint and getting user's favorite candies
4. From the response, we're counting the number of candies
5. If the number of candies is even, we proceed to call the final API 


![image](./orchestration.png)


## Diagram Description:
#### 1. GetUserId
   a. Define a connector with id `http-connector`
       ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/02d7ef14-35df-4f58-b360-3ed9433ae737)
   
   b. Store the input payload in `get_user_id_payload` variable <br>
       ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/5a98b49c-78af-4cfb-a3c0-95081061e876)
   
   c. Specify connector inputs - `headers`, `method`, `payload`, `url`

   d. Fetch `userId` from response and store it in `user_id` variable <br>
       ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/e079a8e6-a5d9-4627-9bd0-3ab9040cccf0)

<hr>

#### 2. Next, a `Gateway` is added to check if userId is null or not

  ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/513e76c6-43b1-4d92-88cc-407ab88dba9c)

<hr>

#### 3. Next, another REST call is made to fetch favorite candies and store it in `favCandiesResponse` variable (Same as step 1)

<hr>

#### 4. Then, a `script task` is added to fetch the number of candies returned by the previous task
  ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/fc09a9d0-02d5-4a91-9e7f-2ed1740bb6db)

<hr>

#### 5. Another decision node is added to check if the number of candies is odd or even

  ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/a14cc1b4-4a88-4f02-9d57-4b1aadcde39e)

<hr>

#### 6. Finally, the final api is called

> Note: An extra user task `Show Output` is added because the process terminates after the final API call and the community version does not show the history of execution. Adding the human task makes the process wait at that step

<hr>

## Execution:
#### 1. Deploy the BPMN via modeler 
#### 2. Go to tasklist and click on `Start Process`
  a. Select the process `Number of Candies` <br>
  b. Add a new vaiable `userIdPayload`, set type to `String` and put the payload <br>
  ![image](https://github.com/anushkadeshpande/camunda/assets/53345232/4a16288d-4bff-4210-a9e3-1c02f1e99f4c)

<hr>

#### 3. Check the execution instance for all variables and execution status
![image](https://github.com/anushkadeshpande/camunda/assets/53345232/5fc84b78-64e7-44e8-b987-f4e5b65465e5)
