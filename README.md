# lambda-bedrock

## Requirements

- AWS CLI already configured with Administrator permission
- AWS serverless Framework installed(serverless --version){Framework Core: 3.38.0}

## Deploy this demo

We will be using Serverless Framework along aws cli.

Deploy the project to the cloud:

```
npm install
serverless deploy
```

Next times, when you update the code, you can deploy with:
```
serverless deploy
```

Test this function local

```
serverless invoke local --function generateJokesFunction
```

## Demo output
![image](https://github.com/abhay321/lambda-bedrock/assets/15007100/edfdf680-fe78-4f40-9a23-096378dd3dc2)

![image](https://github.com/abhay321/lambda-bedrock/assets/15007100/aa95a2c1-b6e5-4ad9-af6c-eea3dccca117)

